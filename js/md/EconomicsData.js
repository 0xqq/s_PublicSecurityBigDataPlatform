var areaId="",startTime="",endTime="",jsonName="",TypeId="",timeData;

$(document).ready(function () {
    $("#txtDate").calendar({callback:_callback});
    $("#txtDate2").calendar({callback:_callback});

    suspiciousPersonneWarning(startTime,endTime,TypeId,areaId);  //可疑人员预警
    allSuspiciousPersonneWarning("","","","",1,4);  //可疑人员预警查看全部初始化

  informationDelivery();                     //信息台发布前五条初始化
 allInformationDelivery(1,"");                     //信息台发布查看全部初始化

    middleMap(areaId,startTime,endTime,TypeId,jsonName)   ;    //经侦监控台初始化
    timeInitSelected();                //时间下拉菜单搜索框
    initSelected();                   // 下拉菜单初始化
   searchCriteria();                 //搜索条件初始化


    P2PNum(startTime,endTime,TypeId,areaId);                      //P2P企业风险指数初始化
    initcolumn_right1(startTime,endTime);          //全国经济犯罪预测
    initbar1(areaId);                   //经济犯罪金额同比

    setInterval(function () {           //信息台发布滚动
        scrollT("scrollBox", $("#scrollBox li").height())
    }, 2000);


});

function recoverData(){
    timeInitSelected()
    suspiciousPersonneWarning("","","","");  //可疑人员预警
    allSuspiciousPersonneWarning("","","","",1,4);  //可疑人员预警查看全部初始化

    middleMap("","","","","")   ;    //经侦监控台初始化
    P2PNum("","","","");     //P2P企业风险指数初始化
    initcolumn_right1("","");
    initbar1("");
    $("#TypeData").html("全部");
    $("#dataArea11").html("全国");







};

function _callback(){
    var val1=$("#txtDate").val();
    var val2=$("#txtDate2").val();
    var Typeval=$("#TypeData").html();
    var TypeId=getTypeId(Typeval);

    var startTime=val1.replace(/-/ig,"/");
    var endTime=val2.replace(/-/ig,"/");
    middleMap(areaId,startTime,endTime,"",jsonName);
    P2PNum(startTime,endTime,TypeId,areaId);
    initcolumn_right1(startTime,endTime);
    initbar1(areaId);
    suspiciousPersonneWarning(startTime,endTime,TypeId,areaId);
    allSuspiciousPersonneWarning(startTime,endTime,TypeId,areaId,1,4)
}

function getTypeId(val){
    var TypeId;
    switch(val){
        case "全部":
            TypeId="";
                break;
        case "传销":
            TypeId=3;
            break;
        case "洗钱":
            TypeId=5;
            break;
        case "非法集资":
            TypeId=2;
            break;
        case "高利贷":
            TypeId=4;
            break;
        case "诈骗":
            TypeId=1;
            break;
  }


    return TypeId
};


function timeInitSelected(){

    var thisYear = (new Date()).getFullYear();
    var lastYear = (new Date()).getFullYear()-1;
    var thisMonth= (new Date()).getMonth()+1;
    var thisDay=(new Date()).getDate();
    $("#txtDate").val(lastYear+"-"+thisMonth+"-"+thisDay);
    $("#txtDate2").val(thisYear+"-"+thisMonth+"-"+thisDay);
};

function allPersonne(){
    var val1=$("#txtDate").val();
    var val2=$("#txtDate2").val();
    var Typeval=$("#TypeData").html();
    var TypeId=getTypeId(Typeval);

    var startTime=val1.replace(/-/ig,"/");
    var endTime=val2.replace(/-/ig,"/");
    allSuspiciousPersonneWarning(startTime,endTime,TypeId,areaId,1,4)
    $(".meng,#list3").show();

};
function infomationTip(){
    $(".meng,#list4").show();
    allInformationDelivery(1,"");
    $(".listContent #timeSelect input:button").removeClass("inputActive2").addClass("inputActive1")
};
function closedList(){
    $(".meng,.Tlist").hide();
}
function suspiciousPersonneWarning(startTime,endTime,TypeId,areaId) {
    var data = [{
        "personId": "1001",
        "personName": "张树林",
        "reason": "传销",
        "forewarnId": "3",
        "fwTypeName": null,
        "forewarnIndex": "1987/03/24",
        "photo": "../images/pic/1001.jpg",
        "incidentTime": "2016/7/21",
        "suspSex": "男",
        "idcardno": "460747478748982000",
        "permanent": "山西"
    }, {
        "personId": "1002",
        "personName": "李淑萍",
        "reason": "诈骗",
        "forewarnId": "1",
        "fwTypeName": null,
        "forewarnIndex": "1982/10/06",
        "photo": "../images/pic/1002.jpg",
        "incidentTime": "2016/7/29",
        "suspSex": "女",
        "idcardno": "240362347676478000",
        "permanent": "上海"
    }, {
        "personId": "1003",
        "personName": "王武鸥",
        "reason": "诈骗",
        "forewarnId": "1",
        "fwTypeName": null,
        "forewarnIndex": "1982/10/06",
        "photo": "../images/pic/1003.jpg",
        "incidentTime": "2016/8/20",
        "suspSex": "男",
        "idcardno": "240362347676478000",
        "permanent": "河北"
    }, {
        "personId": "1004",
        "personName": "史兆春",
        "reason": "传销",
        "forewarnId": "3",
        "fwTypeName": null,
        "forewarnIndex": "1987/03/24",
        "photo": "../images/pic/1001.jpg",
        "incidentTime": "2016/8/1",
        "suspSex": "男",
        "idcardno": "460747478748982000",
        "permanent": "河北"
    }, {
        "personId": "1005",
        "personName": "李娜",
        "reason": "非法集资",
        "forewarnId": "2",
        "fwTypeName": null,
        "forewarnIndex": "1991/01/01",
        "photo": "../images/pic/1006.jpg",
        "incidentTime": "2016/7/20",
        "suspSex": "女",
        "idcardno": "110345678923222000",
        "permanent": "吉林"
    }]
    loadTemplateData(data, $("#tPersonneWarning"), $("#personneWarning"));
};

