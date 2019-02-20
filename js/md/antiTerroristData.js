var areaId = "", forewarnType = "", importantArea = "", jsonName = "", timeData;
$(document).ready(function () {           //页面初始化

    initSuspiciousPersonne(); // 可疑人员预警指数初始化
    //initAllSuspiciousPersonne(1);      //可疑人员查看全部初始化
    setInterval(function () {           //群众举报提示滚动
        scrollT("scrollBox", 80)
    }, 4000);

    massesTip();   //群众举报提示初始化
   // allMassesTip();   //群众举报提示查看全部初始化
    middleMap(areaId, forewarnType, importantArea, jsonName);          //反恐监控台

    searchCriteria();    //搜索条件
    cityWarningRanking("", "", ""); //城市预警排行初始化

    initEarlyWarningType("");   //预警类型饼图
    allInitEarlyWarningType(areaId, importantArea, "");      //预警类型全部

    $(".listB .right").mCustomScrollbar({
        scrollButtons: {
            enable: true,
            scrollType: "continuous",
            scrollSpeed: 500,
            scrollAmount: 200
        },
        horizontalScroll: false,
    });


    $(".listContent  #timeSelect input:button").on("click",function(){

        $(".listContent #timeSelect input:button").removeClass("inputActive2").addClass("inputActive1")
        $(this).removeClass("inputActive1").addClass("inputActive2");
    })




});

function imgError(obj){
    // obj.src="../images/zwtpts_03.png";

}
function allInitEarlyWarningType(pageIndex) {
    var pageSize = 8;
    var DATA = {"dataList":[{"id":"1","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/10/10"},{"id":"2","reportTitle":"拐卖儿童","reportContent":"福建，江苏等地跨省拐卖儿童案","reportTime":"2016/8/10"},{"id":"3","reportTitle":"涉恐谣言","reportContent":"云南，江苏等地跨省涉恐谣言案","reportTime":"2015/12/10"},{"id":"4","reportTitle":"拐卖儿童","reportContent":"一起涉云南，江苏等地跨省拐卖儿童案","reportTime":"2016/9/10"},{"id":"5","reportTitle":"爆炸物品","reportContent":"一起涉云南，江苏等地跨省爆炸物品案","reportTime":"2016/8/10"},{"id":"6","reportTitle":"拐卖儿童","reportContent":"山东，江苏等地跨省拐卖儿童案","reportTime":"2015/11/9"},{"id":"7","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/1/1"}],"totalPages":1,"totalCount":7,"currentPage":"1"}
    var totalNums = DATA.totalCount;
    var data = DATA.dataList;

    $(data).each(function (index, item) {
        item.index = index + 1;
    });
    var start = 1;
    var end = 10;
    initPagination("page2", totalNums, pageSize, start, end)
    loadTemplateData(data, $("#tAllMassesTip"), $("#allMassesTip"));
    // $.ajax({
    //     type: 'get',
    //     url: baseUrl + "/detail/searchPeoplePage?pageIndex=" + pageIndex + "&pageSize=" + pageSize,
    //     success: function (data) {
    //         console.log("data:",data)
    //         var totalNums = DATA.totalCount;
    //         var data = DATA.dataList;
    //
    //         $(data).each(function (index, item) {
    //             item.index = index + 1;
    //         });
    //         var start = 1;
    //         var end = 10;
    //         initPagination("page2", totalNums, pageSize, start, end)
    //         loadTemplateData(DATA, $("#tAllMassesTip"), $("#allMassesTip"));
    //     },
    //     error:function(){
    //         alert()
    //     }
    // });
};


