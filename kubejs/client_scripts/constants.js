//priority: 1000

const refinedStorageItems = [
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'controller',
    'creative_controller',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'crafter',
    'crafting_monitor',
    'disk_manipulator',
    'crafter_manager'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone',
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:basalt',
    'quark:brimstone',
    'quark:jasper',
    'quark:limestone',
    'quark:marble',
    'quark:permafrost',
    'quark:slate',
    'quark:deepslate',
    'astralsorcery:marble_raw',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone',
    'quark:myalite',
    'quark:dusky_myalite',
];
const generatableBasalt = [];

const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

const itemsToHide = [
    // Deprecated Ars Arsenal items
    'arsarsenal:aqua_hood',
    'arsarsenal:fire_hood',
    'arsarsenal:earth_hood',
    'arsarsenal:air_hood',

    'ars_nouveau:arcane_brick',
    'ars_nouveau:arcane_ore',
    'ars_nouveau:mana_gem_block',


    'create:powdered_obsidian',
    'create:honey_bucket',
    'create:copper_ore',
    'create:zinc_ore',


    'emendatusenigmatica:sulfur_ore',
    'emendatusenigmatica:cinnabar_ore',
    'emendatusenigmatica:dimensional_crushed',
    'emendatusenigmatica:arcane_crushed',
    'emendatusenigmatica:potassium_nitrate_crushed',
    'emendatusenigmatica:sulfur_crushed',
    'emendatusenigmatica:apatite_crushed',
    'emendatusenigmatica:cinnabar_crushed',
    'emendatusenigmatica:bitumen_crushed',
    'emendatusenigmatica:fluorite_crushed',
    'emendatusenigmatica:certus_quartz_crushed',
    'emendatusenigmatica:ancient_debris_crushed',
    'emendatusenigmatica:quartz_crushed',
    'emendatusenigmatica:redstone_crushed',
    'emendatusenigmatica:lapis_crushed',
    'emendatusenigmatica:emerald_crushed',
    'emendatusenigmatica:diamond_crushed',
    'emendatusenigmatica:coal_crushed',
    'emendatusenigmatica:molten_zinc_bucket',
    'emendatusenigmatica:molten_uranium_bucket',
    'emendatusenigmatica:molten_tin_bucket',
    'emendatusenigmatica:molten_steel_bucket',
    'emendatusenigmatica:molten_silver_bucket',
    'emendatusenigmatica:molten_osmium_bucket',
    'emendatusenigmatica:molten_nickel_bucket',
    'emendatusenigmatica:molten_lead_bucket',
    'emendatusenigmatica:molten_iron_bucket',
    'emendatusenigmatica:molten_invar_bucket',
    'emendatusenigmatica:molten_gold_bucket',
    'emendatusenigmatica:molten_fluix_bucket',
    'emendatusenigmatica:molten_emerald_bucket',
    'emendatusenigmatica:molten_electrum_bucket',
    'emendatusenigmatica:molten_diamond_bucket',
    'emendatusenigmatica:molten_copper_bucket',
    'emendatusenigmatica:molten_constantan_bucket',
    'emendatusenigmatica:molten_cobalt_bucket',
    'emendatusenigmatica:molten_charged_certus_quartz_bucket',
    'emendatusenigmatica:molten_certus_quartz_bucket',
    'emendatusenigmatica:molten_bronze_bucket',
    'emendatusenigmatica:molten_brass_bucket',
    'emendatusenigmatica:molten_aluminum_bucket',
    'emendatusenigmatica:molten_ancient_debris_bucket',
    'emendatusenigmatica:molten_cloggrum_bucket',
    'emendatusenigmatica:molten_froststeel_bucket',
    'emendatusenigmatica:molten_utherium_bucket',
    'emendatusenigmatica:molten_regalium_bucket',
    'emendatusenigmatica:molten_iesnium_bucket',
    'emendatusenigmatica:molten_lumium_bucket',
    'emendatusenigmatica:molten_enderium_bucket',
    'emendatusenigmatica:molten_signalum_bucket',
    /iridium/,
    /cast_iron/,
    /peridot/,
    /emendatusenigmatica.*sapphire/,
    /emendatusenigmatica.*ruby/,


    'farmersdelight:fried_egg',

    'immersiveengineering:dust_coke',
    'immersiveengineering:dust_saltpeter',
    'immersiveengineering:dust_wood',
    'immersiveengineering:coal_coke',

    'mekanism:fluorite_gem',

    // Deprecated Pedestals Items
    'pedestals:coin/fmagnetmodb',
    'pedestals:coin/fmagnetmod',
    'pedestals:coin/fmagnetitemstackb',
    'pedestals:coin/fluidpumpfilterblacklist',
    'pedestals:coin/fluidrelayblocked',
    'pedestals:coin/rfquarry',
    'pedestals:coin/rfquarryb',
    'pedestals:coin/rfrelayblocked',
    'pedestals:coin/xprelayblocked',
    'pedestals:coin/fmagnetitem',
    'pedestals:coin/fmagnetitemb',
    'pedestals:coin/fmagnetitemstack',
    'pedestals:coin/fluidpumpfilter',
    'pedestals:coin/fluidfilterblacklist',
    'pedestals:coin/fluidfilter',
    'pedestals:coin/enderfilteredexactimport',
    'pedestals:coin/enderfilteredfuzzyimport',
    'pedestals:coin/enderfilteredmodimport',
    'pedestals:coin/enderfilteredenchantedimport',
    'pedestals:coin/enderfilteredfoodimport',
    'pedestals:coin/fexportenchanted',
    'pedestals:coin/filterenchantedfuzzy',
    'pedestals:coin/filterenchantedfuzzyb',
    'pedestals:coin/filterenchantedexact',
    'pedestals:coin/filterenchantedexactb',
    'pedestals:coin/filterenchantedcount',
    'pedestals:coin/fexportitem',
    'pedestals:coin/fexportitemstack',
    'pedestals:coin/fexportmod',
    'pedestals:coin/fexportfood',
    'pedestals:coin/filterenchantedb',
    'pedestals:coin/filterenchanted',
    'pedestals:coin/filterdurabilityless',
    'pedestals:coin/filterdurability',
    'pedestals:coin/filterfoodb',
    'pedestals:coin/filterfood',
    'pedestals:coin/filtermodb',
    'pedestals:coin/filtermod',
    'pedestals:coin/filtertagb',
    'pedestals:coin/filtertag',
    'pedestals:coin/filteritemstackb',
    'pedestals:coin/filteritemstack',
    'pedestals:coin/filteritemb',
    'pedestals:coin/filteritem',
    'pedestals:coin/quarryb',
    'pedestals:coin/restriction',

    'quark:biotite',
    'quark:biotite_ore',
    'quark:tallow',

    'tconstruct:copper_ore',
    'tconstruct:cobalt_ore',
    'tconstruct:copper_ingot',
    'tconstruct:cobalt_ingot',

    'thermal:coal_coke',
    'thermal:coal_coke_block',
    'thermal:ender_pearl_dust',
    'thermal:sawdust',
    'thermal:press_gear_die',
    'thermal:press_packing_3x3_die',
    'thermal:press_packing_2x2_die',
    'thermal:press_unpacking_die',
    'thermal:rubber',
    'thermal:niter',
    'thermal:cinnabar',
    'thermal:apatite',
    'thermal:sulfur',

    'quark:bonded_ravager_hide',
    'quark:ravager_hide',
    'quark:backpack',
    'quark:crate',
    'quark:magnet',
    'quark:soul_compass',

    /emendatusenigmatica:\w+_andesite_ore/,
    /emendatusenigmatica:\w+_gabbro_ore/,
    /emendatusenigmatica:\w+_c_limestone_ore/,
    /emendatusenigmatica:\w+_scoria_ore/,
    /emendatusenigmatica:\w+_weathered_limestone_ore/,
    /emendatusenigmatica:\w+_jasper_ore/,
    /emendatusenigmatica:\w+_marble_ore/,
    /emendatusenigmatica:\w+_slate_ore/,
    /emendatusenigmatica:\w+_netherrack_ore/,
    /emendatusenigmatica:\w+_blackstone_ore/,
    /emendatusenigmatica:\w+_deepslate_ore/,
    /emendatusenigmatica:\w+_end_stone_ore/,
    /emendatusenigmatica:\w+_mossy_stone_ore/,
    /emendatusenigmatica:\w+_granite_ore/,
    /emendatusenigmatica:\w+_diorite_ore/,
    /emendatusenigmatica:\w+_sand_ore/,
    /emendatusenigmatica:\w+_gravel_ore/,
    /emendatusenigmatica:\w+_violecite_ore/,
    /emendatusenigmatica:\w+_sulphuric_rock_ore/,
    /emendatusenigmatica:\w+_flavolite_ore/,
    /emendatusenigmatica:\w+_cryptic_stone_ore/,
    /emendatusenigmatica:\w+_ether_stone_ore/,
    /emendatusenigmatica:\w+_nylium_soul_soil_ore/,
    /emendatusenigmatica:\w+_subzero_ash_ore/,
    /emendatusenigmatica:\w+_brimstone_ore/,
    /emendatusenigmatica:\w+_soul_soil_ore/,
    /emendatusenigmatica:\w+_basalt_ore/,
    /emendatusenigmatica:certus/,
    /emendatusenigmatica:fluix/,
    /tconstruct:copper_(ore|block|nugget)/,
    /tconstruct:cobalt_(ore|block|nugget)/,
    /titanium:\w+_gear/,
    /thermal:\w+_dust/,
    /thermal:\w+_gear$/,
    /thermal:\w+_ingot/,
    /thermal:\w+_nugget/,
    /thermal:\w+_ore/,
    /thermal:\w+_plate/,
    /pedestals:dust/,
    /mekanism:\w+_ore/,
    /minecraft:\w+_ore/,
    /immersiveengineering:plate_/,
    /immersiveengineering:storage_/,
    /immersiveengineering:ore_/,
    /create:\w+_sheet/,
    /create:\w+_nugget/,
    /create:\w+_ingot/,
    /immersiveposts:stick_/,
    /eidolon:\w+_ore/,
    /emendatusenigmatica:\w+certus/,
    /emendatusenigmatica:\w+fluix/,
    /powah:\w+_starter/,
    /rftoolsbase:dimensionalshard_/,
    /theoneprobe:/,
    /upgrade_aquatic:\w+_jelly_torch/,
    /chiselsandbits:block_bit$/
];