$(".listContent #timeSelect input:button").on("click",function(){

    $(".listContent div input:button").removeClass("inputActive2").addClass("inputActive1")
    $(this).addClass("inputActive2");
})

function allSuspiciousPersonneWarning(startTime,endTime,TypeId,areaId,currentPage,pageSize){
    var DATA = {
        "dataList": [{
            "personId": "1001",
            "personName": "张树林",
            "reason": "传销",
            "forewarnId": "3",
            "fwTypeName": null,
            "forewarnIndex": "1987/03/24",
            "photo": "../images/pic/1001.jpg",
            "incidentTime": "2016/7/21",
            "suspSex": "男",
            "idcardno": "460747478748982000",
            "permanent": "山西"
        }, {
            "personId": "1002",
            "personName": "李淑萍",
            "reason": "诈骗",
            "forewarnId": "1",
            "fwTypeName": null,
            "forewarnIndex": "1982/10/06",
            "photo": "../images/pic/1002.jpg",
            "incidentTime": "2016/7/29",
            "suspSex": "女",
            "idcardno": "240362347676478000",
            "permanent": "上海"
        }, {
            "personId": "1003",
            "personName": "王武鸥",
            "reason": "诈骗",
            "forewarnId": "1",
            "fwTypeName": null,
            "forewarnIndex": "1982/10/06",
            "photo": "../images/pic/1003.jpg",
            "incidentTime": "2016/8/20",
            "suspSex": "男",
            "idcardno": "240362347676478000",
            "permanent": "河北"
        }, {
            "personId": "1004",
            "personName": "史兆春",
            "reason": "传销",
            "forewarnId": "3",
            "fwTypeName": null,
            "forewarnIndex": "1987/03/24",
            "photo": "../images/pic/1001.jpg",
            "incidentTime": "2016/8/1",
            "suspSex": "男",
            "idcardno": "460747478748982000",
            "permanent": "河北"
        }],
        "totalPages": 9,
        "totalCount": 33,
        "currentPage": "1"
    }
    var totalNums=DATA.totalCount;
    var spanTotalNumsVal=DATA.totalPages;
    var data=DATA.dataList;

    $("#currentPage1").html(currentPage);
    $("#spanTotalNums1").html(spanTotalNumsVal)
    var PageConfig = {
        pageNum: spanTotalNumsVal, //总页数
        nowPage: currentPage, //当前页
        lastPage: true, //上一页按钮
        nextPage: true, //下一页按钮
        firstPage: 1, //首页按钮
        tailPage: 5, //尾页按钮
        jumpPage: true //跳页框
    }
    $("#page1").html("");
    var listPage = new Pages('page1',PageConfig,function(){
        var nowPage = this.nowPage;
        AllKeyMonitorEnterprise1(nowPage)
    });
    loadTemplateData(data, $("#tAllKeyMonitorEnterprise"), $("#allKeyMonitorEnterprise"));
};





function AllKeyMonitorEnterprise1(currentPage){
    var val1=$("#txtDate").val();
    var val2=$("#txtDate2").val();
    var startTime=val1.replace(/-/ig,"/");
    var endTime=val2.replace(/-/ig,"/");
    var Typeval=$("#TypeData").html();
    var TypeId=getTypeId(Typeval);
var currentPage=currentPage;
    var pageSize=4;
};