function allInitEarlyWarningType(codeId, area, typeName) {
    var data = [{
        "personId": "1001",
        "personName": "艾合台木·吐合台木尼亚孜",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "652928198409081000",
        "personType": "维吾尔族",
        "nation": "涉恐人员",
        "detail": "疑似与已知恐怖分子频繁接触，有发动恐怖袭击可能性",
        "photo": "../images/pic/1001.jpg"
    }, {
        "personId": "1002",
        "personName": "合台木",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "宗教敏感人员",
        "detail": "通过网络传播非法宗教内容，对正常宗教信仰人民产生恶略影响",
        "photo": "../images/pic/1002.jpg"
    }, {
        "personId": "1003",
        "personName": "吐合台木尼亚孜",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "652928198409081000",
        "personType": "维吾尔族",
        "nation": "涉恐人员",
        "detail": "与在逃的涉恐分子阿卜杜为同村，存在聚众闹事前科，与阿卜杜有电话联系",
        "photo": "../images/pic/1003.jpg"
    }, {
        "personId": "1004",
        "personName": "台木格",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "制爆嫌疑人",
        "detail": "通过民众举报，该人员多次出没市场，购买危险化学物品，存在自制炸药可能性",
        "photo": "../images/pic/1001.jpg"
    }, {
        "personId": "1005",
        "personName": "吐合台木",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "传播恐怖视频",
        "detail": "通过网络传播宗教恐怖视频",
        "photo": "../images/pic/1005.jpg"
    }, {
        "personId": "1006",
        "personName": "阿卜杜.热依曼",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "552928198409081000",
        "personType": "维吾尔族",
        "nation": "涉恐人员",
        "detail": "疑似与已知恐怖分子频繁接触，有发动恐怖袭击可能性",
        "photo": "../images/pic/1006.jpg"
    }, {
        "personId": "1007",
        "personName": "阿卜杜拉",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "652201198803201000",
        "personType": "维吾尔族",
        "nation": "制枪嫌疑人",
        "detail": "通过民众举报，该人员多次出没市场，购买危险物品，存在自制枪支弹药可能性",
        "photo": "../images/pic/1001.jpg"
    }, {
        "personId": "1008",
        "personName": "玉苏普",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "652803196807281000",
        "personType": "维吾尔族",
        "nation": "非法越境",
        "detail": "频繁与境外分子联系，浏览境外网站，存在非法越境可能性",
        "photo": "../images/pic/1006.jpg"
    }, {
        "personId": "1009",
        "personName": "艾合台·吐合尼亚孜",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "652928198409081000",
        "personType": "维吾尔族",
        "nation": "涉恐人员",
        "detail": "疑似与已知恐怖分子频繁接触，有发动恐怖袭击可能性",
        "photo": "../images/pic/1001.jpg"
    }, {
        "personId": "1010",
        "personName": "艾合台",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "宗教敏感人员",
        "detail": "通过网络传播非法宗教内容，对正常宗教信仰人民产生恶略影响",
        "photo": "../images/pic/1005.jpg"
    }, {
        "personId": "1011",
        "personName": "吐合台木尼亚",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "652928198409081000",
        "personType": "维吾尔族",
        "nation": "涉恐人员",
        "detail": "与在逃的涉恐分子阿卜杜为同村，存在聚众闹事前科，与阿卜杜有电话联系",
        "photo": "../images/pic/1004.jpg"
    }, {
        "personId": "1012",
        "personName": "台木",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "制爆嫌疑人",
        "detail": "通过民众举报，该人员多次出没市场，购买危险化学物品，存在自制炸药可能性",
        "photo": "../images/pic/1001.jpg"
    }, {
        "personId": "1013",
        "personName": "吐合木",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "传播恐怖视频",
        "detail": "通过网络传播宗教恐怖视频",
        "photo": "../images/pic/1003.jpg"
    }, {
        "personId": "1014",
        "personName": "阿杜.热依曼",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "552928198409081000",
        "personType": "维吾尔族",
        "nation": "非法越境",
        "detail": "疑似与已知恐怖分子频繁接触，有发动恐怖袭击可能性",
        "photo": "../images/pic/1006.jpg"
    }, {
        "personId": "1015",
        "personName": "阿杜拉",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "652201198803201000",
        "personType": "维吾尔族",
        "nation": "制枪嫌疑人",
        "detail": "通过民众举报，该人员多次出没市场，购买危险物品，存在自制枪支弹药可能性",
        "photo": "../images/pic/1003.jpg"
    }, {
        "personId": "1016",
        "personName": "玉苏",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "652803196807281000",
        "personType": "维吾尔族",
        "nation": "非法越境",
        "detail": "频繁与境外分子联系，浏览境外网站，存在非法越境可能性",
        "photo": "../images/pic/1004.jpg"
    }, {
        "personId": "1017",
        "personName": "阿卜杜",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "652928198409081000",
        "personType": "维吾尔族",
        "nation": "其它",
        "detail": "疑似与已知恐怖分子频繁接触，有发动恐怖袭击可能性",
        "photo": "../images/pic/1002.jpg"
    }, {
        "personId": "1018",
        "personName": "李静",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "652928198409081000",
        "personType": "汉",
        "nation": "其它",
        "detail": "疑似与已知恐怖分子频繁接触，有发动恐怖袭击可能性",
        "photo": "../images/pic/1006.jpg"
    }, {
        "personId": "1019",
        "personName": "艾合台木",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "其它",
        "detail": "通过网络传播非法宗教内容，对正常宗教信仰人民产生恶略影响",
        "photo": "../images/pic/1002.jpg"
    }, {
        "personId": "1020",
        "personName": "葛根",
        "mobile": "13800000000",
        "gender": "男",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "其它",
        "detail": "通过网络传播非法宗教内容，对正常宗教信仰人民产生恶略影响",
        "photo": "../images/pic/1003.jpg"
    }, {
        "personId": "1021",
        "personName": "玛莎",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "其它",
        "detail": "通过网络传播非法宗教内容，对正常宗教信仰人民产生恶略影响",
        "photo": "../images/pic/1002.jpg"
    }, {
        "personId": "1022",
        "personName": "格根其木格",
        "mobile": "13800000000",
        "gender": "女",
        "idcardNo": "222222298409081000",
        "personType": "维吾尔族",
        "nation": "其它",
        "detail": "通过网络传播非法宗教内容，对正常宗教信仰人民产生恶略影响",
        "photo": "../images/pic/1004.jpg"
    }];
    loadTemplateData(data, $("#tInitEarlyWarningType"), $("#initEarlyWarningType"));
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

function allPersonne() {
    $(".meng,#list1").show();
    initAllSuspiciousPersonne(1);

};

function closedList() {
    $(".meng,#list1,#list2,#list3").hide();
};

function morePersonne() {
    $(".meng,#list3").show();

};
function closedListB() {
    $(".meng,#list3").hide();
};
function infomationTip() {
    $(".meng,#list2").show();
    allMassesTip(1);   //群众举报提示查看全部初始化
    $(".listContent #timeSelect input:button").removeClass("inputActive2").addClass("inputActive1")
};

function tonewpagenum() {
    var num = parseInt($("#writepagenum").val());
    initEntsTemplate(num - 1);
    var obj = $("#page").children();
    for (var i = 1; i < obj.length - 1; i++) {
        obj[i].style.backgroundColor = "#061e46";
        obj[i].style.color = "#91a0ad";
    }
    ;
    obj.eq(num).css({"backgroundColor": "#0085f5", "color": "#FFF"});
};

function initAllSuspiciousPersonne(pageIndex) {
    var pageSize = 4;
    var DATA = {"dataList":[{"gender":"男","nation":"维吾尔族","person_type":"涉恐人员","mobile":"13800000000","photo":"../images/pic/1001.jpg","person_name":"艾合台木·吐合台木尼亚孜","idcard_no":"652928198409081000","person_id":"1001"},{"gender":"男","nation":"维吾尔族","person_type":"传播恐怖视频","mobile":"13800000000","photo":"../images/pic/1003.jpg","person_name":"吐合木","idcard_no":"222222298409081000","person_id":"1013"},{"gender":"男","nation":"维吾尔族","person_type":"制枪嫌疑人","mobile":"13800000000","photo":"../images/pic/1001.jpg","person_name":"阿卜杜拉","idcard_no":"652201198803201000","person_id":"1007"},{"gender":"女","nation":"维吾尔族","person_type":"宗教敏感人员","mobile":"13800000000","photo":"../images/pic/1002.jpg","person_name":"合台木","idcard_no":"222222298409081000","person_id":"1002"}],"totalPages":6,"totalCount":22,"currentPage":"1"}
    var totalNums = DATA.totalCount;
    var data = DATA.dataList;

    $(data).each(function (index, item) {
        item.index = index + 1;
    });
    $("#currpage1").html(pageIndex);
    if (totalNums % pageSize == 0) {
        var pageTatal = totalNums / pageSize
    } else {
        var pageTatal = parseInt(totalNums / pageSize + 1)
    }
    $("#spanTotalNums1").html(pageTatal)

    var PageConfig = {
        pageNum: pageTatal, //总页数
        nowPage: pageIndex, //当前页
        lastPage: true, //上一页按钮
        nextPage: true, //下一页按钮
        firstPage: 1, //首页按钮
        tailPage: 5, //尾页按钮
        jumpPage: true //跳页框
    }
    $("#page1").html("");
    var listPage = new Pages('page1',PageConfig,function(){
        var nowPage = this.nowPage;
        initAllSuspiciousPersonne1(nowPage)
    });

    loadTemplateData(data, $("#tInitAllSuspiciousPersonne"), $("#initAllSuspiciousPersonne"));
};


function initAllSuspiciousPersonne1(pageIndex) {
    var pageSize = 4;
    var DATA = {"dataList":[{"gender":"男","nation":"维吾尔族","person_type":"涉恐人员","mobile":"13800000000","photo":"../images/pic/1001.jpg","person_name":"艾合台木·吐合台木尼亚孜","idcard_no":"652928198409081000","person_id":"1001"},{"gender":"男","nation":"维吾尔族","person_type":"传播恐怖视频","mobile":"13800000000","photo":"../images/pic/1003.jpg","person_name":"吐合木","idcard_no":"222222298409081000","person_id":"1013"},{"gender":"男","nation":"维吾尔族","person_type":"制枪嫌疑人","mobile":"13800000000","photo":"../images/pic/1001.jpg","person_name":"阿卜杜拉","idcard_no":"652201198803201000","person_id":"1007"},{"gender":"女","nation":"维吾尔族","person_type":"宗教敏感人员","mobile":"13800000000","photo":"../images/pic/1002.jpg","person_name":"合台木","idcard_no":"222222298409081000","person_id":"1002"}],"totalPages":6,"totalCount":22,"currentPage":"1"}
    var totalNums = DATA.totalCount;
    var data = DATA.dataList;
    var totalNums = DATA.totalCount;
    var data = DATA.dataList;
    $(data).each(function (index, item) {
        item.index = index + 1;
    });
    $("#currpage1").html(pageIndex);
    if (totalNums % pageSize == 0) {
        var pageTatal = totalNums / pageSize
    } else {
        var pageTatal = parseInt(totalNums / pageSize + 1)
    }
    $("#spanTotalNums1").html(pageTatal)
    loadTemplateData(data, $("#tInitAllSuspiciousPersonne"), $("#initAllSuspiciousPersonne"));
};

//  预警类型饼图

function initEarlyWarningType(area) {
var data = {"datalist":[{"warnName":"其它","count":6},{"warnName":"制枪","count":2},{"warnName":"制爆","count":2},{"warnName":"暴恐视频","count":2},{"warnName":"极端言论","count":2},{"warnName":"谣言","count":5},{"warnName":"越境","count":3}]}
    EarlyWarningType(data)
}
function EarlyWarningType(data) {
    data = data.datalist;
    var Data = [];
    var colors = ['#4a4dd9', '#d54b40', '#ff8a18', '#ffc018', '#1bbd7b', '#2e9de8']
    $(data).each(function (index, item) {
        var dataObj = {
            value: item.count,
            name: item.warnName,
            itemStyle: {   //数据填充
                normal: {
                    color: colors[index],           //颜色填充
                }
            }
        };
        Data.push(dataObj)
    });

    var myChart = echarts.init(document.getElementById('chart1'));
    var myChart1 = echarts.init(document.getElementById('listpie'));
    myChart1.on("click", function (e) {
        var typeName = e.name;

        allInitEarlyWarningType(areaId, importantArea, typeName);


    })


    var option = {
        backgroundColor: '#02153f',
        tooltip: {
            show: true,
            formatter: function (params) {
                if (params.seriesIndex != "0" && params.seriesIndex != "1" && params.seriesIndex != "2") {
                    "{a} <br/>{b} : {c} ({d}%)";
                }
            }

        },
        legend: {
            x: 'left',
            data: ['家人', '朋友']
        },
        color: ['#33d9ff', '#ff528b', '#42fd93', '#ff8115', '#ff0000', '#f9ff4d', '#3c5ef1', '#8c7fff', '#00d0ff', '#c042ff', '#42fd93', '#ffd16e', '#ec428e', '#009cff', '#ff82ef', '#00c66b', '#8c2cdd', '#ffff74', '#ffa7a7', '#696dff', '#fefeb2'],
        tooltip: {
            trigger: 'item',
            formatter: "{a}  <br/>{b} : {c}({d}%)"
        },
        calculable: false,
        series: [{
            z: 0,
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [83, 84],
            labelLine: {
                normal: {
                    show: false

                },

            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#324160' //颜色填充
                    }
                },
                tooltip: {show: false}
            }]
        }, {
            z: 0,
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [73, 74],
            labelLine: {
                normal: {
                    show: false

                }
            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#324160' //颜色填充
                    }
                },
                tooltip: {show: false}
            }]
        }, {
            name: '预警类型',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [30, 70],
            label: {
                normal: {
                    position: 'outside',
                    show: true,
                    formatter: "{b}\n\n{d}%",
                    textStyle: {
                        color: "#fff",
                        fontSize: 10
                    }
                }
            },
            labelLine: {
                normal: {
                    textStyle: {
                        fontSize: 10
                    },
                    length: 15,
                    length2: 0,
                    lineStyle: {
                        width: 3
                    }
                }
            },
            data: Data
        }]
    };


    var option1 = {
        backgroundColor: '#02153f',
        tooltip: {
            show: true,
            formatter: function (params) {
                if (params.seriesIndex != "0" && params.seriesIndex != "1" && params.seriesIndex != "2") {
                    "{a} <br/>{b} : {c} ({d}%)";
                }
            }

        },
        color: ['#33d9ff', '#ff528b', '#42fd93', '#ff8115', '#ff0000', '#f9ff4d', '#3c5ef1', '#8c7fff', '#00d0ff', '#c042ff', '#42fd93', '#ffd16e', '#ec428e', '#009cff', '#ff82ef', '#00c66b', '#8c2cdd', '#ffff74', '#ffa7a7', '#696dff', '#fefeb2'],
        tooltip: {
            trigger: 'item',
            formatter: "{a}  <br/>{b} : {c}({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            left: '65px',
            bottom: '35px',
            textStyle: {
                color: '#FFF'
            },
            data: ['嫌疑人']
        },
        calculable: false,
        series: [{
            z: 0,
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [103, 104],
            labelLine: {
                normal: {
                    show: false

                },

            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#324160' //颜色填充
                    }
                },
                tooltip: {show: false}
            }]
        }, {
            z: 0,
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [93, 94],
            labelLine: {
                normal: {
                    show: false

                }
            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#324160' //颜色填充
                    }
                },
                tooltip: {show: false}
            }]
        }, {
            name: '预警类型',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [50, 90],
            label: {
                normal: {
                    position: 'outside',
                    show: true,
                    formatter: "{b}\n\n{d}%",
                    textStyle: {
                        color: "#fff",
                        fontSize: 10
                    }
                }
            },
            labelLine: {
                normal: {
                    textStyle: {
                        fontSize: 10
                    },
                    length: 15,
                    length2: 0,
                    lineStyle: {
                        width: 3
                    }
                }
            },
            data: Data
        }]
    };

    myChart.setOption(option);
    myChart1.setOption(option1);


};


