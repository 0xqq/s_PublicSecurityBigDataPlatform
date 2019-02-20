personId = GetQueryString("personId");
companyId=personId;
$(document).ready(function () {

    analysisCapital();   //资金流分析初始化
	initAllKeyMonitorEnterprise(1,15);   //资金流分析全部账户列表
    leftTu();//可疑帐户，正常账户力导图
    informationMonitoring();  //信息监控
    rightTu();

});
function allCompany(){
	$(".meng1,.listA").show();
};

function closedList(){
	$(".meng1,.listA").hide();
}
function analysisCapital(){
    var data =[{
        "susp_flag": "0",
        "account_id": "1001",
        "bank_deposit": "中国银行",
        "feature": "账户正常",
        "real_name": "张树林",
        "account": "12345678980008"
    }, {
        "susp_flag": "1",
        "account_id": "1002",
        "bank_deposit": "北京银行",
        "feature": "账户异常",
        "real_name": "李淑萍",
        "account": "424214214219096"
    }, {
        "susp_flag": "1",
        "account_id": "1003",
        "bank_deposit": "浙江银行",
        "feature": "账户异常",
        "real_name": "王武鸥",
        "account": "321321321321312"
    }, {
        "susp_flag": "1",
        "account_id": "1006",
        "bank_deposit": "北京银行",
        "feature": "账户异常",
        "real_name": "张淑兰",
        "account": "75756746785761"
    }]
        $(data).each(function(index,item){
            item.index=index+1;
        });
    loadTemplateData(data, $("#tAnalysisCapital"), $("#analysisCapital"));
};


function informationMonitoring(){
	var data = {"data":{"suspPersonId":"1001","suspPersonName":"张树林","suspSex":"男","idcardno":"460747478748982000","birthday":"1987/03/24","permanent":"山西","temporaryAddress":"太原市","suspReason":"传销","suspContent":"集结社会闲散人员，通过威逼利诱等手段，进行传销行为","photo":"../images/pic/1001.jpg"}}
    loadTemplateData(data, $("#tInformationMonitoring"), $("#informationMonitoring"));
};


function leftTu() {
    var DATA = {"data":[{"feature":"账户正常","name":"张树林","account":"1001"},{"feature":"账户异常","name":"李萍","account":"1019"},{"feature":"账户正常","name":"朱武","account":"1007"},{"feature":"账户异常","name":"张淑兰","account":"1006"},{"feature":"账户异常","name":"史兆春","account":"1004"},{"feature":"账户异常","name":"王武鸥","account":"1003"},{"feature":"账户异常","name":"李淑萍","account":"1002"},{"feature":"账户正常","name":"赵丽萍","account":"1013"},{"feature":"账户正常","name":"张素霞","account":"1012"},{"feature":"账户正常","name":"刘鹏龙","account":"1010"},{"feature":"账户异常","name":"赵水平","account":"1009"}],"link":[{"target":"2","source":"4"},{"target":"6","source":"2"},{"target":"7","source":"4"},{"target":"6","source":"0"},{"target":"4","source":"7"},{"target":"4","source":"2"},{"target":"10","source":"3"},{"target":"4","source":"1"},{"target":"2","source":"6"},{"target":"2","source":"9"},{"target":"10","source":"8"},{"target":"5","source":"0"},{"target":"3","source":"10"},{"target":"8","source":"10"},{"target":"5","source":"9"},{"target":"0","source":"3"},{"target":"0","source":"5"},{"target":"1","source":"4"},{"target":"0","source":"6"},{"target":"3","source":"0"},{"target":"9","source":"2"},{"target":"9","source":"5"}]}
    var dataNodes=DATA.data;
    var dataLinks=DATA.link;
    var nodes=[];
    var links=[];
    var imagesName;
    $(dataNodes).each(function(index,item){
        var name=item.name;
        var account=item.account;
        var feature=item.feature;
        if(feature=="账户正常"){
            imagesName="../images/foundsperson_03.png";
        };
        if(feature=="账户异常"){
            imagesName="../images/account.png";
        };
        console.log(item.feature)
        var objNodes= {name: name, account: account, image: imagesName}
        nodes.push(objNodes);
    });
    nodes[0].image=imagesName
    $(dataLinks).each(function(index,item){
        var source=parseInt(item.source);
        var target=parseInt(item.target);
        var objlinks= {source: source, target: target, weight: 1, color: 60}
        links.push(objlinks);
    });
    accountFund("fund", 900, 400, 150, links, nodes);
};