function tonewpagenum1(){
	 var num1 = $("#writepagenum1").val();
	    if(num1==""){   return;  };
	    var num=parseInt(num1);
    AllKeyMonitorEnterprise1(num-1);
    var obj=$("#page1").children();
    for(var i=1;i<obj.length-1;i++){
        obj[i].style.backgroundColor="#061e46";
        obj[i].style.color="#91a0ad";
    };
    if(num<1||num>obj.length-2){return};
  obj.eq(num).css({"backgroundColor":"#0085f5","color":"#FFF"});
};

function tonewpagenum2(){

	 var num1 = $("#writepagenum2").val();
	    if(num1==""){   return;  };
	    var num=parseInt(num1);
    allInformationDelivery1(num-1);
    var obj=$("#page2").children();
    for(var i=1;i<obj.length-1;i++){
        obj[i].style.backgroundColor="#061e46";
        obj[i].style.color="#91a0ad";
    };
    if(num<1||num>obj.length-2){return};
    obj.eq(num).css({"backgroundColor":"#0085f5","color":"#FFF"});
};

function informationDelivery(){
    var data =  [{
        "name": "史兆春",
        "sex": "男",
        "place": "柳州",
        "idcardNo": "12345678923222300",
        "birthday": null,
        "infor": null,
        "photo": null
    }, {
        "name": "张淑兰",
        "sex": "女",
        "place": "天津",
        "idcardNo": "3473897375873850",
        "birthday": null,
        "infor": null,
        "photo": null
    }, {
        "name": "朱武",
        "sex": "男",
        "place": "新疆",
        "idcardNo": "66657349893898800",
        "birthday": null,
        "infor": null,
        "photo": null
    }, {
        "name": "张静",
        "sex": "女",
        "place": "广西",
        "idcardNo": "75874878574857500",
        "birthday": null,
        "infor": null,
        "photo": null
    }, {
        "name": "赵水平",
        "sex": "男",
        "place": "上海",
        "idcardNo": "321321321321312",
        "birthday": null,
        "infor": null,
        "photo": null
    }]
    loadTemplateData(data, $("#tInformationDelivery"), $("#informationDelivery"));
};

function allInformationDelivery(pageIndex,time){
    timeData=time;
    var pageSize=4;
    var DATA = {
        "dataList": [{
            "name": "史兆春",
            "sex": "男",
            "place": "柳州",
            "idcardNo": "12345678923222300",
            "birthday": "1976-5-1",
            "infor": "2015年拖欠员工工资，携款潜逃",
            "photo": "../images/pic/1005.jpg"
        }, {
            "name": "张淑兰",
            "sex": "女",
            "place": "天津",
            "idcardNo": "3473897375873850",
            "birthday": "1983-3-1",
            "infor": "2014年发生诈骗案件",
            "photo": "../images/pic/1002.jpg"
        }, {
            "name": "朱武",
            "sex": "男",
            "place": "新疆",
            "idcardNo": "66657349893898800",
            "birthday": "1978-2-1",
            "infor": "2015年传销组织头目",
            "photo": "../images/pic/1003.jpg"
        }, {
            "name": "张静",
            "sex": "女",
            "place": "广西",
            "idcardNo": "75874878574857500",
            "birthday": "1985-11-1",
            "infor": "2013年涉嫌非法集资",
            "photo": "../images/pic/1006.jpg"
        }],
        "totalPages": 3,
        "totalCount": 10,
        "currentPage": "1"
    }
    var totalNums=DATA.totalCount;
    var pageTatal=DATA.totalPages;
    var data=DATA.dataList;
    $("#spanTotalNums2").html(pageTatal);
    $("#currpage2").html(pageIndex);
    var PageConfig = {
        pageNum: pageTatal, //总页数
        nowPage: pageIndex, //当前页
        lastPage: true, //上一页按钮
        nextPage: true, //下一页按钮
        firstPage: 1, //首页按钮
        tailPage: 5, //尾页按钮
        jumpPage: true //跳页框
    }
    $("#page2").html("");
    var listPage = new Pages('page2',PageConfig,function(){
        var nowPage = this.nowPage;
        allInformationDelivery1(nowPage)
    });
    loadTemplateData(data, $("#tAllInformationDelivery"), $("#allInformationDelivery"));
};


function reloadPersonTip(time){
    allInformationDelivery(1,time);

};


