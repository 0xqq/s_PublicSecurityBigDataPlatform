var areaId="" ,startTime="",endTime="",warnId="",jsonName="";
$(document).ready(function () {
    $("#txtDate").calendar({callback:_callback});
    $("#txtDate2").calendar({callback:_callback});
    initpie_left1(startTime,endTime,areaId);                             // 预警信息总览饼图初始化
    initpie_right1();                               //发案率排行饼图初始化
    inintColumn_right1();                             //发案率同期比价初始化
    middleMap(areaId,"","","","",jsonName);    //首页监控台初始化
    timeInitSelected();                //时间下拉菜单搜索框
    initSelected();                   // 下拉菜单初始化
    initType();         //初始化类型
    searchCriteria();                 //搜索条件初始化

    allWarningInformation(startTime,endTime,areaId);         //预警信息总览


})
function _callback(){
    $(".select .selectContent").slideUp();
var val1=$("#txtDate").val();
 var val2=$("#txtDate2").val();
 var startTime=val1.replace(/-/ig,"/");
  var endTime=val2.replace(/-/ig,"/");
    var searchName=$("#searchContent").html();
    allWarningInformation(startTime,endTime,areaId);
    initpie_left1(startTime,endTime,areaId);
    allWarningInformation(startTime,endTime,areaId);
    middleMap(areaId,startTime,endTime,"",searchName,jsonName);
}

function toNewpage(typename,pId) {                                  //点击左侧表格做页面跳转

    switch (typename){
        case "经济犯罪" :
            window.open("html/InvolvedFunds.html?personId="+pId);
            break;
        case "涉恐犯罪" :
            window.open("html/antiTerroristParticulars.html?pId="+pId);
            break;
        default:
            break;


    }

}

function searchFn(e){
   if(e.which==13){
  var searchName=$("#searchContent").val();
  var startTime=$("#txtDate").val().replace(/-/ig,"/");
   var date=$("#txtDate2").val().replace(/-/ig,"/");
       var Type=$("#newDataType").html();

       middleMap(areaId,startTime,date,Type ,searchName,jsonName)

   };
};



function initSearchFn(data){

    middleMap(areaId,startTime,endTime,Type ,searchName,jsonName)

};



function allWarningInformation(startTime,endTime,areaId){
    var data = [{"personName":"艾合台木·吐合台木尼亚孜","grade":"A","typeName":"涉恐犯罪","pId":"1001","location":"和平区"},{"personName":"合台木","grade":"A","typeName":"涉恐犯罪","pId":"1002","location":"东城区"},{"personName":"吐合台木尼亚孜","grade":"B","typeName":"涉恐犯罪","pId":"1003","location":"石家庄市"},{"personName":"台木格","grade":"B","typeName":"涉恐犯罪","pId":"1004","location":"南京市"},{"personName":"吐合台木","grade":"B","typeName":"涉恐犯罪","pId":"1005","location":"宜兴市"}]
    loadTemplateData(data, $("#tAllWarningInformation"), $("#allWarningInformation"));
};

function initpie_left1(startTime,endTime,areaId){
    var data=[{"name":"其它","value":"6"},{"name":"涉恐犯罪","value":"16"},{"name":"经济犯罪","value":"33"}];
    pie_left1(data)
};



//  左侧饼图