function rightTu() {

    var myChart = echarts.init(document.getElementById('main'));

    var nodes = [];
    var links = [];
    var constMaxDepth = 4;
    var constMaxChildren = 3;
    var constMinChildren = 2;
    var constMaxRadius = 10;
    var constMinRadius = 2;
    var mainDom = document.getElementById('main');

    function rangeRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createRandomNode(depth) {
        var x = mainDom.clientWidth / 2 + (.5 - Math.random()) * 200;
        var y = (mainDom.clientHeight - 20) * depth / (constMaxDepth + 1) + 20;
        var node = {
            name: 'NODE_' + nodes.length,
            value: rangeRandom(constMinRadius, constMaxRadius),
            // Custom properties
            id: nodes.length,
            depth: depth,
            initial: [x, y],
            fixY: true,
            category: depth === constMaxDepth ? 0 : 1
        }
        nodes.push(node);

        return node;
    }

    function forceMockThreeData(data) {
    	//根节点的名字
    	var name;
    	//用于判断是否为根节点
    	var isRoot = true;
    	//for循环用于遍历结果集，取出根节点并存到name中
    	for(var i in data.alldata.links){
    		name = data.alldata.links[0].source;
    		if(data.alldata.links[i].target==name){
    			isRoot = false;

    			name = data.alldata.links[i].source;
				var nameArr=name.split("");
				var newArr=nameArr.splice(nameArr.length-19,19);
				var name=nameArr.join("");

    			i = 0;
    		}
    	}

        var depth = 0;

        var rootNode = createRandomNode(0);
        
    	if(isRoot){

			rootNode.name = name;
    		for(var i in data.alldata.data){
				var nameB=data.alldata.data[i].name;
				var nameArr=nameB.split("");
				var newArr=nameArr.splice(nameArr.length-19,19);
				var nameB=nameArr.join("");
    			if(name == nameB){

    				rootNode.category = data.alldata.data[i].category;
    			}
    		}
    	}
        
        
    	
//        rootNode.name = 'ROOT';
//        rootNode.category = 2;
//
      function mock(parentNode, depth) {
//            var nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren));
//            for (var i = 0; i < nChildren; i++) {
//                var childNode = createRandomNode(depth);
//                links.push({
//                    source: parentNode.id,
//                    target: childNode.id,
//                    weight: 1
//                });
//                if (depth < constMaxDepth) {
//                    mock(childNode, depth + 1);
//                }
//            }
            
            
            
            
    		var nChildren = 0;
    		var targetArr = new Array();
    		var weight;
        	for(var i in data.alldata.links){
        		if(data.alldata.links[i].source==parentNode.name){
        			nChildren++;
					var nameC=data.alldata.links[i].target;
					var nameArr=nameC.split("");
					var newArr=nameArr.splice(nameArr.length-19,19);
					var nameC=nameArr.join("");
        			targetArr[targetArr.length] =nameC ;
        		}
        	}
        	for (var i = 0; i <nChildren; i++) {
        		var childNode = createRandomNode(depth);
        		for(var j in data.alldata.data){
					var nameD=data.alldata.data[j].name;
					var nameArr=nameD.split("");
					var newArr=nameArr.splice(nameArr.length-19,19);
					var nameD=nameArr.join("");
        			if(nameD==targetArr[i]){
            			childNode.name = nameD;
            			weight = data.alldata.data[j].weight;
        			}
        		}
        		
        		links.push({
        			source: parentNode.id,
        			target: childNode.id,
        			weight: weight
        		});
        		if (depth < constMaxDepth) {
                    mock(childNode, depth + 1);
        		}
        	}
      
      }
        mock(rootNode, 1);
    }
var res ={"alldata":{"data":[{"name":"张树林|460747478748982000","weight":5,"category":"人员"},{"name":"李淑萍|240362347676478000","weight":5,"category":"人员"},{"name":"王武鸥|240362347676478000","weight":5,"category":"人员"},{"name":"史兆春|460747478748982000","weight":5,"category":"人员"},{"name":"李娜|110345678923222000","weight":5,"category":"人员"},{"name":"张淑兰|460747478748982000","weight":5,"category":"人员"}],"links":[{"source":"张树林|460747478748982000","target":"李淑萍|240362347676478000"},{"source":"张树林|460747478748982000","target":"王武鸥|240362347676478000"},{"source":"张树林|460747478748982000","target":"史兆春|460747478748982000"},{"source":"张树林|460747478748982000","target":"李娜|110345678923222000"},{"source":"张树林|460747478748982000","target":"张淑兰|460747478748982000"}]}}
    forceMockThreeData(res);
    option = {
        title: {
            show: false,
            text: 'Force',
            subtext: 'Force-directed tree',
            x: 'right',
            y: 'bottom'
        },
        tooltip: {

            trigger: 'item',
            formatter: '{b}'
        },
        toolbox: {

            show: false,
            feature: {
                restore: {show: true},
                magicType: {show: true, type: ['force', 'chord']},
                saveAsImage: {show: true}
            }
        },
        legend: {
            show: false,
            x: 'left',
            data: ['叶子节点', '非叶子节点', '根节点']
        },
        series: [
            {
                type: 'force',
                name: "",
                ribbonType: false,
                categories: [
                    {
                        name: '叶子节点',
                        itemStyle: {
                            normal: {
                                color: '#ff7f50'
                            }
                        }
                    },
                    {
                        name: '非叶子节点',
                        itemStyle: {
                            normal: {
                                color: '#6f57bc'
                            }
                        }
                    },
                    {
                        name: '根节点',
                        itemStyle: {
                            normal: {
                                color: '#af0000'
                            }
                        }
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        },
                        nodeStyle: {
                            brushType: 'both',
                            strokeColor: 'rgba(255,215,0,0.6)',
                            lineWidth: 1
                        }
                    }
                },
                minRadius: 5,
                maxRadius: 5,
                nodes: nodes,
                links: links
            }
        ]
    };
    myChart.setOption(option);

