function show_pie(pie_box, ids, chartid, size_keys, size_values, title_txt){
    $('.'+pie_box).hide()
    $('#'+ids).show()
    $('#bg_box').show()
    var ftreason_data = []
    for(var i=0;i<size_keys.length;i++){
        var res = { name: size_keys[i], y: size_values[i]}
        ftreason_data.push(res)
    }        
    var titl01 = title_txt
    set_piedata(chartid, titl01, ftreason_data)
    function set_piedata(elem, tiltxt, piedata){
        $(function(){
          var pieColors = [
                   'rgba(0, 162, 233, 1)',
                    'rgba(0, 155, 76, 1)',
                    'rgba(230, 33, 41, 1)',
                    'rgba(288, 0, 130, 1)',
                    'rgba(176, 75, 135, 1)',
                    'rgba(240, 133, 25, 1)',
                    'rgba(244, 179, 179, 1)',
                    'rgba(167, 156, 203, 1)',
                    'rgba(117, 143, 200, 1)',
                    'rgba(124, 111, 176, 1)',
                    'rgba(146, 136, 177, 1)',
                    'rgba(0, 143, 215, 1)',
                    'rgba(160, 217, 246, 1)',
                    'rgba(86, 170, 183, 1)',
                    'rgba(166, 212, 174, 1)',
                    'rgba(188, 199, 116, 1)',
                    'rgba(172,206, 34, 1)',
                    'rgba(217, 228, 131, 1)',
                    'rgba(182, 178, 129, 1)',
                    'rgba(222,213, 114, 1)',
                    'rgba(213, 153, 97, 1)',
                    'rgba(230, 29, 76, 1)',
                    'rgba(239, 135, 129, 1)',
                    'rgba(179, 113, 157, 1)',
                    'rgba(167, 33, 133, 1)',
                ]

        // Build the chart
        Highcharts.chart(elem, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: tiltxt
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: pieColors,
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 4
                }
              }
            }
          },
          series: [{
            name: '占比',
            data: piedata
          }]
        });
        $('.highcharts-credits').hide()
    })
          
    }

}