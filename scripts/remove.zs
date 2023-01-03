#priority 1

import crafttweaker.item.IItemStack;

var removeRecipe as IItemStack[] = [
    <cyclicmagic:block_forester>,
    <ironchest:wood_iron_chest_upgrade>,
    <ironchest:wood_copper_chest_upgrade>,
    <ironchest:copper_iron_chest_upgrade>,
    <ironchest:copper_silver_chest_upgrade>,
    <ironchest:silver_gold_chest_upgrade>,
    <ironchest:iron_gold_chest_upgrade>,
    <ironchest:gold_diamond_chest_upgrade>,
    <ironchest:iron_chest>,
    <ironchest:iron_chest:1>,
    <ironchest:iron_chest:2>,
    <ironchest:iron_chest:3>,
    <ironchest:iron_chest:4>,
    <ironchest:iron_chest:5>,
    <ironchest:iron_chest:6>,
    <enderio:item_material:51>,
    <enderio:item_material>,
    <minecraft:clock>,
    <randomthings:timeinabottle>,
    <cyberware:surgery_chamber>,
    <scannable:scanner>,
    <thermalexpansion:frame:64>,
    <thermalexpansion:frame>,
    <enderio:item_material:20>,
    <rftools:machine_frame>,
    <scannable:module_blank>,
    <fluxnetworks:fluxcontroller>,
    <deepmoblearning:deep_learner>,
    <apotheosis:hellshelf>,
    <botania:runealtar>,
    <botania:spreader>,
    <botania:spreader:3>,
    <deepmoblearning:extraction_chamber>,
    <threng:big_assembler:1>,
    <appliedenergistics2:material:35>,
    <appliedenergistics2:material:54>,
    <draconicevolution:draconic_core>,
    <draconicevolution:wyvern_core>,
    <draconicevolution:wyvern_energy_core>,
    <draconicevolution:wyvern_helm>,
    <draconicevolution:wyvern_chest>,
    <draconicevolution:wyvern_legs>,
    <draconicevolution:wyvern_boots>,
    <deepmoblearning:polymer_clay>,
    <minecraft:brick>,
    <minecraft:experience_bottle>,
    <minecraft:enchanting_table>,
    <roost:breeder>,
    <draconicevolution:draconic_energy_core>,
    <appliedenergistics2:controller>,
    <minecraft:beacon>,
    <gregtech:machine:1>,
    <gregtech:machine:3>,
    <gregtech:machine:17>,
    <gregtech:machine:1000>,
    <gregtech:machine:1647>,
    <gregtech:machine:305>,
    <rftools:environmental_controller>,
    <cookingforblockheads:sink>,
    <deepmoblearning:simulation_chamber>,
    <fluxnetworks:fluxplug>,
    <fluxnetworks:fluxpoint>,
    <botania:altar>,
    <cyclicmagic:storage_bag>,
    <redstonearsenal:material:224>,
    <randomthings:spectrecharger>,
    <cyclicmagic:harvester_block>,
    <thermalfoundation:material:512>,
    <redstonearsenal:material:193>,
    <cyclicmagic:peat_generator>,
    <minecraft:tripwire_hook>,
    <cyclicmagic:beacon_potion>
];

for myRemoveRecipes in removeRecipe{
    recipes.remove(myRemoveRecipes);
}

var ban as IItemStack[] = [
    <cyclicmagic:uncrafting_block>,
    <randomthings:playerinterface>,
    <randomthings:blockdestabilizer>,
    <randomthings:weatheregg:1>,
    <randomthings:weatheregg:2>,
    <randomthings:eclipsedclock>,
    <cyclicmagic:tool_push>,
    <cyclicmagic:chest_sack_empty>,
    <cyclicmagic:corrupted_chorus>
];

for toBan in ban{
    recipes.remove(toBan);
    toBan.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
}

furnace.remove(<variedcommodities:ingot_steel>);

// rftools
recipes.removeShaped(<rftools:storage_module_tablet:1>, [[<rftools:storage_module_tablet>, <rftools:storage_module>]]);
recipes.removeShaped(<rftools:storage_module_tablet:1>, [[<rftools:storage_module_tablet>, <rftools:storage_module:1>]]);
recipes.removeShaped(<rftools:storage_module_tablet:1>, [[<rftools:storage_module_tablet>, <rftools:storage_module:2>]]);
<rftools:storage_module_tablet:1>.addTooltip(format.red(game.localize("tooltip.tablet_deleted")));

mods.botania.PureDaisy.removeRecipe(<botania:livingwood>);
