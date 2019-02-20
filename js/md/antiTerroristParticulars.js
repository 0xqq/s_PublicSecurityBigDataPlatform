$(document).ready(function () {

    pId = GetQueryString("pId");
    essentialInformation();  //基本信息初始化
    publicSecurityArchives();  //公安档案初始化
    behavior(pId);            // 社交行为初始化
    keyAreas();  //重点区域初始化
    locationProbability();  //行踪位置概率
    $("#choiceBox span").on("click", function () {
        $("#choiceBox span").removeClass("active")
        $(this).addClass("active");
    })
});
function imgError(obj){
// obj.src="../images/zwtpts_03.png";
};
function essentialInformation() {
    var data = [{
            "personName": "艾合台木·吐合台木尼亚孜",
            "gender": "男",
            "nation": "维吾尔族",
            "personType": "涉恐人员",
            "idcardNo": "652928198409081000",
            "passportNo": "G12345678",
            "drivingLicence": "123456789012 ",
            "permanentAddress": "新疆维吾尔族自治区和田地区",
            "mobile": "13800000000",
            "bankAccount": "6222000083761230",
            "personalAssets": "农用汽车 xxx(车辆信息),XXX地区XXX位置XXX房屋,XXX地区XXX位置XXX单位的",
            "temporaryAddress": "新疆维吾尔族自治区喀什地区后三街4008",
            "photo": "../images/pic/1001.jpg",
            "bankAccount1": ["6222000083761230"],
            "personalAssets1": ["农用汽车 xxx(车辆信息)", "XXX地区XXX位置XXX房屋", "XXX地区XXX位置XXX单位的"]
        }];
        loadTemplateData(data, $("#tEssentialInformation"), $("#essentialInformation"));
};

function publicSecurityArchives() {
    var data = [{"recordId":"0100201000733213788","personType":"涉稳人员","recordUnit":"辽宁省铁岭市铁岭县公安局","recordTime":"2016/8/5 12:00"}]
    loadTemplateData(data, $("#tPublicSecurityArchives"), $("#publicSecurityArchives"));


};

function behavior(pId) {
    var data = {
        "capital": [{
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "是",
            "name": "李雨彤",
            "photo": "../images/pic/1002.jpg",
            "cause": "大量资金转移",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "否",
            "name": "王寒凝",
            "photo": "../images/pic/1004.jpg",
            "cause": "大量资金转移",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "是",
            "name": "陈明辉",
            "photo": "../images/pic/1005.jpg",
            "cause": "大量资金转移",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "否",
            "name": "陈文超",
            "photo": "../images/pic/1001.jpg",
            "cause": "大量资金转移",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "是",
            "name": "王君昊",
            "photo": "../images/pic/1001.jpg",
            "cause": "大量资金转移",
            "relation": "叔侄关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "否",
            "name": "刘烨华",
            "photo": "../images/pic/1005.jpg",
            "cause": "大量资金转移",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "否",
            "name": "王烨",
            "photo": "../images/pic/1002.jpg",
            "cause": "大量资金转移",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31",
            "suspicion": "是",
            "name": "李棠",
            "photo": "../images/pic/1002.jpg",
            "cause": "大量资金转移",
            "relation": "朋党关系"
        }],
        "Mobile": [{
            "pa_Photo": "../images/pic/1001.jpg",
            "call_number": "30",
            "contact_phone": "15219876780",
            "suspicion": "否",
            "name": "李莹",
            "photo": "../images/pic/1002.jpg",
            "location_contact": "辽宁省铁岭市",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "call_number": "33",
            "contact_phone": "13728347789",
            "suspicion": "是",
            "name": "王祝",
            "photo": "../images/pic/1003.jpg",
            "location_contact": "辽宁省铁岭市",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "call_number": "30",
            "contact_phone": "15219876780",
            "suspicion": "是",
            "name": "李莹",
            "photo": "../images/pic/1003.jpg",
            "location_contact": "辽宁省铁岭市",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "call_number": "29",
            "contact_phone": "15217489867",
            "suspicion": "否",
            "name": "张云",
            "photo": "../images/pic/1004.jpg",
            "location_contact": "辽宁省铁岭市",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "call_number": "33",
            "contact_phone": "13728347789",
            "suspicion": "是",
            "name": "王雨竹",
            "photo": "../images/pic/1002.jpg",
            "location_contact": "辽宁省铁岭市",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "call_number": "30",
            "contact_phone": "15219876780",
            "suspicion": "是",
            "name": "李莹华",
            "photo": "../images/pic/1002.jpg",
            "location_contact": "辽宁省铁岭市",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "call_number": "29",
            "contact_phone": "15217489867",
            "suspicion": "否",
            "name": "张云霞 ",
            "photo": "../images/pic/1002.jpg",
            "location_contact": "辽宁省铁岭市",
            "relation": "朋党关系"
        }],
        "socialNet": [{
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 9:00",
            "suspicion": "是",
            "name": "王雨",
            "photo": "../images/pic/1002.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 10:30",
            "suspicion": "否",
            "name": "李莹",
            "photo": "../images/pic/1002.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 10:30",
            "suspicion": "是",
            "name": "李莹",
            "photo": "../images/pic/1002.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 18:30",
            "suspicion": "否",
            "name": "张云",
            "photo": "../images/pic/1002.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 18:30",
            "suspicion": "否",
            "name": "张云",
            "photo": "../images/pic/1003.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 9:00",
            "suspicion": "是",
            "name": "王雨竹",
            "photo": "../images/pic/1005.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "朋党关系"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 10:30",
            "suspicion": "是",
            "name": "李莹华",
            "photo": "../images/pic/1003.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "表兄弟"
        }, {
            "pa_Photo": "../images/pic/1001.jpg",
            "date": "2016/8/31 18:30",
            "suspicion": "否",
            "name": "张云霞 ",
            "photo": "../images/pic/1003.jpg",
            "peer_location": "辽宁省铁岭市",
            "relation": "朋党关系"
        }]
    }
    initBehavior(data)
};