//    forceMockThreeData();
//
//    option = {
//        title: {
//            show: false,
//            text: 'Force',
//            subtext: 'Force-directed tree',
//            x: 'right',
//            y: 'bottom'
//        },
//        tooltip: {
//
//            trigger: 'item',
//            formatter: '{a} : {b}'
//        },
//        toolbox: {
//
//            show: false,
//            feature: {
//                restore: {show: true},
//                magicType: {show: true, type: ['force', 'chord']},
//                saveAsImage: {show: true}
//            }
//        },
//        legend: {
//            show: false,
//            x: 'left',
//            data: ['叶子节点', '非叶子节点', '根节点']
//        },
//        series: [
//            {
//                type: 'force',
//                name: "Force tree",
//                ribbonType: false,
//                categories: [
//                    {
//                        name: '叶子节点',
//                        itemStyle: {
//                            normal: {
//                                color: '#ff7f50'
//                            }
//                        }
//                    },
//                    {
//                        name: '非叶子节点',
//                        itemStyle: {
//                            normal: {
//                                color: '#6f57bc'
//                            }
//                        }
//                    },
//                    {
//                        name: '根节点',
//                        itemStyle: {
//                            normal: {
//                                color: '#af0000'
//                            }
//                        }
//                    }
//                ],
//                itemStyle: {
//                    normal: {
//                        label: {
//                            show: false
//                        },
//                        nodeStyle: {
//                            brushType: 'both',
//                            strokeColor: 'rgba(255,215,0,0.6)',
//                            lineWidth: 1
//                        }
//                    }
//                },
//                minRadius: constMinRadius,
//                maxRadius: constMaxRadius,
//                nodes: nodes,
//                links: links
//            }
//        ]
//    };
//
//    myChart.setOption(option);

};


/**
 * Created by jiangzhangtao on 2016/8/18.
 */