let ee_types = ['clump', 'crystal', 'dirty_dust', 'shard', 'fragment', 'gravel'];
ee_types.forEach((type) => {
    itemsToHide.push(
        `emendatusenigmatica:dimensional_${type}`,
        `emendatusenigmatica:arcane_${type}`,
        `emendatusenigmatica:potassium_nitrate_${type}`,
        `emendatusenigmatica:sulfur_${type}`,
        `emendatusenigmatica:apatite_${type}`,
        `emendatusenigmatica:cinnabar_${type}`,
        `emendatusenigmatica:bitumen_${type}`,
        `emendatusenigmatica:fluorite_${type}`,
        `emendatusenigmatica:certus_quartz_${type}`,
        `emendatusenigmatica:quartz_${type}`,
        `emendatusenigmatica:redstone_${type}`,
        `emendatusenigmatica:lapis_${type}`,
        `emendatusenigmatica:emerald_${type}`,
        `emendatusenigmatica:diamond_${type}`,
        `emendatusenigmatica:coal_${type}`,
        `emendatusenigmatica:sapphire_${type}`,
        `emendatusenigmatica:ruby_${type}`,
        `emendatusenigmatica:iridium_${type}`,
        `emendatusenigmatica:peridot_${type}`
    );
});

/*  This allows hiding individual recipes. It's used primarily for recipes displayed in Patchouli manuals 
    that have been changed to use a different crafting type or that have been disabled. It allows creating a
    recipe pointer that will display in Patchouli but not in JEI.  

    Use the logger in the jei_hide_recipes script to discover the correct CategoryID. They do not match the recipe type.
*/
const recipesToHide = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [

            'ars_nouveau:arcane_stone',
            'ars_nouveau:crystallizer',
            'ars_nouveau:potion_melder',
            'ars_nouveau:volcanic_accumulator',
            'ars_nouveau:mana_condenser',
            'ars_nouveau:mycelial_sourcelink',
            'ars_nouveau:vitalic_sourcelink',
            'ars_nouveau:alchemical_sourcelink',
            'ars_nouveau:novice_hood',
            'ars_nouveau:novice_robes',
            'ars_nouveau:novice_leggings',
            'ars_nouveau:novice_boots',
            'ars_nouveau:apprentice_hood',
            'ars_nouveau:apprentice_robes',
            'ars_nouveau:apprentice_leggings',
            'ars_nouveau:apprentice_boots',
            'ars_nouveau:archmage_hood',
            'ars_nouveau:archmage_robes',
            'ars_nouveau:archmage_leggings',
            'ars_nouveau:archmage_boots',

            'botania:terrasteel_helmet',
            'botania:terrasteel_chestplate',
            'botania:terrasteel_leggings',
            'botania:terrasteel_boots',
            'botania:spark',
            'botania:mana_pylon',
            'botania:natura_pylon',
            'botania:apothecary_default',
            'botania:terra_plate',
            'botania:alfheim_portal',
            'botania:mana_ring',
            'botania:gaia_ingot',
            'botania:gaia_pylon',
            'botania:mining_ring',
            'botania:dodge_ring',
            'botania:swap_ring',
            'botania:water_ring',
            'botania:magnet_ring',
            'botania:aura_ring',
            'botania:pixie_ring',
            'botania:reach_ring',
            'botania:flighttiara_0',
            'botania:runic_altar',
            'botania:mana_spreader',
            'botania:elven_spreader',
            'botania:gaia_spreader',
            'botania:fel_pumpkin',
            'botania:blood_pendant',
            'botania:ender_dagger',
            'botania:brewery',
            'botania:thorn_chakram',
            'botania:flare_chakram',
            'botania:laputa_shard',

            'mythicbotany:wither_aconite_floating',
            'mythicbotany:raindeletia_floating',
            'mythicbotany:modified_gaia_pylon_with_alfsteel',
            'mythicbotany:alfsteel_pylon',
            'mythicbotany:mana_infuser',
            'mythicbotany:fire_ring',
            'mythicbotany:ice_ring',
            'mythicbotany:mana_collector',
            'mythicbotany:kvasir_mead',
        ]
    },
    {
        category: 'ars_nouveau:apparatus',
        recipes_by_id: [
            'ars_nouveau:jar_of_light',
            'ars_nouveau:void_jar',
            'ars_elemental:air_focus',
            'ars_elemental:water_focus',
            'ars_elemental:earth_focus',
            'ars_elemental:fire_focus',
            'ars_elemental:necrotic_focus'
        ]
    },
    {
        category: 'astralsorcery:altar_attunement',
        recipes_by_id: ['astralsorcery:altar/attunement_altar']
    },
    {
        category: 'botania:petals',
        recipes_by_id: ['mythicbotany:petal_apothecary/wither_aconite', 'mythicbotany:petal_apothecary/raindeletia']
    },
    {
        category: 'botania:mana_pool',
        recipes_by_id: ['botania:mana_infusion/mana_powder_dust', 'botania:mana_infusion/mana_powder_dye']
    }
];

