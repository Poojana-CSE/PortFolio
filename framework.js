const xvalue=['MongoDB','Bootstrap'];
const yvalue=[80,75];
const barcolor = ["rgb(162, 213, 242)","rgb(211, 249, 216)"];
const layout={title:"Frame Works"}
const data=[{labels:xvalue,values:yvalue,type:'pie',marker:{colors:barcolor},hole:.1}];
Plotly.newPlot('fw',data,layout);