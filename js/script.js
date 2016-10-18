var w = 200,
	h = 200;

//Data
var d = [
		  [
			{axis:"Web Developer", value:0.8,abrev:"Web.Dev"},
			{axis:"Back-end Developer",value:0.6,abrev:"B.Dev"},
			{axis:"Mobile Developer",value:0.3, abrev:"M.Dev"},
			{axis:"Data Analyst",value:0.4, abrev:"DA"},
			{axis:"Software Eng.",value:0.75, abrev:"SE"}
          ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 5
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#radar-body')
	.selectAll('svg')
	.append('svg')
	.attr("width","100")
	.attr("height", "100")