function allInformationDelivery1(currentPage){
    console.log("currentPage:",currentPage)
    currentPage=currentPage;
    var pageSize=4;
    var DATA = {
        "dataList": [{
            "personId": "1001",
            "personName": "张树林",
            "reason": "传销",
            "forewarnId": "3",
            "fwTypeName": null,
            "forewarnIndex": "1987/03/24",
            "photo": "../images/pic/1001.jpg",
            "incidentTime": "2016/7/21",
            "suspSex": "男",
            "idcardno": "460747478748982000",
            "permanent": "山西"
        }, {
            "personId": "1002",
            "personName": "李淑萍",
            "reason": "诈骗",
            "forewarnId": "1",
            "fwTypeName": null,
            "forewarnIndex": "1982/10/06",
            "photo": "../images/pic/1002.jpg",
            "incidentTime": "2016/7/29",
            "suspSex": "女",
            "idcardno": "240362347676478000",
            "permanent": "上海"
        }, {
            "personId": "1003",
            "personName": "王武鸥",
            "reason": "诈骗",
            "forewarnId": "1",
            "fwTypeName": null,
            "forewarnIndex": "1982/10/06",
            "photo": "../images/pic/1003.jpg",
            "incidentTime": "2016/8/20",
            "suspSex": "男",
            "idcardno": "240362347676478000",
            "permanent": "河北"
        }, {
            "personId": "1004",
            "personName": "史兆春",
            "reason": "传销",
            "forewarnId": "3",
            "fwTypeName": null,
            "forewarnIndex": "1987/03/24",
            "photo": "../images/pic/1001.jpg",
            "incidentTime": "2016/8/1",
            "suspSex": "男",
            "idcardno": "460747478748982000",
            "permanent": "河北"
        }],
        "totalPages": 9,
        "totalCount": 33,
        "currentPage": "1"
    }
    var totalNums=DATA.totalCount;
    var pageTatal=DATA.totalPages;
    $("#currpage2").html(currentPage);
    var data=DATA.dataList;
    $("#spanTotalNums2").html(pageTatal)
    loadTemplateData(data, $("#tAllInformationDelivery"), $("#allInformationDelivery"));
};



function scrollT(id, speed) {
    var obj = document.getElementById(id);
    var top = obj.offsetTop;
    top -= speed;
    if (top <= -obj.offsetHeight) {
        $(obj).css("top", 0);
    } else {
        $(obj).animate({"top": top}, 500)
    }
};


function searchCriteria() {
    var DATA = {"dataList":[{"area":[{"area_name":"北京","pinyin":"beijing","area_code":110000,"short_name":"北京"},{"area_name":"天津","pinyin":"tianjin","area_code":120000,"short_name":"天津"},{"area_name":"河北省","pinyin":"hebei","area_code":130000,"short_name":"河北"},{"area_name":"山西省","pinyin":"shanxi","area_code":140000,"short_name":"山西"},{"area_name":"内蒙古自治区","pinyin":"neimenggu","area_code":150000,"short_name":"内蒙古"},{"area_name":"辽宁省","pinyin":"liaoning","area_code":210000,"short_name":"辽宁"},{"area_name":"吉林省","pinyin":"jilin","area_code":220000,"short_name":"吉林"},{"area_name":"黑龙江省","pinyin":"heilongjiang","area_code":230000,"short_name":"黑龙江"},{"area_name":"上海","pinyin":"shanghai","area_code":310000,"short_name":"上海"},{"area_name":"江苏省","pinyin":"jiangsu","area_code":320000,"short_name":"江苏"},{"area_name":"浙江省","pinyin":"zhejiang","area_code":330000,"short_name":"浙江"},{"area_name":"安徽省","pinyin":"anhui","area_code":340000,"short_name":"安徽"},{"area_name":"福建省","pinyin":"fujian","area_code":350000,"short_name":"福建"},{"area_name":"江西省","pinyin":"jiangxi","area_code":360000,"short_name":"江西"},{"area_name":"山东省","pinyin":"shandong","area_code":370000,"short_name":"山东"},{"area_name":"河南省","pinyin":"henan","area_code":410000,"short_name":"河南"},{"area_name":"湖北省","pinyin":"hubei","area_code":420000,"short_name":"湖北"},{"area_name":"湖南省","pinyin":"hunan","area_code":430000,"short_name":"湖南"},{"area_name":"广东省","pinyin":"guangdong","area_code":440000,"short_name":"广东"},{"area_name":"广西壮族自治区","pinyin":"guangxi","area_code":450000,"short_name":"广西"},{"area_name":"海南省","pinyin":"hainan","area_code":460000,"short_name":"海南"},{"area_name":"重庆","pinyin":"chongqing","area_code":500000,"short_name":"重庆"},{"area_name":"四川省","pinyin":"sichuan","area_code":510000,"short_name":"四川"},{"area_name":"贵州省","pinyin":"guizhou","area_code":520000,"short_name":"贵州"},{"area_name":"云南省","pinyin":"yunnan","area_code":530000,"short_name":"云南"},{"area_name":"西藏自治区","pinyin":"xizang","area_code":540000,"short_name":"西藏"},{"area_name":"陕西省","pinyin":"shanxi","area_code":610000,"short_name":"陕西"},{"area_name":"甘肃省","pinyin":"gansu","area_code":620000,"short_name":"甘肃"},{"area_name":"青海省","pinyin":"qinghai","area_code":630000,"short_name":"青海"},{"area_name":"宁夏回族自治区","pinyin":"ningxia","area_code":640000,"short_name":"宁夏"},{"area_name":"新疆维吾尔自治区","pinyin":"xinjiang","area_code":650000,"short_name":"新疆"},{"area_name":"台湾","pinyin":"taiwan","area_code":710000,"short_name":"台湾"},{"area_name":"香港特别行政区","pinyin":"xianggang","area_code":810000,"short_name":"香港"},{"area_name":"澳门特别行政区","pinyin":"aomen","area_code":820000,"short_name":"澳门"}],"type":[{"forewarnId":"3","typeName":"传销"},{"forewarnId":"5","typeName":"洗钱"},{"forewarnId":"1","typeName":"诈骗"},{"forewarnId":"2","typeName":"非法集资"},{"forewarnId":"4","typeName":"高利贷"}]}]}
    var data = DATA.dataList[0];
    var dataarea = data.area;
    var datatype = data.type;
    loadTemplateData(dataarea, $("#tDataArea"), $("#dataArea"));
    loadTemplateData(datatype, $("#tDataType"), $("#dataType"));
    SearchcInitSelected();    //初始化下拉菜单
};


