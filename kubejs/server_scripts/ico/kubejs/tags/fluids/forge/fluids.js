onEvent('fluid.tags', (event) => {
    event.get('forge:crude_oil').add(['immersivepetroleum:oil','thermal:crude_oil']);
    event.get('forge:tree_oil').add(['thermal:tree_oil']);
    event.get('forge:gasoline').add(['thermal:refined_fuel']);
});