function middleMap(areaId, forewarnType, importantArea, jsonName) {
    $("#main").html("");
        var Data = [];
        var data =  [
            {
            "type0": [
                {
                "personName": "合台木",
                "forewarnType": "极端言论",
                "areaId": "110101",
                "importantArea": "医院",
                "latitude": "39.938673",
                "terrorTime": "2016/5/12",
                "longitude": "116.475924"
            },
                {
                "personName": "艾合台",
                "forewarnType": "极端言论",
                "areaId": "210400",
                "importantArea": "政府",
                "latitude": "41.875957",
                "terrorTime": "2016/8/8",
                "longitude": "123.921112"
            }]
        }, {
            "type1": [{
                "personName": "阿卜杜",
                "forewarnType": "其它",
                "areaId": "120114",
                "importantArea": "政府",
                "latitude": "39.376926",
                "terrorTime": "2016/8/9",
                "longitude": "117.057961"
            }, {
                "personName": "李静",
                "forewarnType": "其它",
                "areaId": "130184",
                "importantArea": "学校",
                "latitude": "38.344769",
                "terrorTime": "2016/8/7",
                "longitude": "114.685783"
            }, {
                "personName": "艾合台木",
                "forewarnType": "其它",
                "areaId": "320100",
                "importantArea": "医院",
                "latitude": "40.090309",
                "terrorTime": "2016/8/9",
                "longitude": "113.295258"
            }, {
                "personName": "葛根",
                "forewarnType": "其它",
                "areaId": "110107",
                "importantArea": "教堂",
                "latitude": "39.9146",
                "terrorTime": "2016/8/9",
                "longitude": "116.195442"
            }, {
                "personName": "玛莎",
                "forewarnType": "其它",
                "areaId": "140400",
                "importantArea": "学校",
                "latitude": "36.191113",
                "terrorTime": "2016/8/9",
                "longitude": "113.113556"
            }, {
                "personName": "格根其木格",
                "forewarnType": "其它",
                "areaId": "210800",
                "importantArea": "教堂",
                "latitude": "40.667431",
                "terrorTime": "2016/8/9",
                "longitude": "122.235153"
            }]
        }, {
            "type2": [{
                "personName": "玉苏普",
                "forewarnType": "越境",
                "areaId": "220100",
                "importantArea": "医院",
                "latitude": "43.886841",
                "terrorTime": "2016/8/6",
                "longitude": "125.324501"
            }, {
                "personName": "阿杜.热依曼",
                "forewarnType": "越境",
                "areaId": "120104",
                "importantArea": "医院",
                "latitude": "39.120476",
                "terrorTime": "2016/6/12",
                "longitude": "117.164146"
            }, {
                "personName": "玉苏",
                "forewarnType": "越境",
                "areaId": "140100",
                "importantArea": "政府",
                "latitude": "37.857014",
                "terrorTime": "2016/6/12",
                "longitude": "112.549248"
            }]
        }, {
            "type3": [{
                "personName": "台木格",
                "forewarnType": "制爆",
                "areaId": "320100",
                "importantArea": "政府",
                "latitude": "32.041546",
                "terrorTime": "2016/6/12",
                "longitude": "118.76741"
            }, {
                "personName": "台木",
                "forewarnType": "制爆",
                "areaId": "150104",
                "importantArea": "学校",
                "latitude": "40.799419",
                "terrorTime": "2016/8/10",
                "longitude": "111.665428"
            }]
        }, {
            "type4": [{
                "personName": "艾合台木·吐合台木尼亚孜",
                "forewarnType": "谣言",
                "areaId": "210102",
                "importantArea": "学校",
                "latitude": "41.788074",
                "terrorTime": "2016/5/12",
                "longitude": "123.406662"
            }, {
                "personName": "吐合台木尼亚孜",
                "forewarnType": "谣言",
                "areaId": "130100",
                "importantArea": "学校",
                "latitude": "38.045475",
                "terrorTime": "2016/6/12",
                "longitude": "114.502464"
            }, {
                "personName": "阿卜杜.热依曼",
                "forewarnType": "谣言",
                "areaId": "210100",
                "importantArea": "学校",
                "latitude": "41.796768",
                "terrorTime": "2016/6/12",
                "longitude": "123.429092"
            }, {
                "personName": "艾合台·吐合尼亚孜",
                "forewarnType": "谣言",
                "areaId": "220400",
                "importantArea": "学校",
                "latitude": "42.902691",
                "terrorTime": "2016/6/12",
                "longitude": "125.145348"
            }, {
                "personName": "吐合台木尼亚",
                "forewarnType": "谣言",
                "areaId": "150102",
                "importantArea": "教堂",
                "latitude": "40.826225",
                "terrorTime": "2016/6/12",
                "longitude": "111.685966"
            }]
        }, {
            "type5": [{
                "personName": "吐合台木",
                "forewarnType": "暴恐视频",
                "areaId": "320282",
                "importantArea": "教堂",
                "latitude": "31.364384",
                "terrorTime": "2016/6/12",
                "longitude": "119.820541"
            }, {
                "personName": "吐合木",
                "forewarnType": "暴恐视频",
                "areaId": "120100",
                "importantArea": "学校",
                "latitude": "39.125595",
                "terrorTime": "2016/6/12",
                "longitude": "117.190186"
            }]
        }, {
            "type6": [{
                "personName": "阿卜杜拉",
                "forewarnType": "制枪",
                "areaId": "230100",
                "importantArea": "学校",
                "latitude": "45.756966",
                "terrorTime": "2016/6/12",
                "longitude": "126.642464"
            }, {
                "personName": "阿杜拉",
                "forewarnType": "制枪",
                "areaId": "130183",
                "importantArea": "学校",
                "latitude": "38.027477",
                "terrorTime": "2016/8/7",
                "longitude": "115.044884"
            }]
        }]
        var jdArr = [];
        if (data.length != 1) {
            if (data[0]) {   //极端言论
                var type0 = data[0].type0;
                $(type0).each(function (index, item) {
                    var dataObj0 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 0],

                    };
                    jdArr.push(dataObj0);
                });

            };
            var qtArr = [];
            if (data[1]) {
                var type1 = data[1].type1;  //其他
                $(type1).each(function (index, item) {
                    var dataObj1 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 20],

                    };
                    qtArr.push(dataObj1);
                });

            }
            ;
            var yjArr = [];
            if (data[2]) {
                var type2 = data[2].type2;   //越境
                $(type2).each(function (index, item) {
                    var dataObj2 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 40],

                    };
                    yjArr.push(dataObj2);
                });

            }
            ;
            var zbArr = [];
            if (data[3]) {
                var type3 = data[3].type3;   //制暴
                $(type3).each(function (index, item) {
                    var dataObj3 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 60],

                    };
                    zbArr.push(dataObj3);
                });

            }
            ;
            var yyArr = [];
            if (data[4]) {
                var type4 = data[4].type4;   //谣言
                $(type4).each(function (index, item) {
                    var dataObj4 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 80],

                    };
                    yyArr.push(dataObj4);
                });

            }
            ;
            var bkArr = [];
            if (data[5]) {
                var type5 = data[5].type5;   //暴恐视频
                $(type5).each(function (index, item) {
                    var dataObj5 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 100],

                    };
                    bkArr.push(dataObj5);
                });

            }
            ;
            var zqArr = [];
            if (data[6]) {
                var type6 = data[6].type6;   //制枪
                $(type6).each(function (index, item) {
                    var dataObj6 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 120],

                    };
                    zqArr.push(dataObj6);
                });

            }
            ;
            Data.push(jdArr);
            Data.push(qtArr);
            Data.push(yjArr);
            Data.push(zbArr);
            Data.push(yyArr);
            Data.push(bkArr);
            Data.push(zqArr);
        } else if (data.length == 1) {
            var jdArr = [];
            if (data[0].type0[0].forewarnType == "极端言论") {   //极端言论
                var type0 = data[0].type0;
                $(type0).each(function (index, item) {
                    var dataObj0 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 0],

                    };
                    jdArr.push(dataObj0);
                });
                Data.push(jdArr);
            }
            ;
            if (data[0].type0[0].forewarnType == "制暴") {
                var zbArr = [];
                var type1 = data[0].type0;  //制暴
                $(type1).each(function (index, item) {
                    var dataObj1 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude,60],

                    };
                    zbArr.push(dataObj1);
                });
                Data.push(zbArr);
            }
            ;
            if (data[0].type0[0].forewarnType == "谣言") {
                var yyArr = [];
                var type2 = data[0].type0;   //谣言
                $(type2).each(function (index, item) {
                    var dataObj2 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 80],

                    };
                    yyArr.push(dataObj2);
                });
                Data.push(yyArr);
            }
            ;
            if (data[0].type0[0].forewarnType == "暴恐视频") {
                var bkArr = [];
                var type3 = data[0].type0;   //暴恐视频
                $(type3).each(function (index, item) {
                    var dataObj3 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 100],

                    };
                    bkArr.push(dataObj3);
                });
                Data.push(bkArr);

            }
            ;

            if (data[0].type0[0].forewarnType == "其他") {
                var qtArr = [];
                var type4 = data[0].type0;   //其他
                $(type4).each(function (index, item) {
                    var dataObj4 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 20],

                    };
                    qtArr.push(dataObj4);
                });
                Data.push(qtArr);

            }
            ;

            if (data[0].type0[0].forewarnType == "越境") {
                var yjArr = [];
                var type5 = data[0].type0;   //越境
                $(type5).each(function (index, item) {
                    var dataObj5 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 40],

                    };
                    yjArr.push(dataObj5);
                });
                Data.push(yjArr);

            }
            ;

            if (data[0].type0[0].forewarnType == "制枪") {
                var zqArr = [];
                var type6 = data[0].type0;   //制枪
                $(type6).each(function (index, item) {
                    var dataObj6 = {
                        name: item.personName,
                        value: [item.longitude, item.latitude, 120],

                    };
                    zqArr.push(dataObj6);
                });
                Data.push(zqArr);

            }
            ;
        }


        var chart = map_trander;
        chart({
            jsonName: 'china',
            id: 'main',
            width: 700,
            height: 800,
            data: Data
            //[{
            //    name: '',
            //    value: [121.15, 31.89, 12],
            //}]
            ,
            callback: function (data) {

            }
        });
};