function accountFund(id, width, height, lineWidth, links, nodes) {

	try {
		nodes[0].x = 100;
		nodes[0].y = 150;
		var svg = d3.select("#" + id).append("svg")
			.attr("width", width)
			.attr("height", height);

		var force = d3.layout.force()
			.nodes(nodes)
			.links(links)
			.size([width, height])
			.linkDistance(lineWidth)
			.charge(-100)
			.on("tick", tick)
			.start();
		var marker = d3.select("svg").append("svg:defs")
			.selectAll("marker")
			.data(nodes)
			.enter()
			.append("svg:marker");
		marker.attr({
				id: function(d) {
					return "marker";
				},
				viewBox: "0 -5 10 10",
				refX: function(d) {
					return 18;
				},
				markerWidth: 8,
				markerHeight: 8,
				orient: "auto"
			})
			.append('svg:path')
			.attr('d', "M0,-5L10,0L0,5")
			.attr("fill", function(d) {
				return "#fff";
			});
		//(3)为链接添加线
		var link = svg.selectAll(".link")
			.data(links)
			.enter()
			.append("line")
			.attr("class", "link");

		var colors = d3.scale.category20();

		link.style("stroke", function(d) { //  设置线的颜色
				return colors(d.color);
			})
			.style("stroke-width", function(d, i) { //设置线的宽度

				return d.weight;
			})
			.attr("marker-end", function(d) {
				return "url(#marker)";
			});
		//(4)为链接添加节点
		var img_w = 22,
			img_h = 22;
		var node = svg.selectAll(".node")
			.data(nodes)
			.enter()
			.append("g")
			.attr("x", -30)
			.attr("class", "node")
			.call(force.drag);

		var node_img = svg.selectAll("g")
			.append("image")
			.data(nodes)
			.attr("width", img_w)
			.attr("height", img_h)
			.attr("x", -10)
			.attr("y", -12)
			.attr('xlink:href', function(d) {
				return d.image;
			});

		node.append("text")
			.attr("x", -15)
			.attr("y", 20)
			.attr("dy", ".35em")
			.attr("fill", "white")
			.text(function(d) {
				return d.name;
			});

		node.append("text")
			.attr("x", -80)
			.attr("y", 30)
			.attr("dy", ".35em")
			.attr("fill", "white")
			.text(function(d) {
				return d.account;
			});
		var drag = force.drag()
			.on("dragstart", function(d, i) {
				d.fixed = true; //拖拽开始后设定被拖拽对象为固定

			})
			.on("dragend", function(d, i) {})
			.on("drag", function(d, i) {});

		function tick() { //打点更新坐标
			link
				.attr("x1", function(d) {
					return d.source.x;
				})
				.attr("y1", function(d) {
					return d.source.y;
				})
				.attr("x2", function(d) {
					return d.target.x;
				})
				.attr("y2", function(d) {
					return d.target.y;
				});

			node
				.attr("transform", function(d) {

					return "translate(" + d.x + "," + d.y + ")";
				});
			nodes[0].x = 250;
			nodes[0].y = 150;
		}

	}catch (e){
		//var str="<p style=' font-size: 24px; display: block; text-align: left;  line-height: 200px;'>请升级您的浏览器</p>"
		//$("#"+id).html(str);
		//$("#"+id).css({"margin-left":"0px","left":"30%"})
		initNavigator();
	}

};

function imgError(obj){
	obj.src="../images/zwtpts_03.png";

};

function loadTemplateData(data, $tcontainer, $container) {    //handlebars模板

    var context = {data: data};
    var source = $tcontainer.html();
    var template = Handlebars.compile(source);
    $container.html(template(context));
};

function loadTemplateData1(data, $tcontainer, $container) {    //handlebars模板

    var context = {data: data};
    var source = $tcontainer.html();
    var template = Handlebars.compile(source);
    $container.append(template(context));
};

function initAllKeyMonitorEnterprise(currentPage,pageSize){
	AllKeyMonitorEnterprise(currentPage,pageSize);
};

