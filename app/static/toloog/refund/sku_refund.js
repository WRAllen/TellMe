/*Dashboard Init*/
 
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	if($('#morris_area_chart').length > 0)
        // Area Chart
        Morris.Area({
            element: 'morris_area_chart',
            data: total,
            xkey: '日期',
            ykeys: sku_lable,
            labels: sku_lable,
            pointSize: 0,
            pointStrokeColors:piecolor,
            behaveLikeLine: true,
            gridLineColor: '#878787',
            lineWidth: 0,
            smooth: true,
            hideHover: 'auto',
            lineColors: piecolor,
            resize: true,
            gridTextColor:'#878787',
            gridTextFamily:"Roboto",
            parseTime: false
        });
})