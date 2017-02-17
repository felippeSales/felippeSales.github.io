////////////////////////////////////////////////////////////// 
//////////////////////// Set-Up ////////////////////////////// 
////////////////////////////////////////////////////////////// 
var margin = {top: 100, right: 100, bottom: 100, left: 100},
width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

////////////////////////////////////////////////////////////// 
////////////////////////// Data ////////////////////////////// 
////////////////////////////////////////////////////////////// 
var data = [
    [//Primeira Pergunta
    {axis:"Número 0",value:0.03501946},
    {axis:"1",value:0.0155642},
    {axis:"2",value:0.0311284},
    {axis:"3",value:0.07782101},
    {axis:"4",value:0.07782101},
    {axis:"5",value:0.1322957},
    {axis:"6",value:0.1128405},
    {axis:"7",value:0.2840467},
    {axis:"8",value:0.155642},
    {axis:"9",value:0.06225681}      
    ], [//Sétima
    {axis:"Número 0",value:0.01945525},
    {axis:"1",value:0.0155642},
    {axis:"2",value:0.04280156},
    {axis:"3",value:0.06614786},
    {axis:"4",value:0.06225681},
    {axis:"5",value:0.1322957},
    {axis:"6",value:0.1128405},
    {axis:"7",value:0.2840467},
    {axis:"8",value:0.155642},
    {axis:"9",value:0.06225681}      
    ]
  ];
////////////////////////////////////////////////////////////// 
//////////////////// Draw the Chart ////////////////////////// 
////////////////////////////////////////////////////////////// 
var color = d3.scale.ordinal()
.range(["#f0d43a","#00ADB5"]);

var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.28,
    levels: 5,
    roundStrokes: true,
    color: color
};
//Call function to draw the Radar chart
RadarChart(".radarChart", data, radarChartOptions);