function P2PNum(startTime,endTime,TypeId,areaId){
    var DATA ={"dataList":[{"id":"101","name":"网利宝","value":"90"},{"id":"102","name":"金信网","value":"85"},{"id":"103","name":"众信金融","value":"80"},{"id":"104","name":"融通资产","value":"75"},{"id":"105","name":"付融宝","value":"70"}]}
    var data=DATA.dataList;
    $(data).each(function(index,item){
        item.index=index+1;
    });
    loadTemplateData(data, $("#tCityRanking"), $("#cityRanking"));
    $(".city_order").each(function(index,item){

        if($(this).html()==1){
            $(this).css("backgroundColor","#f70023");
        }else if($(this).html()==2){
            $(this).css("backgroundColor","#eb7c06");
        }else if($(this).html()==3){
            $(this).css("backgroundColor","#d4af04");
        }
    })
};
function initcolumn_right1(startTime,endTime){
    var DATA ={"dataList":{"xAxis":["北京","上海","天津","广州","深圳","贵阳","西安"],"EconimicNum":[[],[],[],[],[]],"crimeType":["传销","总量","洗钱","诈骗","非法集资"]}}
    var data = DATA.dataList;
    var xArr=data.xAxis;
    var EconimicNum=data.EconimicNum;
    var crimeType=data.crimeType;
    column_right1(xArr,EconimicNum,crimeType);
};



function column_right1(xArr,EconimicNum,crimeType){
    $("#chart1").html("");
    var myChart = echarts.init(document.getElementById('chart1'));

    var  option = {
        backgroundColor:'#02153f',
        tooltip: {},
        legend:{
            show:true,
            itemWidth:12,
            itemHeight:10,
            data:[crimeType[1],crimeType[0],crimeType[2],crimeType[3],crimeType[4]],
            textStyle:{
                color:'#FFF'
            }
        },
        grid: {
            bottom: 25,
            left:40,
            top:45,
            right:10,
        },
        xAxis: {
            type: "category",
            data: xArr,
            axisLabel: {
                //interval: 0,
                //rotate: [45],
                textStyle: {
                    color: '#FFF', //X轴类名称颜色

                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            min: 0,
            max:800,
            //minInterval: "1",
            splitNumber:6,
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#4585e7',
                    type : "dashed"
                }
            },
            axisLabel: {
                formatter: '{value}',
                margin:5,
                textStyle: {
                    color: '#FFF' //Y轴刻度颜色
                },
                inside:false,
                formatter: function(v){
                    return v+'\n\n';
                }
            }
        },

        series: [
            {
                name: crimeType[1],
                type: 'bar',
                data: EconimicNum[1],
                itemStyle: {
                    normal: {
                        color: "#e85a2e" //柱状体颜色
                    }
                },
                barWidth: "8" //柱状体宽度
            },
            {
                name: crimeType[0],
                type: 'bar',
                stack: '总量',
                barWidth:'8',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{

                        color:"#f96900"
                    }
                },
                data: EconimicNum[0]
            },
            {
                name: crimeType[2],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color:"#ffac70"
                    }
                },
                data: EconimicNum[2]
            },
            {
                name: crimeType[3],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color:"blue"
                    }
                },
                data: EconimicNum[3]
            },
            {
                name: crimeType[4],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color:"green"
                    }
                },
                data: EconimicNum[4]
            }



        ]
    };


    myChart.setOption(option);


}

