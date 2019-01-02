/*Chartjs Init*/

$( document ).ready(function() {
    "use strict";

    if( $('#chart_ftreason').length > 0 ){
        var ctx6 = document.getElementById("chart_ftreason").getContext("2d");
        var data6 = {
             labels: fsrs_keys,
        datasets: [
            {
                data: fsrs_values,
                backgroundColor: color,
                hoverBackgroundColor: color
            }]
        };
        
        var pieChart  = new Chart(ctx6,{
            type: 'pie',
            data: data6,
            options: {
                animation: {
                    duration:   3000
                },
                responsive: true,
                legend: {
                    labels: {
                    fontFamily: "Roboto",
                    fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        });
    }

        if( $('#chart_sdreason').length > 0 ){
        var ctx6 = document.getElementById("chart_sdreason").getContext("2d");
        var data6 = {
             labels: sdrs_keys,
        datasets: [
            {
                data: sdrs_values,
                backgroundColor: color,
                hoverBackgroundColor: color
            }]
        };
        
        var pieChart  = new Chart(ctx6,{
            type: 'pie',
            data: data6,
            options: {
                animation: {
                    duration:   3000
                },
                responsive: true,
                legend: {
                    labels: {
                    fontFamily: "Roboto",
                    fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        });
    }

    if( $('#chart_color').length > 0 ){
        var ctx6 = document.getElementById("chart_color").getContext("2d");
        var data6 = {
             labels: color_keys,
        datasets: [
            {
                data: color_values,
                backgroundColor: color,
                hoverBackgroundColor: color
            }]
        };
        
        var pieChart  = new Chart(ctx6,{
            type: 'pie',
            data: data6,
            options: {
                animation: {
                    duration:   3000
                },
                responsive: true,
                legend: {
                    labels: {
                    fontFamily: "Roboto",
                    fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        });
    }
    if( $('#chart_size').length > 0 ){
        var ctx6 = document.getElementById("chart_size").getContext("2d");
        var data6 = {
             labels: size_keys,
        datasets: [
            {
                data: size_values,
                backgroundColor: color,
                hoverBackgroundColor: color
            }]
        };
        
        var pieChart  = new Chart(ctx6,{
            type: 'pie',
            data: data6,
            options: {
                animation: {
                    duration:   3000
                },
                responsive: true,
                legend: {
                    labels: {
                    fontFamily: "Roboto",
                    fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        });
    }

});