const disabledItems = [

    'betterendforge:ender_dust',

    'blockcarpentry:frame_chest',
    'blockcarpentry:illusion_chest',

    'create:dough',

    'integrateddynamics:part_entity_writer',

    /materialis:psimetal/,

    'mekanism:sawdust',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lithium',

    'mythicbotany:raindeletia',
    'mythicbotany:raindeletia_floating',
    'mythicbotany:wither_aconite',
    'mythicbotany:wither_aconite_floating',

    'pedestals:dustflour',

    'pneumaticcraft:wheat_flour',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',

];

const materialsToUnify = [
    'tin',
    'iridium',
    'bitumen',
    'refined_glowstone',
    'lapis',
    'prismarine',
    'certus_quartz',
    'quartz',
    'steel',
    'draconium',
    'brick',
    'dragonstone',
    'sulfur',
    'fluix',
    'hepatizon',
    'elementium',
    'nickel',
    'gold',
    'silver',
    'scorched_brick',
    'create',
    'arcane',
    'resonating',
    'enderium',
    'pig_iron',
    'silicon',
    'fluix_iron',
    'mana_diamond',
    'refined_obsidian',
    'invar',
    'dimensional',
    'cinnabar',
    'soulsteel',
    'niter',
    'sapphire',
    'bronze',
    'rose_gold',
    'iron',
    'copper',
    'knightslime',
    'fluix_steel',
    'draconium_awakened',
    'aluminum',
    'zinc',
    'apatite',
    'ruby',
    'nether_brick',
    'mana',
    'signalum',
    'spirit_attuned',
    'peridot',
    'charged_certus_quartz',
    'uranium',
    'osmium',
    'seared_brick',
    'emerald',
    'queens_slime',
    'brass',
    'cobalt',
    'fluorite',
    'netherite',
    'slimesteel',
    'silicon_bronze',
    'terrasteel',
    'manyullyn',
    'lead',
    'constantan',
    'electrum',
    'potassium_nitrate',
    'manasteel',
    'coke',
    'lumium',
    'cast_iron',
    'diamond'
];

const industrialforegoing = {
    laser_lens: {
        white: 'industrialforegoing:laser_lens0',
        orange: 'industrialforegoing:laser_lens1',
        magenta: 'industrialforegoing:laser_lens2',
        light_blue: 'industrialforegoing:laser_lens3',
        yellow: 'industrialforegoing:laser_lens4',
        lime: 'industrialforegoing:laser_lens5',
        pink: 'industrialforegoing:laser_lens6',
        gray: 'industrialforegoing:laser_lens7',
        light_gray: 'industrialforegoing:laser_lens8',
        cyan: 'industrialforegoing:laser_lens9',
        purple: 'industrialforegoing:laser_lens10',
        blue: 'industrialforegoing:laser_lens11',
        brown: 'industrialforegoing:laser_lens12',
        green: 'industrialforegoing:laser_lens13',
        red: 'industrialforegoing:laser_lens14',
        black: 'industrialforegoing:laser_lens15'
    }
};
