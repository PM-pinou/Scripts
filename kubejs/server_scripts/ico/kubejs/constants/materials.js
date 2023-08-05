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
]
// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

// Used for creating tags on custom ore processing materials
const metals = [
    'aluminum',
    'cloggrum',
    'cobalt',
    'copper',
    'froststeel',
    'gold',
    'iesnium',
    'iron',
    'lead',
    'nebu',
    'nickel',
    'osmium',
    'regalium',
    'silver',
    'thallasium',
    'tin',
    'uranium',
    'utherium',
    'zinc'
];

const meltingPoints = {
    utherium: { temp: 1070 },
    thallasium: { temp: 800 },
    signalum: { temp: 1272 },
    regalium: { temp: 620 },
    nebu: { temp: 1400 },
    lumium: { temp: 1354 },
    iesnium: { temp: 850 },
    froststeel: { temp: 860 },
    enderium: { temp: 1450 },
    cloggrum: { temp: 650 },
    sulfur: { temp: 115 },
    redstone: { temp: 660 },
    potassium_nitrate: { temp: 334 },
    lapis: { temp: 115 },
    fluorite: { temp: 1418 },
    dimensional: { temp: 1450 },
    coal: { temp: 1149 },
    cinnabar: { temp: 580 },
    bitumen: { temp: 115 },
    apatite: { temp: 450 },
    aeternium: { temp: 1250 },
    alfsteel: { temp: 1450 },
    elementium: { temp: 875 },
    gaia_spirit: { temp: 1350 },
    infused_iron: { temp: 850 },
    manasteel: { temp: 900 },
    sky: { temp: 950 },
    terminite: { temp: 840 },
    terrasteel: { temp: 975 },
    energized_steel: { temp: 875 },
    blazing: { temp: 950 },
    niotic: { temp: 1250 },
    spirited: { temp: 1350 },
    nitro: { temp: 1450 }
};