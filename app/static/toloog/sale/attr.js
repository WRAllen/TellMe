/*Chartjs Init*/

$( document ).ready(function() {
    "use strict";
    
    $('#datable_color').DataTable();
    $('#datable_size').DataTable();
    $('#datable_country').DataTable();
    $('#datable_store').DataTable();
    $('#datable_market').DataTable();

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

        if( $('#chart_country').length > 0 ){
        var ctx6 = document.getElementById("chart_country").getContext("2d");
        var data6 = {
             labels: country_keys,
        datasets: [
            {
                data: country_values,
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


        if( $('#chart_store').length > 0 ){
        var ctx6 = document.getElementById("chart_store").getContext("2d");
        var data6 = {
             labels: store_keys,
        datasets: [
            {
                data: store_values,
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

        if( $('#chart_market').length > 0 ){
        var ctx6 = document.getElementById("chart_market").getContext("2d");
        var data6 = {
             labels: market_keys,
        datasets: [
            {
                data: market_values,
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