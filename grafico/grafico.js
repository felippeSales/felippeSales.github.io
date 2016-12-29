var margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var svg = d3.select("#chart")
    .append("svg")
    .attr('version', '1.1')
    .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


// formatar o numero em 2 casas
var s = d3.formatSpecifier("f");
s.precision = d3.precisionFixed(0.1);
var f = d3.format(s);

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color_scale = d3.scaleLinear().range(['#EEEEEE', '#FD8100']);

function make_x_gridlines() {
    return d3.axisBottom(x)
        .ticks(9);
}

// gridlines in y axis function
function make_y_gridlines() {
    return d3.axisLeft(y)
        .ticks(9)
}

// Get the data
d3.csv("grafico/data.csv", function (error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function (d) {

        d.number = +d.number;
        d.counts = +d.counts;
        d.mean = +d.mean;
        d.time = +d.time;
    });

    // Scale the range of the data
    x.domain([0, d3.max(data, function (d) {
        return d.mean;
    }) + 2]);
    y.domain([0, d3.max(data, function (d) {
        return d.number;
    })]);
    color_scale.domain([d3.min(data, function (d) {
        return d.time
    }), d3.max(data, function (d) {
        return d.time
    })]);

    // add the Y gridlines
    svg.append("g")
        .attr("class", "grid")
        .call(make_y_gridlines()
            .tickSize(-width)
            .tickFormat("")
        );

    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("fill", function (d) {
            return color_scale(d.time);
        })
        .attr("r", function (d) {
            return d.counts / 3
        })
        .attr("cx", function (d) {
            return x(d.mean);
        })
        .attr("cy", function (d) {
            return y(d.number);
        })
        .on("mouseover", function (d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html( "<br/><b>Média do tempo de resposta ( min ) : </b>" 
                     + "<br/>" + f(d.time) 
                     + "<br/>"
                     +"<b>Número de Pessoas que escolheram: </b>"
                     + "<br/>" + d.counts + "<br/>"
                        +"<b>Média de quão aleatório acha que foi: </b>"
                     + "<br/>" + f(d.mean) + "<br/>"
                    )
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });;

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));


    svg.append("text")
        .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate(" + (-margin.left / 2) + "," + (height / 2) + ")rotate(-90)") // text is drawn off the screen top left, move down and out and rotate
        .text("Número escolhido");

    svg.append("text")
        .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate(" + (width / 2) + "," + (height + margin.bottom * 0.8) + ")") // centre below axis
        .text("Média de quão aleatória a pessoa acha que foi");
    

});