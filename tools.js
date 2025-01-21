const xvalue=['Git','GitHub','Canva','VSCode'];
const yvalue=[70,80,90,85];
const barcolor = ["rgb(162, 213, 242)","rgb(211, 249, 216)","rgb(255, 204, 203)","rgb(255, 235, 153)"];
const layout={title:"Programming Languages"}
const data=[{labels:xvalue,values:yvalue,type:'pie',marker:{colors:barcolor},hole:.1}];
Plotly.newPlot('tool',data,layout);