function pie_left1(data) {

    var newData=[];
    var colors=["#0232ac","#ffb500","#e21b10"];
    $(data).each(function(index,item){
        var newobj={
            value: item.value, name: item.name, itemStyle: {    //数据填充
                normal: {
                    color: colors[index],          //颜色填充
                }
            }
        };
        newData.push(newobj);
    });
$("#indexchart1").html("");
    var myChart = echarts.init(document.getElementById('indexchart1'));
    //var option = {
    //    backgroundColor: '#02153f',
    //    tooltip: {
    //        show: true,
    //        formatter: "{d}%"
    //
    //    },
    //    calculable: true,
    //    series: [
    //
    //        {
    //            name: '',
    //            type: 'pie',
    //            center: ['50%', '50%'],
    //            radius: [40, 60],
    //            labelLine: {
    //                normal: {
    //                    length: 10,
    //                    length2: 10,
    //
    //                }
    //            },
    //            label: {
    //                normal: {
    //                    position: 'outside',
    //                    show: true,
    //                    formatter: "{d}%\n{b}",
    //                    textStyle: {
    //                        fontSize: 12,
    //                        color: "#fff"
    //                    }
    //                }
    //            },
    //            data:newData
    //        },
    //
    //    ]
    //};

    var option = {
        backgroundColor: '#02153f',
        tooltip: {

            show: true,
            formatter: "{d}%"

        },
        color: ["#0232ac","#ffb500","#e21b10"],
        tooltip: {
            trigger: 'item',
            formatter: "{a}  <br/>{b} : {c}({d}%)"
        },
        calculable: false,
        series: [  {
                        name: '',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: [40, 60],
                        labelLine: {
                            normal: {
                                length: 10,
                                length2: 10,

                            }
                        },
            labelLine: {
                normal: {
                    textStyle: {
                        fontSize: 10
                    },
                    length: 20,
                    length2: 0,
                    lineStyle: {
                        width: 3
                    }
                }
            },
            label: {
                                normal: {
                                    position: 'outside',
                                    show: true,
                                    formatter: "{d}%\n{b}",
                                    textStyle: {
                                        fontSize: 12,
                                        color: "#fff"
                                    }
                                }
                            },
            data:newData
        }]
    };

    myChart.setOption(option);


};


function initpie_right1(){
    pie_right1([])
};


//  右侧饼图

function pie_right1(data) {
    var newData=[];

    $(data).each(function(index,item){
        var newobj={
            value: item.num, name: item.name, itemStyle: {    //数据填充
                normal: {
                             //颜色填充
                }
            }
        };
        newData.push(newobj);
    });
    var myChart = echarts.init(document.getElementById('indexchart2'));


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
            radius: [71, 72],
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
            radius: [62, 63],
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
            name: '案件个数',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [30, 60],
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
                    length: 20,
                    length2: 0,
                    lineStyle: {
                        width: 3
                    }
                }
            },
            data:newData
        }]
    };

    myChart.setOption(option);


};


function inintColumn_right1(){
    var data={"yAxis":{"thisYear":[],"lastYear":[]}};
    column_right1(data)
};


function inintColumn_right2(areaId){

    $.ajax({
        type: 'get',
        url: baseUrl + "/Index/getdetail?areaId="+areaId,
        success: function (data) {

            var data=data.datalist;

            if (data == null || data == "" || data == undefined) {
                return;
            };

            column_right1(data)

        }
    });
};

//右侧柱状图
function column_right1(data) {
$("#indexchart3").html("");
    var xArr=["1月","2月","3月","4月","5月","6月"];
    var yAxis=data.yAxis;
    var thisYearData=yAxis.thisYear;
    var lastYearData=yAxis.lastYear;
    var myChart = echarts.init(document.getElementById('indexchart3'));


    var option = {
        backgroundColor: '#02153f',
        tooltip: {},
        grid: {
            bottom: 30,
            left: 40,
            top: 55,
            right: 10,
        },
        legend:{
            show:true,
            data:["今年案发件数","去年案发件数"],
            textStyle:{
                color:'#FFF',
            }
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
            max: 15000,
            Interval: 2000,
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
                    type: "dashed"
                }
            },
            axisLabel: {
                formatter: '{value}',
                margin: 5,
                textStyle: {
                    color: '#FFF' //Y轴刻度颜色
                },
                inside: false,
                formatter: function (v) {
                    return v + '\n\n';
                }
            }
        },
        series: [{
            name: '今年案发件数',
            type: 'bar',
            data: thisYearData,
            itemStyle: {
                normal: {
                    color: "#e85a2e" //柱状体颜色
                }
            },
            barWidth: "8" //柱状体宽度
        },
            {
                name: '去年案发件数',
                type: 'bar',
                data: lastYearData,
                itemStyle: {
                    normal: {
                        color: "red" //柱状体颜色
                    }
                },
                barWidth: "8" //柱状体宽度
            }
]
    };


    myChart.setOption(option);


}