function initBehavior(data) {

    var Dataold = [];
    var image = data.capital[0].pa_Photo;

    var newData = [
        {index: 0, image: image},
    ];
    capitalLength = data.capital.length;
    MobileLength = data.Mobile.length;
    socialNetLength = data.socialNet.length;

console.log("capitalLength:"+capitalLength)
    $(data.capital).each(function (index, item) {
        Dataold.push(item);
        var Itemname = item.name+"-"+item.relation;

        newIndex1 = index + 1;

        var newobj = {index: newIndex1,jname: Itemname, category: 0, source: [0]};
        newData.push(newobj);


    });

    $(data.Mobile).each(function (index, item) {
        Dataold.push(item);

        var Itemname1 = item.name+"-"+item.relation;


        newIndex2 = index + capitalLength + 1;

        var newobj = {index: newIndex2,jname:Itemname1, category: 1, source: [0]};
        newData.push(newobj)


    });

    $(data.socialNet).each(function (index, item) {
        Dataold.push(item)
        var Itemname1 = item.name+"-"+item.relation;

        newIndex3 = index + MobileLength + capitalLength + 1;

        var newobj = {index: newIndex3, jname:Itemname1, category: 2, source: [0]};
        newData.push(newobj)

    });


    var data = [
        [

            {color: '#d3862a', name: '资金往来异常'},
            {color: '#4a8d35', name: '手机通信'},
            {color: '#056ee5', name: '网络社交'}

        ],
        newData
    ];

    var click = function (/* data */ d) {

        var t;

        $('#forceDirectedSA-pop').removeClass('false');
        var pointIndex=d.index-1;
        pushPop1(Dataold,pointIndex );


        // 调用按钮渲染，保持状态同步
     //   (t = $('#action .\\#1') [0]).onclick.call(t, d.index);

    };



    forceDirectedChartSA({

        // 标识
        id: 'forceDirectedSA-chart',

        // 数据
        data: data,

        // 点击
        click: click

    });

};


function keyAreas() {
    var points = {};
    points.myp = [];
    points.Cmyp = [];
    var data = [{
        "is_car": "是",
        "address": "辽宁省铁岭市铁岭县松花江路",
        "areaname": "辽宁省",
        "flow_time": "2016/8/31 10:00",
        "latitude": "42.25086",
        "longitude": "123.760835"
    }, {
        "is_car": "是",
        "address": "辽宁省铁岭市铁岭县嘉陵江路",
        "areaname": "辽宁省",
        "flow_time": "2016/8/31 12:00",
        "latitude": "42.243785",
        "longitude": "123.747468"
    }, {
        "is_car": "否",
        "address": "辽宁省铁岭市铁岭县金沙江路",
        "areaname": "辽宁省",
        "flow_time": "2016/8/31 15:00",
        "latitude": "42.227843",
        "longitude": "123.738269"
    }, {
        "is_car": "否",
        "address": "辽宁省铁岭市铁岭县嘉陵江路",
        "areaname": "辽宁省",
        "flow_time": "2016/8/31 17:30",
        "latitude": "42.235",
        "longitude": "123.773015"
    }, {
        "is_car": "是",
        "address": "辽宁省铁岭市铁岭县G102(京哈线)",
        "areaname": "辽宁省",
        "flow_time": "2016/8/31 19:25",
        "latitude": "42.222047",
        "longitude": "123.769278"
    }, {
        "is_car": "是",
        "address": "辽宁省铁岭市铁岭县G102(京哈线)",
        "areaname": "辽宁省",
        "flow_time": "2016/8/31 20:00",
        "latitude": "42.215556",
        "longitude": "123.766691"
    }]
                var A = [];    //车的轨迹
            var B = [];    // 人的轨迹

            for (var i = 0; i < data.length; i++) {
                if (data[i].is_car == "是") {
                    A.push(data[i]);
                }
                ;
                if (data[i].is_car == "否") {
                    B.push(data[i]);
                }
                ;

            }
            ;

            for (var i = 0; i < A.length; i++) {
                var myP = new BMap.Point(A[i].longitude, A[i].latitude);
                centerLo = A[i].longitude[0];
                centerLa = A[i].latitude[0];

                points.myp.push(myP);
            }
            ;

            for (var i = 0; i < B.length; i++) {
                var cmyP = new BMap.Point(B[i].longitude, B[i].latitude);

                points.Cmyp.push(cmyP);
            }
            ;
            loadTemplateData(A, $("#tAtrajectory"), $("#Atrajectory"));
            loadTemplateData(B, $("#tBtrajectory"), $("#Btrajectory"));
            CreateMap("container", points, centerLo, centerLa);


};

