'use strict';

var chartDemo = chartDemo ? chartDemo : {};

chartDemo.clear = function () {
    $("#myfirstchart").html("");
}

chartDemo.update = function(bodyPart) {

    chartDemo.clear();
    
    Morris.Line({
          // ID of the element in which to draw the chart.
          element: 'myfirstchart',
          // Chart data records -- each entry in this array corresponds to a point on
          // the chart.
          data: chartDemo.data[bodyPart],
          // The name of the data record attribute that contains x-values.
          xkey: 't',
          // A list of names of data record attributes that contain y-values.
          ykeys: ['a', 'b'],
          // Labels for the ykeys -- will be displayed when you hover over the
          // chart.
          //yLabelFormat: function(y){return y != Math.round(y)?'':y;},
          labels: ['left', 'right'],
          parseTime: false,
          postUnits: '°'
		
        });
}

$(document).ready(function() {
    chartDemo.clear();
});