function middleMap(areaId,startTime,endTime,Type ,searchName,jsonName) {
$("#main").html("");
var data = {"listTerror":[{"longitude":"123.406662","latitude":"41.788074","terrorTime":"2016/5/12","areaId":"210102","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"116.475924","latitude":"39.938673","terrorTime":"2016/5/12","areaId":"110101","forewarnType":"极端言论","importantArea":"医院","personName":null},{"longitude":"114.502464","latitude":"38.045475","terrorTime":"2016/6/12","areaId":"130100","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"118.76741","latitude":"32.041546","terrorTime":"2016/6/12","areaId":"320100","forewarnType":"制爆","importantArea":"政府","personName":null},{"longitude":"119.820541","latitude":"31.364384","terrorTime":"2016/6/12","areaId":"320282","forewarnType":"暴恐视频","importantArea":"教堂","personName":null},{"longitude":"123.429092","latitude":"41.796768","terrorTime":"2016/6/12","areaId":"210100","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"126.642464","latitude":"45.756966","terrorTime":"2016/6/12","areaId":"230100","forewarnType":"制枪","importantArea":"学校","personName":null},{"longitude":"125.324501","latitude":"43.886841","terrorTime":"2016/8/6","areaId":"220100","forewarnType":"越境","importantArea":"医院","personName":null},{"longitude":"125.145348","latitude":"42.902691","terrorTime":"2016/6/12","areaId":"220400","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"123.921112","latitude":"41.875957","terrorTime":"2016/8/8","areaId":"210400","forewarnType":"极端言论","importantArea":"政府","personName":null},{"longitude":"111.685966","latitude":"40.826225","terrorTime":"2016/6/12","areaId":"150102","forewarnType":"谣言","importantArea":"教堂","personName":null},{"longitude":"111.665428","latitude":"40.799419","terrorTime":"2016/8/10","areaId":"150104","forewarnType":"制爆","importantArea":"学校","personName":null},{"longitude":"117.190186","latitude":"39.125595","terrorTime":"2016/6/12","areaId":"120100","forewarnType":"暴恐视频","importantArea":"学校","personName":null},{"longitude":"117.164146","latitude":"39.120476","terrorTime":"2016/6/12","areaId":"120104","forewarnType":"越境","importantArea":"医院","personName":null},{"longitude":"115.044884","latitude":"38.027477","terrorTime":"2016/8/7","areaId":"130183","forewarnType":"制枪","importantArea":"学校","personName":null},{"longitude":"112.549248","latitude":"37.857014","terrorTime":"2016/6/12","areaId":"140100","forewarnType":"越境","importantArea":"政府","personName":null},{"longitude":"117.057961","latitude":"39.376926","terrorTime":"2016/8/9","areaId":"120114","forewarnType":"其它","importantArea":"政府","personName":null},{"longitude":"114.685783","latitude":"38.344769","terrorTime":"2016/8/7","areaId":"130184","forewarnType":"其它","importantArea":"学校","personName":null},{"longitude":"113.295258","latitude":"40.090309","terrorTime":"2016/8/9","areaId":"320100","forewarnType":"其它","importantArea":"医院","personName":null},{"longitude":"116.195442","latitude":"39.9146","terrorTime":"2016/8/9","areaId":"110107","forewarnType":"其它","importantArea":"教堂","personName":null},{"longitude":"113.113556","latitude":"36.191113","terrorTime":"2016/8/9","areaId":"140400","forewarnType":"其它","importantArea":"学校","personName":null},{"longitude":"122.235153","latitude":"40.667431","terrorTime":"2016/8/9","areaId":"210800","forewarnType":"其它","importantArea":"教堂","personName":null}],"listEconomic":[{"count":0,"areaName":"杭州市","areaCode":"330100","longitude":"120.15358","latitude":"30.287458"},{"count":0,"areaName":"宜兴市","areaCode":"320282","longitude":"119.820541","latitude":"31.364384"},{"count":0,"areaName":"宝山区","areaCode":"310113","longitude":"121.489937","latitude":"31.398895"},{"count":0,"areaName":"闸北区","areaCode":"310108","longitude":"121.465691","latitude":"31.25318"},{"count":0,"areaName":"静安区","areaCode":"310106","longitude":"121.448227","latitude":"31.229004"},{"count":0,"areaName":"长宁区","areaCode":"310105","longitude":"121.422203","latitude":"31.218122"},{"count":0,"areaName":"黄浦区","areaCode":"310101","longitude":"121.490318","latitude":"31.222771"},{"count":0,"areaName":"依兰县","areaCode":"230123","longitude":"129.565598","latitude":"46.315105"},{"count":0,"areaName":"哈尔滨市","areaCode":"230100","longitude":"126.642464","latitude":"45.756966"},{"count":0,"areaName":"磐石市","areaCode":"220284","longitude":"126.059929","latitude":"42.942474"},{"count":0,"areaName":"农安县","areaCode":"220122","longitude":"125.175285","latitude":"44.431259"},{"count":0,"areaName":"南关区","areaCode":"220102","longitude":"125.337234","latitude":"43.890236"},{"count":0,"areaName":"沈阳市","areaCode":"210100","longitude":"123.429092","latitude":"41.796768"},{"count":0,"areaName":"包头市","areaCode":"150200","longitude":"109.840408","latitude":"40.658169"},{"count":0,"areaName":"呼和浩特市","areaCode":"150100","longitude":"111.670799","latitude":"40.81831"},{"count":0,"areaName":"晋城市","areaCode":"140500","longitude":"112.851273","latitude":"35.497555"},{"count":0,"areaName":"太原市","areaCode":"140100","longitude":"112.549248","latitude":"37.857014"},{"count":0,"areaName":"邯郸市","areaCode":"130400","longitude":"114.490685","latitude":"36.612274"},{"count":0,"areaName":"唐山市","areaCode":"130200","longitude":"118.175392","latitude":"39.635113"},{"count":0,"areaName":"晋州市","areaCode":"130183","longitude":"115.044884","latitude":"38.027477"},{"count":0,"areaName":"辛集市","areaCode":"130181","longitude":"115.217453","latitude":"37.929039"},{"count":0,"areaName":"南开区","areaCode":"120104","longitude":"117.164146","latitude":"39.120476"},{"count":0,"areaName":"和平区","areaCode":"120101","longitude":"117.195908","latitude":"39.118328"},{"count":0,"areaName":"昌平区","areaCode":"110114","longitude":"116.235909","latitude":"40.218086"},{"count":0,"areaName":"房山区","areaCode":"110111","longitude":"116.13916","latitude":"39.735535"},{"count":0,"areaName":"朝阳区","areaCode":"110105","longitude":"116.486412","latitude":"39.92149"},{"count":0,"areaName":"西城区","areaCode":"110102","longitude":"116.366791","latitude":"39.91531"},{"count":0,"areaName":"东城区","areaCode":"110101","longitude":"116.418755","latitude":"39.917545"}],"entityEconomic":[{"count":0,"areaName":"杭州市","areaCode":"330100","longitude":"120.15358","latitude":"30.287458"},{"count":0,"areaName":"宜兴市","areaCode":"320282","longitude":"119.820541","latitude":"31.364384"},{"count":0,"areaName":"宝山区","areaCode":"310113","longitude":"121.489937","latitude":"31.398895"},{"count":0,"areaName":"闸北区","areaCode":"310108","longitude":"121.465691","latitude":"31.25318"},{"count":0,"areaName":"静安区","areaCode":"310106","longitude":"121.448227","latitude":"31.229004"},{"count":0,"areaName":"长宁区","areaCode":"310105","longitude":"121.422203","latitude":"31.218122"},{"count":0,"areaName":"黄浦区","areaCode":"310101","longitude":"121.490318","latitude":"31.222771"},{"count":0,"areaName":"依兰县","areaCode":"230123","longitude":"129.565598","latitude":"46.315105"},{"count":0,"areaName":"哈尔滨市","areaCode":"230100","longitude":"126.642464","latitude":"45.756966"},{"count":0,"areaName":"磐石市","areaCode":"220284","longitude":"126.059929","latitude":"42.942474"},{"count":0,"areaName":"农安县","areaCode":"220122","longitude":"125.175285","latitude":"44.431259"},{"count":0,"areaName":"南关区","areaCode":"220102","longitude":"125.337234","latitude":"43.890236"},{"count":0,"areaName":"沈阳市","areaCode":"210100","longitude":"123.429092","latitude":"41.796768"},{"count":0,"areaName":"包头市","areaCode":"150200","longitude":"109.840408","latitude":"40.658169"},{"count":0,"areaName":"呼和浩特市","areaCode":"150100","longitude":"111.670799","latitude":"40.81831"},{"count":0,"areaName":"晋城市","areaCode":"140500","longitude":"112.851273","latitude":"35.497555"},{"count":0,"areaName":"太原市","areaCode":"140100","longitude":"112.549248","latitude":"37.857014"},{"count":0,"areaName":"邯郸市","areaCode":"130400","longitude":"114.490685","latitude":"36.612274"},{"count":0,"areaName":"唐山市","areaCode":"130200","longitude":"118.175392","latitude":"39.635113"},{"count":0,"areaName":"晋州市","areaCode":"130183","longitude":"115.044884","latitude":"38.027477"},{"count":0,"areaName":"辛集市","areaCode":"130181","longitude":"115.217453","latitude":"37.929039"},{"count":0,"areaName":"南开区","areaCode":"120104","longitude":"117.164146","latitude":"39.120476"},{"count":0,"areaName":"和平区","areaCode":"120101","longitude":"117.195908","latitude":"39.118328"},{"count":0,"areaName":"昌平区","areaCode":"110114","longitude":"116.235909","latitude":"40.218086"},{"count":0,"areaName":"房山区","areaCode":"110111","longitude":"116.13916","latitude":"39.735535"},{"count":0,"areaName":"朝阳区","areaCode":"110105","longitude":"116.486412","latitude":"39.92149"},{"count":0,"areaName":"西城区","areaCode":"110102","longitude":"116.366791","latitude":"39.91531"},{"count":0,"areaName":"东城区","areaCode":"110101","longitude":"116.418755","latitude":"39.917545"}],"entityTerror":[{"longitude":"123.406662","latitude":"41.788074","terrorTime":"2016/5/12","areaId":"210102","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"116.475924","latitude":"39.938673","terrorTime":"2016/5/12","areaId":"110101","forewarnType":"极端言论","importantArea":"医院","personName":null},{"longitude":"114.502464","latitude":"38.045475","terrorTime":"2016/6/12","areaId":"130100","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"118.76741","latitude":"32.041546","terrorTime":"2016/6/12","areaId":"320100","forewarnType":"制爆","importantArea":"政府","personName":null},{"longitude":"119.820541","latitude":"31.364384","terrorTime":"2016/6/12","areaId":"320282","forewarnType":"暴恐视频","importantArea":"教堂","personName":null},{"longitude":"123.429092","latitude":"41.796768","terrorTime":"2016/6/12","areaId":"210100","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"126.642464","latitude":"45.756966","terrorTime":"2016/6/12","areaId":"230100","forewarnType":"制枪","importantArea":"学校","personName":null},{"longitude":"125.324501","latitude":"43.886841","terrorTime":"2016/8/6","areaId":"220100","forewarnType":"越境","importantArea":"医院","personName":null},{"longitude":"125.145348","latitude":"42.902691","terrorTime":"2016/6/12","areaId":"220400","forewarnType":"谣言","importantArea":"学校","personName":null},{"longitude":"123.921112","latitude":"41.875957","terrorTime":"2016/8/8","areaId":"210400","forewarnType":"极端言论","importantArea":"政府","personName":null},{"longitude":"111.685966","latitude":"40.826225","terrorTime":"2016/6/12","areaId":"150102","forewarnType":"谣言","importantArea":"教堂","personName":null},{"longitude":"111.665428","latitude":"40.799419","terrorTime":"2016/8/10","areaId":"150104","forewarnType":"制爆","importantArea":"学校","personName":null},{"longitude":"117.190186","latitude":"39.125595","terrorTime":"2016/6/12","areaId":"120100","forewarnType":"暴恐视频","importantArea":"学校","personName":null},{"longitude":"117.164146","latitude":"39.120476","terrorTime":"2016/6/12","areaId":"120104","forewarnType":"越境","importantArea":"医院","personName":null},{"longitude":"115.044884","latitude":"38.027477","terrorTime":"2016/8/7","areaId":"130183","forewarnType":"制枪","importantArea":"学校","personName":null},{"longitude":"112.549248","latitude":"37.857014","terrorTime":"2016/6/12","areaId":"140100","forewarnType":"越境","importantArea":"政府","personName":null},{"longitude":"117.057961","latitude":"39.376926","terrorTime":"2016/8/9","areaId":"120114","forewarnType":"其它","importantArea":"政府","personName":null},{"longitude":"114.685783","latitude":"38.344769","terrorTime":"2016/8/7","areaId":"130184","forewarnType":"其它","importantArea":"学校","personName":null},{"longitude":"113.295258","latitude":"40.090309","terrorTime":"2016/8/9","areaId":"320100","forewarnType":"其它","importantArea":"医院","personName":null},{"longitude":"116.195442","latitude":"39.9146","terrorTime":"2016/8/9","areaId":"110107","forewarnType":"其它","importantArea":"教堂","personName":null},{"longitude":"113.113556","latitude":"36.191113","terrorTime":"2016/8/9","areaId":"140400","forewarnType":"其它","importantArea":"学校","personName":null},{"longitude":"122.235153","latitude":"40.667431","terrorTime":"2016/8/9","areaId":"210800","forewarnType":"其它","importantArea":"教堂","personName":null}]}
    var terrorism=data.listTerror;
    if(data.listTerror==0){
        terrorism=data.entityTerror;
    };
    var economic=data.listEconomic;
    if(data.listEconomic.length==0){
        economic=data.entityEconomic
    }


    var Data = [];
    var terrorismData=[];
    var economicData=[];
    $(terrorism).each(function (index, item) {
        var dataObj = {
            name: item.forewarnType,
            typeName:terrorism,
            value: [item.longitude, item.latitude, 80],

        };
        terrorismData.push(dataObj);
    });
    //   Data.push(terrorismData)
    $(economic).each(function (index, item) {
        var dataObj1 = {
            name: item.count,
            typeName:economic,
            value: [item.longitude, item.latitude, 0],

        };
        economicData.push(dataObj1);
    });
    //   Data.push(economicData)
    if(Type==""||Type=="全部"){
        // Data=terrorismData.concat(economicData);
        Data.push(terrorismData);
        Data.push(economicData)



    };
    if(Type=="反恐"){

        Data.push(terrorismData);


    };
    if(Type=="经侦"){

        Data.push(economicData)


    }


    var chart = map_trander;
    chart({
        jsonName: jsonName,
        id: 'main',
        width: '',
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

function searchCriteria() {
    var res = {"dataList":[{"area":[{"area_name":"北京","pinyin":"beijing","area_code":110000,"short_name":"北京"},{"area_name":"天津","pinyin":"tianjin","area_code":120000,"short_name":"天津"},{"area_name":"河北省","pinyin":"hebei","area_code":130000,"short_name":"河北"},{"area_name":"山西省","pinyin":"shanxi","area_code":140000,"short_name":"山西"},{"area_name":"内蒙古自治区","pinyin":"neimenggu","area_code":150000,"short_name":"内蒙古"},{"area_name":"辽宁省","pinyin":"liaoning","area_code":210000,"short_name":"辽宁"},{"area_name":"吉林省","pinyin":"jilin","area_code":220000,"short_name":"吉林"},{"area_name":"黑龙江省","pinyin":"heilongjiang","area_code":230000,"short_name":"黑龙江"},{"area_name":"上海","pinyin":"shanghai","area_code":310000,"short_name":"上海"},{"area_name":"江苏省","pinyin":"jiangsu","area_code":320000,"short_name":"江苏"},{"area_name":"浙江省","pinyin":"zhejiang","area_code":330000,"short_name":"浙江"},{"area_name":"安徽省","pinyin":"anhui","area_code":340000,"short_name":"安徽"},{"area_name":"福建省","pinyin":"fujian","area_code":350000,"short_name":"福建"},{"area_name":"江西省","pinyin":"jiangxi","area_code":360000,"short_name":"江西"},{"area_name":"山东省","pinyin":"shandong","area_code":370000,"short_name":"山东"},{"area_name":"河南省","pinyin":"henan","area_code":410000,"short_name":"河南"},{"area_name":"湖北省","pinyin":"hubei","area_code":420000,"short_name":"湖北"},{"area_name":"湖南省","pinyin":"hunan","area_code":430000,"short_name":"湖南"},{"area_name":"广东省","pinyin":"guangdong","area_code":440000,"short_name":"广东"},{"area_name":"广西壮族自治区","pinyin":"guangxi","area_code":450000,"short_name":"广西"},{"area_name":"海南省","pinyin":"hainan","area_code":460000,"short_name":"海南"},{"area_name":"重庆","pinyin":"chongqing","area_code":500000,"short_name":"重庆"},{"area_name":"四川省","pinyin":"sichuan","area_code":510000,"short_name":"四川"},{"area_name":"贵州省","pinyin":"guizhou","area_code":520000,"short_name":"贵州"},{"area_name":"云南省","pinyin":"yunnan","area_code":530000,"short_name":"云南"},{"area_name":"西藏自治区","pinyin":"xizang","area_code":540000,"short_name":"西藏"},{"area_name":"陕西省","pinyin":"shanxi","area_code":610000,"short_name":"陕西"},{"area_name":"甘肃省","pinyin":"gansu","area_code":620000,"short_name":"甘肃"},{"area_name":"青海省","pinyin":"qinghai","area_code":630000,"short_name":"青海"},{"area_name":"宁夏回族自治区","pinyin":"ningxia","area_code":640000,"short_name":"宁夏"},{"area_name":"新疆维吾尔自治区","pinyin":"xinjiang","area_code":650000,"short_name":"新疆"},{"area_name":"台湾","pinyin":"taiwan","area_code":710000,"short_name":"台湾"},{"area_name":"香港特别行政区","pinyin":"xianggang","area_code":810000,"short_name":"香港"},{"area_name":"澳门特别行政区","pinyin":"aomen","area_code":820000,"short_name":"澳门"}],"type":[{"forewarnId":"3","typeName":"传销"},{"forewarnId":"5","typeName":"洗钱"},{"forewarnId":"1","typeName":"诈骗"},{"forewarnId":"2","typeName":"非法集资"},{"forewarnId":"4","typeName":"高利贷"}]}]}
    var data = res.dataList[0];
    var dataarea = data.area;
    var datatype = data.type;

    loadTemplateData(dataarea, $("#tDataArea"), $("#dataArea"));
    SearchcInitSelected();    //初始化下拉菜单
};

function initType(){
    var data = [{"type_name":"反恐"},{"type_name":"经侦"}]
    loadTemplateData(data, $("#tDataType"), $("#dataType"));
}

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
        var newAreaId=$(this).attr("data-Code");
        if(newAreaId!=undefined){areaId=newAreaId;};
        var newJsonName=$(this).attr("data-Pinyin");

        if(newJsonName!=undefined){jsonName=newJsonName;};

        $(this).parent().parent().parent().parent().find(".val").html(value);
        var Type=$("#newDataType").html();
        if(Type=="全部"){
            Type =""};
        if(jsonName=="china"){
            jsonName="";
        };
        var val1=$("#txtDate").val();
        var val2=$("#txtDate2").val();
        var startTime=val1.replace(/-/ig,"/");
        var endTime=val2.replace(/-/ig,"/");
        var searchName=$("#searchContent").val();
        allWarningInformation(startTime,endTime,areaId);
        initpie_left1(startTime,endTime,areaId);
        allWarningInformation(startTime,endTime,areaId);
        middleMap(areaId,startTime,endTime,Type ,searchName,jsonName);
        if(areaId!=""){
            inintColumn_right2(areaId);
        }else{
            inintColumn_right1()
        }



    });

    $(document).on("click", function (e) {
        $(".indexSearchC .selectContent").slideUp();
    });

};


function timeInitSelected() {

    var thisYear = (new Date()).getFullYear();
    var lastYear = (new Date()).getFullYear()-1;
    var thisMonth= (new Date()).getMonth()+1;
    var thisDay=(new Date()).getDate();
    $("#txtDate").val(lastYear+"-"+thisMonth+"-"+thisDay);
    $("#txtDate2").val(thisYear+"-"+thisMonth+"-"+thisDay);



};


function chang1(data){

}



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