function initSuspiciousPersonne() {
    var data = [{
        "id": "1",
        "index": "94.23",
        "areaId": "210102",
        "pId": "1001",
        "pName": "艾合台木·吐合台木尼亚孜",
        "pType": "涉恐人员",
        "photoSource": "../images/pic/1001.jpg"
    }, {
        "id": "13",
        "index": "94.23",
        "areaId": "120100",
        "pId": "1013",
        "pName": "吐合木",
        "pType": "传播恐怖视频",
        "photoSource": "../images/pic/1003.jpg"
    }, {
        "id": "7",
        "index": "94.23",
        "areaId": "230100",
        "pId": "1007",
        "pName": "阿卜杜拉",
        "pType": "制枪嫌疑人",
        "photoSource": "../images/pic/1001.jpg"
    }, {
        "id": "2",
        "index": "93.23",
        "areaId": "110101",
        "pId": "1002",
        "pName": "合台木",
        "pType": "宗教敏感人员",
        "photoSource": "../images/pic/1002.jpg"
    }, {
        "id": "14",
        "index": "93.23",
        "areaId": "120104",
        "pId": "1014",
        "pName": "阿杜.热依曼",
        "pType": "非法越境",
        "photoSource": "../images/pic/1006.jpg"
    }];
    loadTemplateData(data, $("#tSuspiciousPersonne"), $("#suspiciousPersonne"));

    // $.ajax({
    //     type: 'get',
    //     url: baseUrl + "/warnIndex/getFiveIndexs",
    //     success: function (data) {
    //         if (data == null || data == "" || data == undefined) {
    //             return;
    //         }
    //         ;
    //         data = data.datalist;
    //
    //         loadTemplateData(data, $("#tSuspiciousPersonne"), $("#suspiciousPersonne"));
    //     }
    // });


};


