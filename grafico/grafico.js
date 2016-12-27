var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    

var svg = d3.select("#chart")
    .append("svg")
    .attr('version', '1.1')
    .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);


// Get the data
d3.csv("grafico/data.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      
      d.number = +d.number;
      d.counts = +d.counts;
      d.mean = +d.mean;
      d.time = +d.time;
  });

  // Scale the range of the data
  x.domain([0, d3.max(data, function(d) { return d.mean; }) + 2]);
  y.domain([0, d3.max(data, function(d) { return d.number; })]);
    
console.log(data);
      
  // Add the scatterplot
  svg.selectAll("dot")
      .data(data)
    .enter().append("circle")
      .attr("r", function(d) { return d.counts/3 })
      .attr("cx", function(d) { return x(d.mean); })
      .attr("cy", function(d) { return y(d.number); });

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});
