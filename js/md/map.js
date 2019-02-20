/*
 * created by zhengshasha on 2016/8/17
 * */
(function() {
    window.CreateMap = function(id, points,centerLo,centerLa,detailAddress,cityName) {

    	 var map = new BMap.Map(id,{
             enableMapClick:false
         });
        map.centerAndZoom(new BMap.Point(centerLo,centerLa), 13);
        if(detailAddress&&cityName){
            var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上，并调整地图视野
            myGeo.getPoint(detailAddress, function(point){
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));
                }
            }, cityName);
        }

        map.enableScrollWheelZoom();
        map.setMapStyle({
            style: "midnight"
        });
        map.addControl(new BMap.OverviewMapControl()); //添加缩略地图控件
if(!points){return};

        a = function() {
            map.clearOverlays(); //清除地图上所有的覆盖物
            var driving = new BMap.DrivingRoute(map); //创建驾车实例

            for(var i=0; i<points.myp.length-1;i++){

                driving.search(points.myp[i], points.myp[i+1])//    创建驾车点
            };

            //driving.search(points.myp[0], points.myp[1]); //第一个驾车搜索
            //driving.search(points.myp[1], points.myp[2]); //第二个驾车搜索
            driving.setSearchCompleteCallback(function() {
                var pts = driving.getResults().getPlan(0).getRoute(0).getPath(); //通过驾车实例，获得一系列点的数组

                var polyline = new BMap.Polyline(pts);

                map.addOverlay(polyline);

                var myicon = new BMap.Icon("../images/localtionIcon.png", new BMap.Size(20, 45));

                //var marker1 = new BMap.Marker(points.myp[0], {
                //    icon: myicon
                //});
                //var marker2 = new BMap.Marker(points.myp[1], {
                //    icon: myicon
                //});
                //var marker3 = new BMap.Marker(points.myp[2], {
                //    icon: myicon
                //});
                //
                //
                //map.addOverlay(marker1);
                //map.addOverlay(marker2);
                //map.addOverlay(marker3);

                for(var i=0; i<points.myp.length;i++){
                    var marker= new BMap.Marker(points.myp[i], {
                          icon: myicon,

                        });
                    map.addOverlay(marker);

                }

                //
                //      var lab1 = new BMap.Label("起点",{position:myP1});        //创建3个label
                //      var lab2 = new BMap.Label("途径点",{position:myP2});
                //      var lab3 = new BMap.Label("终点",{position:myP3});
                //      map.addOverlay(lab1);
                //      map.addOverlay(lab2);
                //      map.addOverlay(lab3);

                setTimeout(function() {
                    map.setViewport(points.myp); //调整到最佳视野
                }, 1000);

            });
        }();

        b = function() {
            map.clearOverlays(); //清除地图上所有的覆盖物
            var driving = new BMap.DrivingRoute(map); //创建驾车实例
            for(var i=0; i<points.Cmyp.length-1;i++){

                driving.search(points.Cmyp[i], points.Cmyp[i+1])//    创建驾车点
            };
            //driving.search(points.Cmyp[0], points.Cmyp[1]); //第一个驾车搜索
            //driving.search(points.Cmyp[1], points.Cmyp[2]); //第二个驾车搜索
            driving.setSearchCompleteCallback(function() {
                var pts = driving.getResults().getPlan(0).getRoute(0).getPath(); //通过驾车实例，获得一系列点的数组

                var polyline = new BMap.Polyline(pts);
                map.addOverlay(polyline);

                var youicon = new BMap.Icon("../images/localtionIcon1.png", new BMap.Size(30, 50));


                //var marker4 = new BMap.Marker(points.Cmyp[0], {
                //    icon: youicon
                //});
                //var marker5 = new BMap.Marker(points.Cmyp[1], {
                //    icon: youicon
                //});
                //var marker6 = new BMap.Marker(points.Cmyp[2], {
                //    icon: youicon
                //});
                //
                //
                //
                //map.addOverlay(marker4);
                //map.addOverlay(marker5);
                //map.addOverlay(marker6);
                //
                //      var lab1 = new BMap.Label("起点",{position:myP1});        //创建3个label
                //      var lab2 = new BMap.Label("途径点",{position:myP2});
                //      var lab3 = new BMap.Label("终点",{position:myP3});
                //      map.addOverlay(lab1);
                //      map.addOverlay(lab2);
                //      map.addOverlay(lab3);

                for(var i=0; i<points.Cmyp.length;i++){
                    var marker= new BMap.Marker(points.Cmyp[i], {
                        icon: youicon
                    });
                    map.addOverlay(marker);

                }



                setTimeout(function() {
                    map.setViewport(points.Cmyp); //调整到最佳视野
                }, 1000);


            });
        }();

    }

})(window)