import crafttweaker.item.IItemStack;

var remove as IItemStack[] = [
    <mekanism:basicblock:8>,
    <teslacorelib:machine_case>,
    <ic2:te:44>,
    <ic2:te:1>,
    <ic2:resource:12>,
    <ic2:te:43>,
    <ic2:te:45>,
    <ic2:te:47>,
    <buildcrafttransport:pipe_stripes_item>,
    <appliedenergistics2:security_station>,
    <appliedenergistics2:quartz_growth_accelerator>,
    <appliedenergistics2:charger>
];

for myRemove in remove{
    recipes.remove(myRemove);
}

var toBan as IItemStack[] = [
];

for ban in toBan{
    recipes.remove(ban);
    ban.addTooltip(format.red("配方已删除。"));
}