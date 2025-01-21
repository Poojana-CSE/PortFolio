const xvalue=['C','C++','JAVA','Python'];
const yvalue=[80,80,70,50];
const barcolor = ["rgb(162, 213, 242)","rgb(211, 249, 216)","rgb(255, 204, 203)","rgb(255, 235, 153)"];
const layout={title:"Tools"}
const data=[{labels:xvalue,values:yvalue,type:'pie',marker:{colors:barcolor},hole:.1}];
Plotly.newPlot('lang',data,layout);