function massesTip() {
        var data = [{
        "id": "1",
        "reportTitle": "盗窃",
        "reportContent": "一起涉云南，江苏等地跨省盗窃案",
        "reportTime": "2016/10/10"
    }, {
        "id": "2",
        "reportTitle": "拐卖儿童",
        "reportContent": "福建，江苏等地跨省拐卖儿童案",
        "reportTime": "2016/8/10"
    }, {
        "id": "3",
        "reportTitle": "涉恐谣言",
        "reportContent": "云南，江苏等地跨省涉恐谣言案",
        "reportTime": "2015/12/10"
    }, {
        "id": "4",
        "reportTitle": "拐卖儿童",
        "reportContent": "一起涉云南，江苏等地跨省拐卖儿童案",
        "reportTime": "2016/9/10"
    }, {
        "id": "5",
        "reportTitle": "爆炸物品",
        "reportContent": "一起涉云南，江苏等地跨省爆炸物品案",
        "reportTime": "2016/8/10"
    }];
    $(data).each(function (index, item) {
        item.index = index + 1;
        var str = item.reportTitle;
        var index1 = item.reportContent.indexOf(str);
        var newStr1 = item.reportContent.substring(0, index1) + "<strong>" + item.reportContent.substring(index1, index1 + str.length) + "</strong>" + item.reportContent.substring(index1 + str.length);
        item.reportContent = newStr1;
    });
    loadTemplateData(data, $("#tScrollBox"), $("#scrollBox"));
};