function initbar1(areaId){
if(areaId==undefined||areaId==""){
        var urlDetail="/amountCompare/getNation";
    }else{
    var urlDetail="/amountCompare/getEconomicYoYInfo?areaId="+areaId;
    }
    var data = {"yAxis":{"thisYear":[],"lastYear":[]}}
    var xArr=["1月","2月","3月","4月","5月","6月","7月"];
    var yAxis=data.yAxis;
    var lastYear=yAxis.lastYear;
    var thisYear=yAxis.thisYear;
    bar1(xArr,thisYear,lastYear);
};
function bar1(xArr,thisYear,lastYear) {
    $("#chart2").html("");
    var myChart = echarts.init(document.getElementById('chart2'));
    var symbolImageBlue = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RUIzNDdCQjYxQzkxMUU2QkFDRUUxRDU1QzY5QTkzMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RUIzNDdCQzYxQzkxMUU2QkFDRUUxRDU1QzY5QTkzMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVFQjM0N0I5NjFDOTExRTZCQUNFRTFENTVDNjlBOTMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVFQjM0N0JBNjFDOTExRTZCQUNFRTFENTVDNjlBOTMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gnF9DAAAATNJREFUeNpitL/9nwENiANxJhDbALEJVOw0EB8B4ulA/ApZMSOaAWVA3MmAH4DUdMM4TEgS64nQDAJdQLwOxmGB0lVAHAATtOBiYAgTZGBQZ4fwb/xgYFj1gYHh5De4IYFAXAHEHSAvSAMZT2AyyUIMDLFC2K1e9I6BYd47FCEpJmiAgYE1N27NIBAHlLPkRhHKZIKGNhiECRAOADQ1NiADTGE8dQ7CBmiwo3BNmRhIBIxoXJABZ2C8mz8IG3DjJwr3NBM0hYEBKKoIATQ1R5igyRMMjn5lYFj+HrfmpUC5Y19RhKazQNNADRC3gERmvmVguAr0SogAIsCuA5295gPEAiQASnzPkPPCViD2IjIsNwOxH3pe8AbiWiI0V8M0Y8uN4OSJlJ1haeQUUnZ+jqwYIMAA4xlKLQvYmUcAAAAASUVORK5CYII=';
    var symbolImageRed = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OUUwMTE5NDYxQzkxMUU2OTgwOThDQ0Y5MUE1NzA1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OUUwMTE5NTYxQzkxMUU2OTgwOThDQ0Y5MUE1NzA1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5RTAxMTkyNjFDOTExRTY5ODA5OENDRjkxQTU3MDU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5RTAxMTkzNjFDOTExRTY5ODA5OENDRjkxQTU3MDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QaW8VAAAAUtJREFUeNpi/MOeyoAGxIE4E4htgNgEKnYaiI8A8XQgfoWsmBHNgDIg7mTAD0BqumEcJiSJ9URoBoEuIF4H47BA6SogDoA7y0OXgTHflYHRSB7M/3/2AcP/ibsZ/u+8AlMSCMQVQNwB8oI0kPEE7qR6fwbGSm+sVv9v28rwr2kjspAUEzTAIDb76OPUDJav8mZg9NJDFspkgoY2RAHQ2YQAmhobkAGmcEljBcIGoKoxZWIgFTCi8kAGnIEH0rmHBPWDYgQJnGaCpjCIJDCqCBowcQ8y9wgTNHlCJDdfYPjfuxO35q7tDP+3XkQWms5cx2L8Ccj4A8ROYEX7rjMwXHoMzBF8DIwivAwMv/8y/D9+l+F/yUqG/zMPIGsGJb7tyHlhKxB7ERmUm4HYDz0vgFJQLRGaq2GaseVGcPJEys6wNHIKKTs/R1YMEGAA69NZI8JvmjEAAAAASUVORK5CYII=';


    function createRgba(color, alpha) {
        return [
            "rgba(",
            color >> 16, ",",
            color >> 8 & 0xFF, ",",
            color & 0xFF, ",",
            alpha,
            ")"
        ].join("");
    }

    option = {
        backgroundColor: '#051d4c',
        legend:{
            show:true,
            data:["上一年","当年"],
            textStyle:{
                color:'#FFF'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: createRgba(0xFFFFFF, 0.5)
                }
            },
            // backgroundColor: createRgba(0x0, 0),
            // position: function(point) {
            //     return [point[0] - 9, '0%'];
            // },
            // formatter: "{c0}"
        },

        grid: {
            x: '50',
            x2: '10',
            y: '30',
            y2: '22'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: "#58699B"
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: "#FFF"
                }
            },
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    type: "solid",
                    color: "#223761"
                }
            },
            data: xArr
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 20000,
            Interval: 2000,
           // splitNumber: 4,
            axisLabel: {
                textStyle: {
                    color: "#FFF"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#244286"
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dotted",
                    color: "#45598F"
                }
            }
        }],
        series: [{
            name: '上一年',
            type: 'line',
            //   symbol: "image://" + symbolImageBlue,
            symbolSize: 14,
            itemStyle: {
                normal: {
                    color: "#4AE6F8"
                }
            },
            lineStyle: {
                normal: {
                    color: "#4AE6F8"
                }
            },
            areaStyle: {
                normal: {
                    color: '#3298c1'
                }
            },
            smooth: true,
            data: lastYear
        }, {
            name: '当年',
            type: 'line',
         //   symbol: "image://" + symbolImageRed,
            symbolSize: 14,
            itemStyle: {
                normal: {
                    color: "#F91667"
                }
            },
            lineStyle: {
                normal: {
                    color: "#F91667"
                }
            },
            areaStyle: {
                normal: {
                    color: '#69442e'
                }
            },
            smooth: true,
            data: thisYear
        }],
        //backgroundColor: "#173C86"
    };

    myChart.setOption(option);

};


