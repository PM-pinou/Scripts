onEvent('item.tags', (event) => {
    let items = [
        'minecraft:crafting_table'
    ];

    event.add('forge:workbenches', items);
    event.add('forge:workbench', items);
});
