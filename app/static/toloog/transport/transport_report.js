/*Chartjs Init*/

$( document ).ready(function() {
	var chartdata = chart_data
	var chartlabel = chart_label

	var donutdata = donut_data;
	var donutcolor = donut_color;
	
	if( $('#chart_1').length > 0 ){
		var ctx1 = document.getElementById("chart_1").getContext("2d");
		var data1 = {
			labels: chartlabel,
			datasets: chartdata,
		};
		
		var areaChart = new Chart(ctx1, {
			type:"line",
			data:data1,
			
			options: {
				tooltips: {
					mode:"label"
				},
				elements:{
					point: {
						hitRadius:90
					}
				},
				
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "#878787",
						},
						ticks: {
							fontFamily: "Roboto",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "#878787",
						},
						ticks: {
							fontFamily: "Roboto",
							fontColor:"#878787"
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				}
				
			}
		});
	}
    
	if($('#morris_donut_chart').length > 0) {
		// Donut Chart
		Morris.Donut({
			element: 'morris_donut_chart',
			data: donutdata,
			colors: donutcolor,
			resize: true,
			labelColor: '#878787',
		});
		$("div svg text").attr("style","font-family: Roboto").attr("font-weight","400");
	}
});