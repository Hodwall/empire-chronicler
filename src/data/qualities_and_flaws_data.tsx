const qualities_and_flaws_data = [
  //item qualities
  {
    type: 'quality',
    category: 'item-quality',
    name: 'Durable',
    content: `Laboriously crafted using strong materials, the item can take +Durable Damage points before it suffers any negatives (see Weapon Damage and Armour Damage on pages 296 and 299) and gains a saving throw of 9+ on a 1d10 roll against instant breakage from sources like Trap Blade (see page 298). This Quality can be taken multiple times. Each time it is taken, the saving throw improves by 1 (e.g. From 9+ to 8+)`,
    source: 'Warhammer Fantasy RP 4E, p.292'
  },
  {
    type: 'quality',
    category: 'item-quality',
    name: 'Fine',
    content: `Meticulously crafted to please the eye. This Quality is a sign of social status and can be taken multiple times. The higher the quality, the more impressive it seems.`,
    source: 'Warhammer Fantasy RP 4E, p.292'
  },
  {
    type: 'quality',
    category: 'item-quality',
    name: 'Lightweight',
    content: `Cleverly crafted for ease of carrying. Reduce Encumbrance points by 1.`,
    source: 'Warhammer Fantasy RP 4E, p.292'
  },
  {
    type: 'quality',
    category: 'item-quality',
    name: 'Practical',
    content: `Expertly crafted with utility in mind. A failed test using this item receives +1 SL. If the item is a piece of armour, any penalties for wearing it are reduced by one level (for example from −30 to −20)`,
    source: 'Warhammer Fantasy RP 4E, p.292'
  },
  //item flaws
  {
    type: 'quality',
    category: 'item-flaw',
    name: 'Ugly',
    content: `Crafted without any aesthetic awareness whatsoever, Ugly items attract negative attention, and related Fellowship Tests might even suffer a –10 penalty`,
    source: 'Warhammer Fantasy RP 4E, p.292'
  },
  {
    type: 'quality',
    category: 'item-flaw',
    name: 'Shoddy',
    content: `Hastily crafted by an amateur or fraudster. The item breaks when used in any failed Test rolling a double. Similarly, Shoddy armour breaks if any Critical Hit is sustained to a Hit Location it protects.`,
    source: 'Warhammer Fantasy RP 4E, p.292'
  },
  {
    type: 'quality',
    category: 'item-flaw',
    name: 'Unreliable',
    content: `Crafted without attention to functionality, a failed test using this item receives –1 SL. Further, penalties for wearing Unreliable armour are doubled`,
    source: 'Warhammer Fantasy RP 4E, p.293'
  },
  {
    type: 'quality',
    category: 'item-flaw',
    name: 'Bulky',
    content: `An awkward design crafted clumsily. Increase Encumbrance by +1 (small trinkets cannot normally have this flaw). Bulky clothing and armour are Enc 1 even when worn, and Fatigue penalties for armour are doubled`,
    source: 'Warhammer Fantasy RP 4E, p.293'
  },
];

export default qualities_and_flaws_data;