function reloadPersonTip(num) {

    allMassesTip(1, num)
}


function allMassesTip(pageIndex, num) {
    var pageSize = 8;
    timeData = num;
    var DATA = {"dataList":[{"id":"1","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/10/10"},{"id":"2","reportTitle":"拐卖儿童","reportContent":"福建，江苏等地跨省拐卖儿童案","reportTime":"2016/8/10"},{"id":"3","reportTitle":"涉恐谣言","reportContent":"云南，江苏等地跨省涉恐谣言案","reportTime":"2015/12/10"},{"id":"4","reportTitle":"拐卖儿童","reportContent":"一起涉云南，江苏等地跨省拐卖儿童案","reportTime":"2016/9/10"},{"id":"5","reportTitle":"爆炸物品","reportContent":"一起涉云南，江苏等地跨省爆炸物品案","reportTime":"2016/8/10"},{"id":"6","reportTitle":"拐卖儿童","reportContent":"山东，江苏等地跨省拐卖儿童案","reportTime":"2015/11/9"},{"id":"7","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/1/1"}],"totalPages":1,"totalCount":7,"currentPage":"1"}

    var totalNums = DATA.totalCount;
    data = DATA.dataList;

    $(data).each(function (index, item) {
        item.index = index + 1;
    });
    $("#currpage2").html(pageIndex);
    if (totalNums % pageSize == 0) {
        var pageTatal = totalNums / pageSize
    } else {
        var pageTatal = parseInt(totalNums / pageSize + 1)
    }
    $("#spanTotalNums2").html(pageTatal)
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
        allMassesTip1(nowPage)
    });
    loadTemplateData(data, $("#tAllMassesTip"), $("#allMassesTip"));
    // $.ajax({
    //     type: 'get',
    //     url: baseUrl + "/detail/searchPeoplePage?pageIndex=" + pageIndex + "&pageSize=" + pageSize + "&time=" + timeData,
    //     success: function (data) {
    //         var DATA = {"dataList":[{"id":"1","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/10/10"},{"id":"2","reportTitle":"拐卖儿童","reportContent":"福建，江苏等地跨省拐卖儿童案","reportTime":"2016/8/10"},{"id":"3","reportTitle":"涉恐谣言","reportContent":"云南，江苏等地跨省涉恐谣言案","reportTime":"2015/12/10"},{"id":"4","reportTitle":"拐卖儿童","reportContent":"一起涉云南，江苏等地跨省拐卖儿童案","reportTime":"2016/9/10"},{"id":"5","reportTitle":"爆炸物品","reportContent":"一起涉云南，江苏等地跨省爆炸物品案","reportTime":"2016/8/10"},{"id":"6","reportTitle":"拐卖儿童","reportContent":"山东，江苏等地跨省拐卖儿童案","reportTime":"2015/11/9"},{"id":"7","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/1/1"}],"totalPages":1,"totalCount":7,"currentPage":"1"}
    //
    //         var totalNums = DATA.totalCount;
    //         data = DATA.dataList;
    //
    //         $(data).each(function (index, item) {
    //             item.index = index + 1;
    //         });
    //         $("#currpage2").html(pageIndex);
    //         if (totalNums % pageSize == 0) {
    //             var pageTatal = totalNums / pageSize
    //         } else {
    //             var pageTatal = parseInt(totalNums / pageSize + 1)
    //         }
    //         $("#spanTotalNums2").html(pageTatal)
    //         var PageConfig = {
    //             pageNum: pageTatal, //总页数
    //             nowPage: pageIndex, //当前页
    //             lastPage: true, //上一页按钮
    //             nextPage: true, //下一页按钮
    //             firstPage: 1, //首页按钮
    //             tailPage: 5, //尾页按钮
    //             jumpPage: true //跳页框
    //         }
    //         $("#page2").html("");
    //         var listPage = new Pages('page2',PageConfig,function(){
    //             var nowPage = this.nowPage;
    //             allMassesTip1(nowPage)
    //         });
    //         loadTemplateData(data, $("#tAllMassesTip"), $("#allMassesTip"));
    //     }
    // });
};


