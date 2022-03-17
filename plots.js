console.log(data);

// Trace1 for the Greek Data
var trace1 = {
    x: data.map(d => d.pair),
    y: data.map(d => d.greekSearchResults),
    type: "bar"
  };
  
// Trace 2 for the Roman Data
var trace2 = {
    x: data.map(d => d.pair),
    y: data.map(d => d.romanSearchResults),
    type: "bar"
  };

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
layout = {
    title: "Greek vs Roman Gods Search Results",
    xaxis: {title: "Names"},
    xanchor: "center",
    yaxis: {title: "Search Results"},
    barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);