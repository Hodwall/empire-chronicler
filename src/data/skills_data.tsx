const skills_data = [
  {
    type: 'skill',
    category: 'skill',
    name: 'Animal Care (Int)',
    name_detail: 'advanced',
    content:
      `<p>The Animal Care Skill lets you tend and care for animals, and heal them should they fall sick or become wounded.</p>
      <p>Having a single Advance in Animal Care means you can keep animals healthy without needing to Test. You can also enact an Animal Care Test to identify and resolve problems with animals, such as:</p>
      <ul>
      <li>Spotting an illness.</li>
      <li>Understanding reasons for fractiousness or discomfort.</li>
      <li>Determining the quality of the animal.</li>
      <li>Heal Intelligence Bonus + SL Wounds (Note: an animal can only benefit from one healing roll after each encounter).</li>
      <li>Staunching a Bleeding condition.</li>
      <li>Preparing the animal for display.</li>
      </ul>
      <p>In combat, you may appraise an enemy animal with an Animal Care Test. If successful, you and all you inform gain +10 to hit when attacking that animal — or anyone using it as a mount — until the end of your next turn, as you point out loose tack, a limp from a niggling wound, or highlight some other weakness or vulnerability. Animal Care may only provide a maximum of +10 to hit per animal, no matter how many Tests are made to spot weaknesses.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.118'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Animal Training (Int)',
    name_detail: 'advanced, grouped',
    content:
      `<p>Animal Training represents your understanding of a particular type of animal, and your ability to train them. A successful use of the Skill allows you to identify the Trained abilities possessed by an animal belonging to your Specialisation (see page 118). The Animal Training Skill also allows you to undertake the Animal Training Endeavour between adventures (see page 196).</p>
      <p>In combat, a successful <b>Opposed Animal Training/Willpower</b> Test allows you to intimidate a single animal belonging to your Specialisation; you cause Fear in the animal targeted until the end of your next turn (see page 190). When causing Fear in this way, you may subsequently use your Animal Training Skill instead of Melee when defending against your target; with your GM’s approval you may also use Animal Training to attack your target, issuing specific commands.</p>
      <i><b>Example</b>: Facing a slavering war-hound, Ilse passes an <b>Opposed Animal Training (Dog)</b> roll, in the first round of combat, causing Fear in the beast, and gaining +1 Advantage. In the next round she ‘attacks’ her target with her Animal Training Skill, beating the dog’s defence. Her GM allows her to instruct the beast to flee, which it does, its tail between its legs.</i>
      <p><b>Specialisations</b>: Demigryph, Dog, Horse, Pegasus, Pigeon.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.119'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Art (Dex)',
    name_detail: 'basic, grouped',
    content:
      `<p>Create works of art in your chosen medium.</p>
      <p>Not having access to appropriate Trade Tools will incur a penalty to your Test. The SL achieved determines the quality of the final piece. For complicated or large works of art, an Extended Test may be required. The Art Skill has little use in combat, but marble busts make marvellous improvised weapons.</p>
      <p><i><b>Example</b>: Irina has been commissioned to paint a portrait of a local noble, whose favour her party is currying. Her GM determines this requires a total of 10 SL in an Extended Art Test, with each Test representing a week’s work.</i></p>
      <p><b>Specialisations</b>: Cartography, Engraving, Mosaics, Painting, Sculpture, Tattoo, Weaving.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.119'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Athletics (Ag)',
    name_detail: 'basic',
    content:
      `<p>Your ability to run, jump and move with speed or grace, and to perform any general physical activity. Refer to <b>Moving</b> (see page 164) for details on using Athletics in combat movement.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.119'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Bribery (Fel)',
    name_detail: 'basic',
    content:
      `<p>Your ability to judge how likely a person is to accept a bribe, and how best to offer the bribe so they will accept it.</p>
      <p>A successful <b>Bribery Test</b> tells you if a target may be bribed. If so, your GM will secretly determine the price of their cooperation using the target’s Earnings (see page 52), increasing the amount according to their usual honesty and the risk involved in taking the bribe. You then guess that target amount and the GM will tell you if the price is higher, lower, or equal. Each SL from your initial Bribery Test gives you another guess. At the end of this process, you determine how much money to offer, based on what you have gleaned.</p>
      <p><i><b>Example</b>: Snorri is trying to bribe his way past a city watchman; a character of the Brass Tier 2, meaning they roll 4d10 Brass for Income. The GM decides the guard can be bribed and secretly rolls 21 on the 4d10, meaning the price for bribing the guard is 21 Brass. Letting Snorri through isn’t too risky for the watchman, and he does it often, so the GM doesn’t increase the bribe required. Snorri rolls 1 SL on his Bribery Test; so, he knows the watchman is open to a bribe, and has 2 guesses as to his price. Snorri’s first guess is 15 Brass, to which his GM replies ‘higher’. His second guess is 40, to which his GM replies ‘lower’. Snorri now knows he must bribe the watchman between 15 and 40 Brass, so decides to aim high, and offers 30. Smiling, the watchman waves Snorri through.</i></p>
      <p>In combat, you may use Bribery as above to try to stop the fight, but treat the Test as Hard (–20) owing to the stress of the situation. If your target is not susceptible, you cannot afford the fee, or your foes do not speak your tongue, your pathetic attempts to buy them off will be doomed to fail. Of course, if they have the advantage of numbers, what’s to prevent them from taking all of your money?</p>`,
    source: 'Warhammer Fantasy RP 4E, p.120'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Chanelling (WP)',
    name_detail: 'advanced, grouped',
    content:
      `<p>The Channelling Skill measures your ability to call upon and control the various Winds of Magic, and is solely used by the magic rules. Channelling is a special skill in that it is both Grouped, allowing for Specialisations, and also ungrouped, for those not properly trained to channel magic.</p> 
      <p><b>Specialisations</b>: <i>Aqshy, Azyr, Chamon, Dhar, Ghur, Ghyran, Hysh, Shyish, Ulgu</i>.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.120'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Charm (Fel)',
    name_detail: 'basic',
    content:
      `<p>Charm makes people think favourably of you, your opinions, and proposed actions. Passing an <b>Opposed Charm/Cool</b> Test allows you to influence the behaviour of one or more targets, up to a maximum number equal to your Fellowship Bonus + SL, affecting those with the lowest Willpower first. If a target is amenable to your Charm, the Test will be uncontested.</p>
      <p>Your GM may permit you to use Charm in Combat if they think your foes might be susceptible to you pleading for your life or making persuasive arguments to stop the violence (although good luck charming a Goblin)!</p>
      <p>If you use Charm as your Action, calculate the number of targets affected as normal. If you use it to defend, you only affect your attacker. If you succeed, any affected targets will not attack you this round and you gain +1 Advantage as normal. You may do this in successive rounds until you choose to stop or fail a Charm Test, after which your words carry no more weight.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.120'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Charm Animal (WP)',
    name_detail: 'basic',
    content:
      `<p>Your aptitude for befriending, quickly calming, or subjugating animals.</p>
      <p>Passing a Charm Animal Test allows you to influence the behaviour of one or more animals, to a maximum of Willpower Bonus + SL. If the target animals are naturally docile, this Test may be uncontested, but it will generally be Opposed by the target’s Willpower.</p>
      <p>In combat, you may use Charm Animal when facing animals. If you succeed, any affected targets will not attack you this Round and you gain +1 Advantage. You may do this in successive rounds until you choose to stop or fail a Charm Test, after which the creature’s instincts take over and you have no further influence.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.121'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Climb (S)',
    name_detail: 'basic',
    content:
      `<p>The ability to ascend steep or vertical surfaces.</p>
      <p>If time isn’t an issue, and a climb is relatively easy, anyone with Climb Skill is automatically assumed to be able to climb any reasonably small height.</p>
      <p>For any other climbing, refer to page 165, which also handles Climbing during combat. You may even find yourself climbing large opponents, though whether that is prudent is debatable.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.121'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Consume Alcohol (T)',
    name_detail: 'basic',
    content:
      `<p>Your ability to handle alcohol without letting it cloud your judgment or render you senseless.</p>
      <p>After each alcoholic drink make a Consume Alcohol Test, modified by the strength of the drink. For each Test you fail, you suffer a –10 penalty to WS, BS, Ag, Dex, and Int, to a maximum of –30 per Characteristic. After you fail a number of Tests equal to your Toughness Bonus, you are Stinking Drunk. Roll on the following table to see what happens.</p>
      <table>
        <tr><th width="15%">1d10</th><th>Stinking Drunk</th></tr>
        <tr><td>1-2</td><td><b>‘Marienburgher’s Courage!’</b>: Gain a bonus of +20 to your Cool Skill.</td></tr>
        <tr><td>3-4</td><td><b>‘You’re My Besht Mate!’</b>: Ignore all your existing <i>Prejudices</i> and <i>Animosities</i> (see page 190).</td></tr>
        <tr><td>5-6</td><td><b>‘Why’s Everything Wobbling!’</b>: On your Turn, you can either Move or take an Action, but not both (see page 157).</td></tr>
        <tr><td>7-8</td><td><b>‘I’ll Take Yer All On!’</b>: Gain Animosity (Everybody!) (see page 190).</td></tr>
        <tr><td>9-10</td><td><b>‘How Did I Get here?’</b>: You wake up the next day, massively hungover, with little memory of what transpired. The GM and other players with you will fill in the embarrassing gaps if you investigate. Pass a Consume Alcohol Test or also gain a <i>Poisoned</i> Condition (see page 169)</td></tr>
      </table>
      <p>After not drinking for an hour, enact a <b>Challenging (+0) Consume Alcohol</b> Test. The effects of being drunk will wear off after 10–SL hours, with any Characteristic modifiers for being drunk lost over that time. After all effects wear off, enact another <b>Challenging (+0) Consume Alcohol</b> Test. You now gain a hangover, which is an Fatigued Condition that cannot be removed for 5–SL hours.</p>
      <p>You may expend 1 Resolve point to ignore the negative modifiers of being drunk until the end of the next round (see page 171).</p>`,
    source: 'Warhammer Fantasy RP 4E, p.121'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Cool (WP)',
    name_detail: 'basic',
    content:
      `<p>Cool allows you to remain calm under stress, resist fear when faced with horror, and stick to your convictions.</p>
      <p>Cool is generally used to resist other Skills — Charm, Intimidate, and similar — but you may also be required to make a Cool Test when faced with anything forcing you to do something you would rather not. Cool is also the primary Skill used to limit Psychology (see page 190).</p>`,
    source: 'Warhammer Fantasy RP 4E, p.121'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Dodge (Ag)',
    name_detail: 'basic',
    content:
      `<p>Dodge is your ability to avoid things, through ducking, diving, and moving quickly, and is used extensively to sidestep falling rocks, incoming weapons, unexpected traps, and the like.</p>
      <p>In combat, Dodge is generally used to resist attacks or avoid damage. Refer to <b>Chapter 5: Rules</b> for more on this.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Drive (Ag)',
    name_detail: 'basic',
    content:
      `<p>Drive lets you guide vehicles — most commonly simple carts and lumbering coaches, not to mention the more ‘experimental’ creations of the Imperial Engineers — along the roads of the Empire with as little incident as possible.</p>
      <p>  Under normal circumstances, if you possess the Drive Skill, there is no need to Test. If conditions are less than ideal — perhaps the road is in poor condition, or the weather is terrible — a Drive Test will be required. If you do not possess the Drive Skill, you may be required to make a Test to carry out even basic manoeuvres. An Astounding Failure (-6) on a Drive Test means something bad has happened. Roll on the following table:</p>
      <table>
        <tr><th width="15%">1d10</th><th>Result</th></tr>
        <tr><td>1-2</td><td><b>Snapped Harness</b>: One horse (or equivalent) breaks free; reduce speed accordingly.</td></tr>
        <tr><td>3-5</td><td><b>Jolted Carriage</b>: Passengers suffer 1 Wound and fragile cargos might be damaged.</td></tr>
        <tr><td>6-8</td><td><b>Broken Wheel</b>: Pass a Drive Test every round to avoid Crashing. Two-wheeled vehicles with a Broken Wheel Crash automatically.</td></tr>
        <tr><td>9-10</td><td><b>Broken Axle</b>: The vehicle goes out of control and Crashes.</td></tr>
      </table>
      <p><b>Crashing</b>: Occupants of Crashing vehicles usually suffer 2d10 Wounds modified by Toughness Bonus and Armour Points unless the vehicle was moving slowly (as determined by the GM). Crashed vehicles must be repaired by someone with an appropriate Trade Skill, such as Trade (Carpenter) or Trade (Cartwright). Spare wheels can be installed by anyone with a Drive Test or with an appropriate Trade Test.</p>
      <p>In combat, Drive may be used if circumstances allow — for instance, if the party is in a coach being raided by outlaws, and you wish to ram an enemy, or outrun them (see page 165).</p>`,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Endurance (T)',
    name_detail: 'basic',
    content:
      `<p>The Endurance Skill is called upon when you must endure hardship, withstand deprivation, sit without moving for long periods of time, or survive harsh environments. In particular, Endurance is Tested to resist or recover from various Conditions (see page 167) and helps you recover lost Wounds. Refer to <b>Chapter 5: Rules</b> for more on this.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Entertain (Fel)',
    name_detail: 'basic, grouped',
    content:
      `<p>Allows you to delight crowds with the spoken word, perhaps by singing, acting, or attempting a few jokes. A successful use of the Entertain Skill means you have entertained patrons near enough to hear you; the SL indicates how well you have done.</p>
      <p>In combat, it is unlikely that Entertain will be of much use, although you may come up with an interesting way to use Entertain (Acting) to confuse or mislead your opponents.</p>
      <p><b>Specialisations</b>: Acting, Comedy, Singing, Storytelling.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Evaluate (Int)',
    name_detail: 'advanced',
    content:
      `<p>Lets you determine the value of rare artefacts, unusual trade goods, and works of art. Everybody is assumed to know the relative worth of general items, but a successful use of the Evaluate allows you to identify the value of curious and unique items. A successful Evaluate Test may also alert you if the goods (or coins) you are studying are counterfeit — this Test will usually be Opposed by the forger’s SL on their Art or Trade Test. Your GM may apply modifiers based on just how rare or obscure the item is, or on your character’s particular expertise or background.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Gamble (Int)',
    name_detail: 'basic',
    content:
      `<p>Allows you to measure the likelihood that a bet will pay off, as well as successfully engage in various games of chance.</p>
      <p>To represent a gambling match, all players make a Gamble Test — applying any appropriate modifiers for familiarity with the game — and the player with the highest SL wins. On a tie, any lower scoring players drop out, and those remaining enact another Gamble Test, repeating this process until you have a winner.</p>
      <p>If you wish to influence the game through less honest mechanics, see Sleight of Hand.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Gossip (Fel)',
    name_detail: 'basic',
    content:
      `<p>You can quickly ferret out interesting and useful news, and spread rumours of your own. A successful Gossip Test means you have found out one useful piece of information, which your GM can impart to you, about the local area. Each SL either offers you an additional piece of information, or the chance to spread a rumour to a number of individuals equal to your Fellowship Bonus. The time required for a Gossip Test depends on how circumspect the players are being, and how busy the area is, as determined by the GM.</p>
      <p>It is unlikely that Gossip will be much use in combat, but if your attacker happens to be local, and you happen to know something really juicy…</p>`,
    source: 'Warhammer Fantasy RP 4E, p.123'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Haggle (Fel)',
    name_detail: 'basic',
    content:
      `<p>Haggle allows you to secure better deals when negotiating with others. In general, Haggle is used to see whether you do, or do not, make a good deal, most commonly with an <b>Opposed Haggle</b> Test. Specifically, it can be used when shopping to secure better prices. For information on this, refer to Chapter 11: Consumers’ Guide.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.123'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Heal (Int)',
    name_detail: 'advanced',
    content:
      `<p>You’ve been trained to deal with injuries and diseases. A successful
      Heal Test allows you to do one of the following:</p>
      <ul>
      <li>Diagnose an illness, infection, or disease.</li>
      <li>Treat a disease (see page 188).</li>
      <li>Heal wounds equal to your Intelligence Bonus + SL (Note: a patient can only benefit from one Heal roll after each encounter). If sterile liquids or appropriate poultices and dressings are used, no Infection will develop from the injury (see page 181).</li>
      <li>Staunch a <i>Bleeding</i> Condition, with each SL removing an extra <i>Bleeding</i> Condition.</li>
      </ul>
      <p> A Failed Heal Test can potentially cause Wounds if your Intelligence Bonus + SL totals less than 0. On an Astounding Failure, your patient will also contract a Minor Infection (see page 187).</p>
      <p>If administering to someone who has a disease, a successful Heal Test ensures that you do not contract the disease for that day. Each SL also prevents one other character encountering the patient that day from catching the disease. For each full day the patient spends resting under your care, the duration of the disease is reduced by one, to a minimum of one. For more information see <b>Disease and Infection</b> in Chapter 5: Rules.</p>
      <p>Certain injuries require Surgery; see the Surgery Talent for details. For more information on healing wounds, refer to Injury in Chapter 5: Rules.</p>
      <p>Your GM may apply modifiers to Heal Tests to reflect the virulence of the disease, the suitability of conditions and materials, or the stress of your circumstances. If healing during combat, Tests will likely be <b>Challenging (+0)</b> at the very least.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.123'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Intimidate (S)',
    name_detail: 'basic',
    content:
      `<p>Allows you to coerce or frighten sentient creatures. The precise manner of initiating an Intimidate Test depends on context: while it is generally accompanied by an overt threat, sometimes a subtle implication or even a look is enough. Intimidate is almost always Opposed by your target’s Cool Skill; if successful, you can intimidate a number of targets up to your Strength Bonus + SL. Each will react to Intimidate based on their individual personalities and how successful you were in menacing them, but in all cases, they will back down or move out of the way and will not speak out against you, or they will alternatively accept combat is the only way forward and prepare their weapons.</p>
      <p>In combat, you cause Fear (see page 190) in all Intimidated targets. You may also use your Intimidate Skill instead of Melee when defending against those afraid of you, causing the Intimidated parties to back away from the fight with your will and posture alone. Further, with your GM’s approval, you may use Intimidate to ‘attack’ such targets, issuing specific commands, such as ‘drop your weapons’ or ‘get out of here!’. However, if you fail any of these subsequent Intimidate Tests, you no longer Intimidate (or cause Fear) in affected opponents. With your GM’s permission you may try to Intimidate them again in a later Round, but this will incur a negative modifier, as they are less likely to fear you having seen through your bravado once already.</p>
      <p><b>Example</b>: <i>Facing a group of footpads, Svetlana the Strong rolls 4 SL on her Intimidate Test. Combined with her SB of 5, this means she can affect up to 9 targets, more than enough to impact all three footpads who now Fear Svetlana. As she has won by 3 SL, she gains +1 Advantage point until the end of her next turn. In the next round, she ‘attacks’ the footpads using her Intimidate, intending to scare them into leaving her be. However, she fails the Test, and the footpads realise they outnumber her, and are armed…</i></p>`,
    source: 'Warhammer Fantasy RP 4E, p.123'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Intuition (I)',
    name_detail: 'basic',
    content:
      `<p>The Intuition Skill allows you to get a feel for your surroundings, leading you to notice when something is wrong, and gives you a sense of when people may be hiding something from you. A successful use of the Intuition Skill gives you subtle or implicit intelligence relating to your environment, determined by your GM. This may be information such as whether someone believes what they are saying, what the general attitude is towards the local noble, or if the helpful local’s motives are as pure as they seem. If someone is actively trying to hide their intent, they may resist your Intuition with Cool or Entertain (Acting).</p>
      <p>In combat, a successful Intuition Test may be used to give you +1 Advantage as you weigh the environment and your opponents. You may continue building Advantage in subsequent turns providing you are able to observe your targets and are not interrupted (such as being attacked); you may gain a maximum Advantage equal to your Intelligence Bonus in this manner.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.124'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Language (Int)',
    name_detail: 'advanced, grouped',
    content:
      `<p>The Language Skill grants you access to extra languages beyond your native tongue. All characters are automatically assumed to be able to speak ‘Reikspiel’ — the language of the Empire — and their native language (if your character has one different to Reikspiel), without ever having to Test. If your game is not set in the Empire, replace Reikspiel with the local language.</p>
      <p>If you possess a Language Skill, you are generally able to make yourself understood in that language, or to understand simple concepts. You will be asked to Test your Language Skill when a particularly difficult concept must be conveyed, or an obscure dialect or vocabulary is employed.</p>
      <p><b>Note</b>: Language (Magick) is used to cast spells and may occasionally be Tested, with… unpleasant consequences if failed. Refer to Chapter 8: Magic, for more on this.</p>
      <p><b>Specialisations</b>: Battle Tongue, Bretonnian, Classical, Guilder, Khazalid, Magick, Thief, Tilean.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.124'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Leadership (Fel)',
    name_detail: 'basic',
    content:
      `<p>A measure of your ability to lead others and command their respect. While most often associated with martial situations, a resolute leader can quickly direct a fast response to a fire or other such calamity, and nobles use the Skill frequently to command their lessers.</p>
      <p>A successful Leadership Test allows you to issue orders to a number of targets equal to your Fellowship Bonus + SL. If the targets are your natural subordinates — a noble commanding serfs, or a sergeant commanding his troops — commands are usually unopposed. If there is no natural hierarchy in place, or the order is particularly challenging — such as ordering your soldiers to charge a Hydra head on — the Test is Opposed by your targets’ Cool.</p>
      <p>In combat, you may use Leadership to encourage your subordinates. A successful Leadership Test confers a bonus of +10 to all Psychology Tests until the end of the next round (see page 190).</p>
      <p>Further, Leadership can be used to transfer Advantage to allies able to hear you; following a successful Leadership Test, you may transfer an Advantage to one ally of your choice, plus a further +1 Advantage per SL scored, which can again go to any allies of your choice within earshot.</p>
      <p><b>Example</b>: <i>Lord Ludwig von Schemp has been watching his two bodyguards discourse with some ruffians for three Rounds, using his Intuition Skill to build up 3 Advantage. Feeling it is going nowhere, he issues a peremptory order to attack the ringleader; passing his Leadership Test with 5 SL, he gives one bodyguard 2 of his Advantage, and the remaining bodyguard 1 Advantage, hoping this will bring a swift end to proceedings.</i></p>`,
    source: 'Warhammer Fantasy RP 4E, p.126'
  },
  {
    type: 'skill',
    category: 'skill',
    name: 'Lore (Int)',
    name_detail: 'advanced, grouped',
    content:
      `<p>Having a Lore Skill means you’ve been formally taught, or have somehow otherwise learned, a branch of specialist knowledge. Possessing a Lore Skill means you are broadly knowledgeable in the specialisation and don’t need to make a Test in order for the GM to supply you with relevant facts. If you are seeking specific, less well-known information, you will be required to make a Lore Test, modified by how obscure the information is, with the SL indicating how much detail you recall.</p>
      <p>In combat, successful Lore Tests may afford you +1 Advantage if appropriate (with your GM’s approval). For instance, Lore (Geology) may give you an edge if fighting in a rocky cavern, or Lore (Engineering) may help you if fighting a foe armed with a complex mechanical device. You may continue building Advantage in subsequent turns providing the circumstances are correct (as determined by the GM) and you are not interrupted; you may gain a maximum Advantage equal to your Intelligence Bonus in this manner.</p>
      <p><b>Specialisations</b>: Engineering, Geology, Heraldry, History, Law, Magick, Metallurgy, Science, Theology.</p>`,
    source: 'Warhammer Fantasy RP 4E, p.126'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
  {
    type: 'skill',
    category: 'skill',
    name: '',
    name_detail: '',
    content:
      ``,
    source: 'Warhammer Fantasy RP 4E, p.122'
  },
];

export default skills_data;