function AllKeyMonitorEnterprise(currentPage,pageSize){
    var DATA ={"dataList":[{"susp_flag":"0","account_id":"1001","bank_deposit":"中国银行","feature":"账户正常","real_name":"张树林","account":"12345678980008"},{"susp_flag":"1","account_id":"1002","bank_deposit":"北京银行","feature":"账户异常","real_name":"李淑萍","account":"424214214219096"},{"susp_flag":"1","account_id":"1003","bank_deposit":"浙江银行","feature":"账户异常","real_name":"王武鸥","account":"321321321321312"},{"susp_flag":"1","account_id":"1006","bank_deposit":"北京银行","feature":"账户异常","real_name":"张淑兰","account":"75756746785761"}],"totalPages":1,"totalCount":4,"currentPage":"1"}
    var totalNums=DATA.totalCount;
    var data=DATA.dataList;
    $(data).each(function(index,item){
        item.index=index+1;

    });
    $("#currpage1").html(currentPage);
    if(totalNums%pageSize==0){
        var pageTatal=totalNums/pageSize
    }else{
        var pageTatal=  parseInt(totalNums/pageSize+1);

    }
    $("#spanTotalNums1").html(pageTatal)
    var PageConfig = {
        pageNum: pageTatal, //总页数
        nowPage: currentPage, //当前页
        lastPage: true, //上一页按钮
        nextPage: true, //下一页按钮
        firstPage: 1, //首页按钮
        tailPage: 5, //尾页按钮
        jumpPage: true //跳页框
    }
    $("#page").html("");
    var listPage = new Pages('page',PageConfig,function(){
        var nowPage = this.nowPage;
        AllKeyMonitorEnterprise1(nowPage)
    });

    loadTemplateData1(data, $("#tAllKey"), $("#allKey"));
};



function AllKeyMonitorEnterprise1(currentPage){
	currentPage=currentPage+1
	var pageSize=15;
	$.ajax({
		type: 'get',
		url:baseUrl+"/forewarn/selectAccountRelation?pageIndex="+currentPage+"&pageSize="+pageSize+"&personId="+personId,
		success: function (data) {
			var totalNums=data.totalCount;
			data=data.dataList;

			$(data).each(function(index,item){
				item.index=index+1;
			});

			var pageSize=15;
			var start=1;
			var end=10;
			$("#currpage1").html(currentPage);
			if(totalNums%pageSize==0){
				var pageTatal=totalNums/pageSize
				if(pageTatal==0){pageTatal=1}
			}else{
				var pageTatal=  parseInt(totalNums/pageSize+1);

			}

			$("#spanTotalNums1").html(pageTatal);

			loadTemplateData1(data, $("#tAllKey"), $("#allKey"));
		}
	});
};

function tonewpagenum(){
	var num=parseInt($("#writepagenum").val());
	AllKeyMonitorEnterprise1(num-1);
	var obj=$("#page").children();
	for(var i=1;i<obj.length-1;i++){
		obj[i].style.backgroundColor="#00092e";
		obj[i].style.color="#91a0ad";
	};
	if(num<1||num>obj.length-2){return};
	obj.eq(num).css({"backgroundColor":"#0085f5","color":"#FFF"});
};

function loadTemplateData1(data, $tcontainer, $container) {    //handlebars模板

	var context = {data: data};
	var source = $tcontainer.html();
	var template = Handlebars.compile(source);
	var tmpStr=$("#title");
	$container.html("");
	$container.append(tmpStr);
	$container.append(template(context));
};

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};


function initPagination(id,totalNums,pageSize,start,end,funName) {

	$("#"+id).pagination(totalNums, {
		num_edge_entries: start, //边缘页数
		num_display_entries: end, //主体页数
		callback: funName,    //鼠标点击
		items_per_page: pageSize
	});
};



function initNavigator(){
	//判断浏览器是否是IE9以下
	var ua = (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0");

	var html = '<div class="ieTips" style="width: 100%; height: 38px; line-height: 38px; ">' +
		'<div style="margin-left:20px;">' +
		'<span> 为了使您获得本平台最佳使用体验，建议使用如下浏览器：' +
		'<br>'+
		' Internet Explorer 9/10/11、&nbsp;&nbsp;' +
		' Mozilla Firefox 49、&nbsp;&nbsp;' +
		' Chrome 54 。' +
		'</span>' +
		'</div>' +
		'<div style="margin-left:20px;">' +
		'<button type="button" class="close_prompt" style="border: 1px solid #ccc;padding:3px 15px;">关闭提示</button>' +
		'</div>' +
		'</div>';


	//$(".ieTips").hide();
	if (ua){
		//$(".ieTips").show();
		$("#fund").append(html).css({'padding-top':'38px'});
	}

	$(".close_prompt").on("click", function () {
		$(this).parents(".ieTips").slideUp();
		$("#found").css({'padding-top':'0px'});
	});


}



