function middleMap(areaId,startTime,endTime,TypeId,jsonName) {
$("#main").html("");
var data ={"datalist1":[{"count":0,"areaName":"杭州市","areaCode":"330100","longitude":"120.15358","latitude":"30.287458"},{"count":0,"areaName":"南关区","areaCode":"220102","longitude":"125.337234","latitude":"43.890236"},{"count":0,"areaName":"昌平区","areaCode":"110114","longitude":"116.235909","latitude":"40.218086"},{"count":0,"areaName":"东城区","areaCode":"110101","longitude":"116.418755","latitude":"39.917545"}],"datalist0":[{"count":0,"areaName":"宝山区","areaCode":"310113","longitude":"121.489937","latitude":"31.398895"},{"count":0,"areaName":"黄浦区","areaCode":"310101","longitude":"121.490318","latitude":"31.222771"},{"count":0,"areaName":"哈尔滨市","areaCode":"230100","longitude":"126.642464","latitude":"45.756966"},{"count":0,"areaName":"农安县","areaCode":"220122","longitude":"125.175285","latitude":"44.431259"},{"count":0,"areaName":"晋城市","areaCode":"140500","longitude":"112.851273","latitude":"35.497555"},{"count":0,"areaName":"太原市","areaCode":"140100","longitude":"112.549248","latitude":"37.857014"},{"count":0,"areaName":"邯郸市","areaCode":"130400","longitude":"114.490685","latitude":"36.612274"},{"count":0,"areaName":"唐山市","areaCode":"130200","longitude":"118.175392","latitude":"39.635113"},{"count":0,"areaName":"晋州市","areaCode":"130183","longitude":"115.044884","latitude":"38.027477"},{"count":0,"areaName":"西城区","areaCode":"110102","longitude":"116.366791","latitude":"39.91531"}],"datalist3":[{"count":0,"areaName":"宜兴市","areaCode":"320282","longitude":"119.820541","latitude":"31.364384"},{"count":0,"areaName":"呼和浩特市","areaCode":"150100","longitude":"111.670799","latitude":"40.81831"},{"count":0,"areaName":"唐山市","areaCode":"130200","longitude":"118.175392","latitude":"39.635113"},{"count":0,"areaName":"房山区","areaCode":"110111","longitude":"116.13916","latitude":"39.735535"}],"datalist2":[{"count":0,"areaName":"长宁区","areaCode":"310105","longitude":"121.422203","latitude":"31.218122"},{"count":0,"areaName":"依兰县","areaCode":"230123","longitude":"129.565598","latitude":"46.315105"},{"count":0,"areaName":"磐石市","areaCode":"220284","longitude":"126.059929","latitude":"42.942474"},{"count":0,"areaName":"沈阳市","areaCode":"210100","longitude":"123.429092","latitude":"41.796768"},{"count":0,"areaName":"包头市","areaCode":"150200","longitude":"109.840408","latitude":"40.658169"},{"count":0,"areaName":"南开区","areaCode":"120104","longitude":"117.164146","latitude":"39.120476"},{"count":0,"areaName":"和平区","areaCode":"120101","longitude":"117.195908","latitude":"39.118328"},{"count":0,"areaName":"朝阳区","areaCode":"110105","longitude":"116.486412","latitude":"39.92149"},{"count":0,"areaName":"东城区","areaCode":"110101","longitude":"116.418755","latitude":"39.917545"}]}
    var Data = new Array(5);
    for(var i=0;i<Data.length;i++){
        Data[i] = new Array();
    }
    var data0=data.datalist0;
    if (data0 == null || data0 == "" || data0 == undefined) {
        Data[0].push("");
    }else{
        $(data0).each(function(index,item){

            var dataObj={
                name: item.areaName,
                value:[item.longitude,item.latitude,0],
            };
            Data[0].push(dataObj);
        });
    }
    var data1=data.datalist1;
    if (data1 == null || data1 == "" || data1 == undefined) {
        Data[1].push("");
    }else{
        $(data1).each(function(index,item){

            var dataObj={
                name: item.areaName,
                value:[item.longitude,item.latitude,100],

            };
            Data[1].push(dataObj);

        });
    }
    var data2=data.datalist2;
    if (data2 == null || data2 == "" || data2 == undefined) {
        Data[2].push("");
    }else{
        $(data2).each(function(index,item){
            var dataObj={
                name: item.areaName,
                value:[item.longitude,item.latitude,200],
            };
            Data[2].push(dataObj);
        });
    }
    var data3=data.datalist3;
    if (data3 == null || data3 == "" || data3 == undefined) {
        Data[3].push("");
    }else{
        $(data3).each(function(index,item){
            var dataObj={
                name: item.areaName,
                value:[item.longitude,item.latitude,300],
            };
            Data[3].push(dataObj);
        });
    };
    var data4=data.datalist4;
    if (data4 == null || data4 == "" || data4 == undefined) {
        Data[4].push("");
    }else{
        $(data4).each(function(index,item){
            var dataObj={
                name: item.areaName,
                value:[item.longitude,item.latitude,400],
            };
            Data[4].push(dataObj);

        });
    }

    var chart = map_trander;
    chart({
        jsonName:jsonName,
        id: 'main',
        width:700,
        height: 800,
        data:Data,
        callback: function (data) {

        }
    });
};


