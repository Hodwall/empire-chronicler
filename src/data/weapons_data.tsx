const weapons_data = [
    //basic
    { type: 'weapon', category: 'basic', name: 'Hand Weapon', price: '1GC', encumbrance: '1', availability: 'common', range: 'Average', damage: '+SB+4', traits: [] },
    { type: 'weapon', category: 'basic', name: 'Improvised Weapon', price: 'N/A', encumbrance: 'varies', availability: 'N/A', range: 'varies', damage: '+SB+1', traits: ['undamaging'] },
    { type: 'weapon', category: 'basic', name: 'Dagger', price: '16/–', encumbrance: '0', availability: 'common', range: 'very short', damage: '+SB+1', traits: [] },
    { type: 'weapon', category: 'basic', name: 'Knife', price: '8/-', encumbrance: '0', availability: 'common', range: 'very short', damage: '+SB+1', traits: ['undamaging'] },
    { type: 'weapon', category: 'basic', name: 'Shield (Buckler)', price: '18/2', encumbrance: '0', availability: 'common', range: 'personal', damage: '+SB+1', traits: ['shield 1', 'defensive', 'undamaging'] },
    { type: 'weapon', category: 'basic', name: 'Shield', price: '2GC', encumbrance: '1', availability: 'common', range: 'very short', damage: '+SB+2', traits: ['shield 2', 'defensive', 'undamaging'] },
    { type: 'weapon', category: 'basic', name: 'Shield (Large)', price: '3GC', encumbrance: '3', availability: 'common', range: 'very short', damage: '+SB+3', traits: ['shield 3', 'defensive', 'undamaging'] },
    //cavalry
    { type: 'weapon', category: 'cavalry', name: 'Cavalry Hammer (2H)', price: '3GC', encumbrance: '3', availability: 'scarce', range: 'long', damage: '+SB+5', traits: ['pummel'] },
    { type: 'weapon', category: 'cavalry', name: 'Lance', price: '1GC', encumbrance: '3', availability: 'rare', range: 'very long', damage: '+SB+6*', traits: ['impact', 'impale'] },
    //fencing
    { type: 'weapon', category: 'fencing', name: 'Foil', price: '5GC', encumbrance: '1', availability: 'scarce', range: 'medium', damage: '+SB+3', traits: ['fast', 'impale', 'precise', 'undamaging'] },
    { type: 'weapon', category: 'fencing', name: 'Rapier', price: '5GC', encumbrance: '1', availability: 'scarce', range: 'Long', damage: '+SB+4', traits: ['fast', 'impale'] },
    //brawling
    { type: 'weapon', category: 'brawling', name: 'Unarmed', price: 'N/A', encumbrance: '0', availability: '-', range: 'personal', damage: '+SB+0', traits: ['undamaging'] },
    { type: 'weapon', category: 'brawling', name: 'Knuckledusters', price: '2/6', encumbrance: '0', availability: 'common', range: 'Personal', damage: '+SB+2', traits: [] },
    //flail
    { type: 'weapon', category: 'flail', name: 'Grain Flail', price: '10/-', encumbrance: '1', availability: 'common', range: 'average', damage: '+SB+3', traits: ['distract', 'imprecise', 'wrap'] },
    { type: 'weapon', category: 'flail', name: 'Flail', price: '2GC', encumbrance: '1', availability: 'scarce', range: 'average', damage: '+SB+5', traits: ['distract', 'wrap'] },
    { type: 'weapon', category: 'flail', name: 'Military Flail (2H)', price: '3GC', encumbrance: '2', availability: 'rare', range: 'long', damage: '+SB+6', traits: ['distract', 'impact', 'tiring', 'wrap'] },
];

export default weapons_data;