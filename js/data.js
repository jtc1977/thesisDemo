'use strict';

var chartDemo =  chartDemo ? chartDemo : {};

chartDemo.data = {
    'shoulder' : [{
        t: '12:21:25', a: 20, b:15 
    },{ 
        t: '12:21:36', a: 13, b: 2 
    },{ 
        t: '12:21:45', a: 45, b: 30 
    },{
        t: '12:21:50', a: 3, b:4 
    },{
        t: '12:21:57', a: 11, b: 22 
}],
    
    'knee' : [
        { t: '12:21:25', a: 41, b:43 },
        { t: '12:21:36', a: 3, b: 16 },
        { t: '12:21:45', a: 22, b: 12 },
        { t: '12:21:50', a: 17, b:16 },
        { t: '12:21:57', a: 8, b: 1 }
],
    
    'elbow' : [
        { t: '12:21:25', a: 5, b:55 },
        { t: '12:21:36', a: 1, b: 16 },
        { t: '12:21:45', a: 10, b: 30 },
        { t: '12:21:50', a: 48, b:6 },
        { t: '12:21:57', a: 18, b: 19 }
    ]
}