function allMassesTip1(pageIndex) {
    pageIndex = pageIndex;
    var pageSize = 8;
    var DATA = {"dataList":[{"id":"1","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/10/10"},{"id":"2","reportTitle":"拐卖儿童","reportContent":"福建，江苏等地跨省拐卖儿童案","reportTime":"2016/8/10"},{"id":"3","reportTitle":"涉恐谣言","reportContent":"云南，江苏等地跨省涉恐谣言案","reportTime":"2015/12/10"},{"id":"4","reportTitle":"拐卖儿童","reportContent":"一起涉云南，江苏等地跨省拐卖儿童案","reportTime":"2016/9/10"},{"id":"5","reportTitle":"爆炸物品","reportContent":"一起涉云南，江苏等地跨省爆炸物品案","reportTime":"2016/8/10"},{"id":"6","reportTitle":"拐卖儿童","reportContent":"山东，江苏等地跨省拐卖儿童案","reportTime":"2015/11/9"},{"id":"7","reportTitle":"盗窃","reportContent":"一起涉云南，江苏等地跨省盗窃案","reportTime":"2016/1/1"}],"totalPages":1,"totalCount":7,"currentPage":"1"}
    var totalNums = DATA.totalCount;
    var pageTatal = DATA.totalPages;
    var data = DATA.dataList;
    $("#currpage2").html(pageIndex);

    $("#spanTotalNums2").html(pageTatal)
    loadTemplateData(data, $("#tAllMassesTip"), $("#allMassesTip"));
    // $.ajax({
    //     type: 'get',
    //     url: baseUrl + "/detail/searchPeoplePage?pageIndex=" + pageIndex + "&pageSize=" + pageSize + "&time=" + timeData,
    //     success: function (data) {
    //         var totalNums = data.totalCount;
    //         var pageTatal = data.totalPages;
    //         data = data.dataList;
    //         $("#currpage2").html(pageIndex);
    //
    //         $("#spanTotalNums2").html(pageTatal)
    //         loadTemplateData(data, $("#tAllMassesTip"), $("#allMassesTip"));
    //     }
    // });
};

