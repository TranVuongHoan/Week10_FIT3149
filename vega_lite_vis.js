// List of visualizations to embed
const visualizations = [
  { element: "#bar_chart", file: "barchart.vg.json" },
  { element: "#map", file: "map.vg.json" }
];

// Embed selected charts
visualizations.forEach(vis => {
  vegaEmbed(vis.element, vis.file)
    .then(result => {
      // result.view gives access to the Vega view API if needed
    })
    .catch(console.error);
});