function imgError(obj){
    // obj.src="../images/zwtpts_03.png";

};
function initSelected() {

    $(".timeSearchC .select").on("click", function (event) {

        $(".select .selectContent").slideUp();


        if($(this).find(".selectContent").css("display")=="none"){
            $(this).find(".selectContent").slideDown();
        }else{
            $(this).find(".selectContent").slideUp();
        };
        var event = event ? event : window.event;
        event.stopPropagation();

    });


    $(document).on("click", function (e) {
        $(".timeSearchC .selectContent").slideUp();
    });

};



function SearchcInitSelected() {
    $(".indexSearchC .select").on("click", function (event) {

        $(".select .selectContent").slideUp();


        if($(this).find(".selectContent").css("display")=="none"){
            $(this).find(".selectContent").slideDown();
        }else{
            $(this).find(".selectContent").slideUp();
        };
        var event = event ? event : window.event;
        event.stopPropagation();

    });

    $(".indexSearchC .select li a").on("click", function () {

        var value = $(this).html();
        $(this).parent().parent().parent().parent().find(".val").html(value);
        var newAreaId=$(this).attr("data-Code");
        var val1=$("#txtDate").val();
        var val2=$("#txtDate2").val();
        var startTime=val1.replace(/-/ig,"/");
        var endTime=val2.replace(/-/ig,"/");
        if(newAreaId!=undefined){areaId=newAreaId;};
        var newJsonName=$(this).attr("data-Pinyin");
        if(newJsonName!=undefined){
            jsonName=newJsonName;
            if(jsonName=="china"){
                jsonName="";
            }
        };
        var Typeval=$("#TypeData").html();

        var TypeId=getTypeId(Typeval);
        allSuspiciousPersonneWarning(startTime,endTime,TypeId,areaId,1,4);
      middleMap(areaId,startTime,endTime,TypeId,jsonName);
        P2PNum(startTime,endTime,TypeId,areaId);
        initbar1(areaId);
        suspiciousPersonneWarning(startTime,endTime,TypeId,areaId);


    });

    $(document).on("click", function (e) {
        $(".indexSearchC .selectContent").slideUp();
    });

};





function loadTemplateData(data, $tcontainer, $container) {
   //handlebars模板
    if (data == null || data == "" || data == undefined) {
        $container.html("");
        return
    }

    var context = {data: data};
    var source = $tcontainer.html();
    var template = Handlebars.compile(source);
    $container.html(template(context));
};



function initPagination(id,totalNums,pageSize,start,end) {

    $("#"+id).pagination(totalNums, {
        num_edge_entries: start, //边缘页数
        num_display_entries: end, //主体页数
        callback: AllKeyMonitorEnterprise1,    //鼠标点击
        items_per_page: pageSize
    });
}

function initPagination1(id,totalNums,pageSize,start,end) {

    $("#"+id).pagination(totalNums, {
        num_edge_entries: start, //边缘页数
        num_display_entries: end, //主体页数
        callback: allInformationDelivery1,    //鼠标点击
        items_per_page: pageSize
    });
}

















            