function tonewpagenum2() {
    var num1 = $("#writepagenum2").val();
    if(num1==""){   return;  };
    var num=parseInt(num1);
    allMassesTip1(num-1);
    var obj = $("#page2").children();
    for (var i = 1; i < obj.length - 1; i++) {
        obj[i].style.backgroundColor = "#061e46";
        obj[i].style.color = "#91a0ad";
    }
    ;
    if (num < 1 || num > obj.length - 2) {
        return
    }
    ;
    obj.eq(num).css({"backgroundColor": "#0085f5", "color": "#FFF"});
};


function initPagination1(id, totalNums, pageSize, start, end) {

    $("#" + id).pagination(totalNums, {
        num_edge_entries: start, //边缘页数
        num_display_entries: end, //主体页数
        callback: allMassesTip1,    //鼠标点击
        items_per_page: pageSize
    });
}

function cityWarningRanking(forewarnType, importantArea, areaId) {
    var data = [{"areaName":"辽宁","forewarnNum":"4"},{"areaName":"天津","forewarnNum":"3"},{"areaName":"江苏","forewarnNum":"3"},{"areaName":"河北","forewarnNum":"3"},{"areaName":"内蒙古","forewarnNum":"2"},{"areaName":"北京","forewarnNum":"2"},{"areaName":"吉林","forewarnNum":"2"},{"areaName":"山西","forewarnNum":"2"},{"areaName":"黑龙江","forewarnNum":"1"}]
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
};


function searchCriteria() {
    var data = {"area":["学校","医院","政府","教堂"],"name":[{"code":210000,"pinyin":"liaoning","region":"辽宁省"},{"code":110000,"pinyin":"beijing","region":"北京"},{"code":130000,"pinyin":"hebei","region":"河北省"},{"code":320000,"pinyin":"jiangsu","region":"江苏省"},{"code":230000,"pinyin":"heilongjiang","region":"黑龙江省"},{"code":220000,"pinyin":"jilin","region":"吉林省"},{"code":150000,"pinyin":"neimenggu","region":"内蒙古自治区"},{"code":120000,"pinyin":"tianjin","region":"天津"},{"code":140000,"pinyin":"shanxi","region":"山西省"},{"code":310000,"pinyin":"shanghai","region":"上海"},{"code":330000,"pinyin":"zhejiang","region":"浙江省"},{"code":340000,"pinyin":"anhui","region":"安徽省"},{"code":350000,"pinyin":"fujian","region":"福建省"},{"code":360000,"pinyin":"jiangxi","region":"江西省"},{"code":370000,"pinyin":"shandong","region":"山东省"},{"code":410000,"pinyin":"henan","region":"河南省"},{"code":420000,"pinyin":"hubei","region":"湖北省"},{"code":430000,"pinyin":"hunan","region":"湖南省"},{"code":440000,"pinyin":"guangdong","region":"广东省"},{"code":450000,"pinyin":"guangxi","region":"广西壮族自治区"},{"code":460000,"pinyin":"hainan","region":"海南省"},{"code":500000,"pinyin":"chongqing","region":"重庆"},{"code":510000,"pinyin":"sichuan","region":"四川省"},{"code":520000,"pinyin":"guizhou","region":"贵州省"},{"code":530000,"pinyin":"yunnan","region":"云南省"},{"code":540000,"pinyin":"xizang","region":"西藏自治区"},{"code":610000,"pinyin":"shanxi","region":"陕西省"},{"code":620000,"pinyin":"gansu","region":"甘肃省"},{"code":630000,"pinyin":"qinghai","region":"青海省"},{"code":640000,"pinyin":"ningxia","region":"宁夏回族自治区"},{"code":650000,"pinyin":"xinjiang","region":"新疆维吾尔自治区"},{"code":710000,"pinyin":"taiwan","region":"台湾"},{"code":810000,"pinyin":"xianggang","region":"香港特别行政区"},{"code":820000,"pinyin":"aomen","region":"澳门特别行政区"}],"type":["谣言","极端言论","制爆","暴恐视频","制枪","越境","其它"]};
    var dataarea = data.area;
    var dataname = data.name;
    var datatype = data.type;
    loadTemplateData(dataarea, $("#tDataArea"), $("#dataArea"));
    loadTemplateData(dataname, $("#tDataName"), $("#dataName"));
    loadTemplateData(datatype, $("#tDataType"), $("#dataType"));
    initSelected();   //初始化下拉菜单
};


function initSelected() {

    $(".select").on("click", function (event) {
        $(".select .selectContent").slideUp();


        if($(this).find(".selectContent").css("display")=="none"){
            $(this).find(".selectContent").slideDown();
        }else{
            $(this).find(".selectContent").slideUp();
        };
        var event = event ? event : window.event;
        event.stopPropagation();

    });

    $(".select li a").on("click", function () {

        var value = $(this).html();
        $(this).parent().parent().parent().parent().find(".val").html(value);
        var newAreaId = $(this).attr("data-Code");
        if (newAreaId != undefined) {
            areaId = newAreaId;

        }
        ;

        var newJsonName = $(this).attr("data-Pinyin");
        if (newJsonName != undefined) {
            jsonName = newJsonName;
        }
        ;


        forewarnType = $("#forewarnType").html();


        importantArea = $("#importantArea").html();
        if (importantArea == "全部") {
            importantArea = ""
        }
        ;

        if (forewarnType == "全部") {
            forewarnType = ""
        }
        ;
        if (jsonName == "china") {
            jsonName = "";
        }


        middleMap(areaId, forewarnType, importantArea, jsonName);
        cityWarningRanking(forewarnType, importantArea, areaId);

        allInitEarlyWarningType(areaId, importantArea);


    });

    $(document).on("click", function (e) {
        $(".selectContent").slideUp();
    })
}
function loadTemplateData(data, $tcontainer, $container) {    //handlebars模板

    var context = {data: data};
    var source = $tcontainer.html();
    var template = Handlebars.compile(source);
    $container.html(template(context));
};