function toAddress(areaname, address,obj) {
    $(".containerDetail li span").removeClass("bActive");
    $(obj).find("span").addClass("bActive");

    CreateMap("container", '', "", "", address, areaname);

};


function recoverMap() {
    keyAreas();

}
function locationProbability() {
    var data = [{
        "areaname": "铁岭市",
        "probability": "99"
    }, {
        "areaname": "赤峰市",
        "probability": "90"
    }, {
        "areaname": "忻州市",
        "probability": "80"
    }, {
        "areaname": "阳泉市",
        "probability": "70"
    }, {
        "areaname": "承德市",
        "probability": "60"
    }, {
        "areaname": "邢台市",
        "probability": "50"
    }, {
        "areaname": "秦皇岛市",
        "probability": "40"
    }, {
        "areaname": "石家庄市",
        "probability": "30"
    }, {
        "areaname": "天津市",
        "probability": "20"
    }, {
        "areaname": "北京市",
        "probability": "10"
    }]
     $(data).each(function (index, item) {
                item.index = index + 1;
            });
            loadTemplateData(data, $("#tCityRanking"), $("#cityRanking"));
            $(".city_order").each(function (index, item) {
                if ($(this).html() == 1) {
                    $(this).css("backgroundColor", "#f70023");
                } else if ($(this).html() == 2) {
                    $(this).css("backgroundColor", "#eb7c06");
                } else if ($(this).html() == 3) {
                    $(this).css("backgroundColor", "#d4af04");
                }
            })

}


//function random() {
//
//    var i;
//
//    if (!forceDirectedChartSA.state.index) {
//
//        // 属性赋值
//        $(this).attr('data-index', '（' + (i = typeof arguments[0] === 'number' ? arguments[0] : Math.round(Math.random() * 124)) + '）');
//
//        // 置灰
//        $(this).attr('disabled', 'disabled');
//
//        // 渲染
//        renderIndex(i);
//
//    }
//};


function reduction() {
   // if (forceDirectedChartSA.state.index) {

        // 渲染还原
        renderRecovery();

        // 按钮还原
  //    $(this).prev()
    //
    //        .removeAttr('disabled')
    //        .removeAttr('data-index')
    //
    //    ;
    //
    //}

}


var renderIndex = function (/* index */ i) {

    // 渲染
    forceDirectedChartSA.renderIndex({

        // 索引（随机演示数据）
        index: [

            i

        ],

        // 样式
        style: {

            // 一般节点
            normal: {
                symbol: ['image://' + forceDirectedChartSA.image[1], 'image://' + forceDirectedChartSA.image[2], 'image://' + forceDirectedChartSA.image[3]],
                symbolSize: '30',

                label: {
                    show: true,
                    textStyle: {
                        color: '#333'
                    }
                }
            },

            // 当前节点
            emphasis: {symbolSize: '20', borderWidth: '3', borderColor: '#14caff'}


        }

    });
    // 显示弹层
    $('#forceDirectedSA-pop').removeClass('false');

};




var renderRecovery = function () {

    // 渲染还原
    forceDirectedChartSA.renderRecoveryIndex();

    // 隐藏弹层
    $('#forceDirectedSA-pop').addClass('false');

};

function pushPop1(Dataold, index) {

    var obj = Dataold[index];
    var data = [obj]



    if (index < (capitalLength-1)) {
        loadTemplateData(data, $("#tForceDirectedSA-pop"), $("#forceDirectedSA-pop"))
    } else if (capitalLength <= index && index < (MobileLength + capitalLength)) {
        loadTemplateData(data, $("#tForceDirectedSA-pop1"), $("#forceDirectedSA-pop"))
    } else if (index >= (MobileLength + capitalLength)) {
        loadTemplateData(data, $("#tForceDirectedSA-pop2"), $("#forceDirectedSA-pop"))
    }


};


function loadTemplateData(data, $tcontainer, $container) {    //handlebars模板

    var context = {data: data};
    var source = $tcontainer.html();
    var template = Handlebars.compile(source);
    $container.html(template(context));
};


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};





