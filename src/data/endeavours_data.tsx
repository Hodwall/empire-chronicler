const endeavours_data = [
  {
    type: 'endeavour',
    category: 'common',
    name: 'Animal Training',
    content: `You spend time training one of your animals. Make an <b>Average (+20) Animal Training</b> Test. If successful, add one skill to your animal from the <i>Trained</i> Creature Trait (see page 342).`,
    source: 'Warhammer Fantasy RP 4E, p.196'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Banking',
    content:
      `This Endeavour allows you to store funds for future use. As noted in Money to Burn, all coin remaining at the end of your ‘Between Adventures’ phase is lost before the next adventure begins unless it is saved with this Endeavour. So, if you have a lot of money spare it may be worth a trip to the bank. If you are using a Banking Endeavour to retain your money, you must first decide whether to save your money by investing it with a reputable banking institution, or to stash it somewhere less secure.
      </br>
      <b>Investing:</b> You must be of the Gold and Silver social tiers to save with a banking house. Your money will be reasonably safe and it should accrue interest. When undertaking a Banking Endeavour to deposit money in a bank, determine the interest rate of your account, by choosing a number between 1 and 10 (alternatively you may simply roll 1d10). This is the rate of interest you will accrue, and also how risky the investment is. Withdrawing funds requires another Banking Endeavour. This may take place immediately after the initial Endeavour, or after subsequent adventures have occurred. Roll 1d100: if you roll equal to or less than your rate of interest, the venture has gone bankrupt and you have lost all of your money. If you roll over the interest rate, you receive your initial funds, plus the interest accrued.
      </br>
      <b>Stashing:</b> All characters may choose to stash their loot. This is a risky strategy, involving hiding it on your person, in your mattress, or burying it somewhere. Stashed money never accrues any interest. Players may withdraw money from a stash before the start of an adventure, without undertaking an Endeavour. Roll 1d100: if you roll 10 or lower, your stash has been found and you have lost all your money, otherwise you recieve your initial funds. If you successfully withdraw your funds they will be available for you when you start your next adventure, in addition to any funds secured via an Income Endeavour`,
    source: 'Warhammer Fantasy RP 4E, p.196'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Changing Career',
    content: `In a society as rigidly hierarchical as the Empire, changing Careers may require grit and perseverance. Taking time to forge the right connections, and learn what is expected of you, can help, significantly. Assuming you GM agrees, and you have completed VI 196 you current Career, you can move to any Career Level that fits the story of your Character for free. If you have not completed your current Career, the change costs 100 XP. The time spent on this Endeavour represents making the appropriate introductions, doling out bribes, acquiring permits and licences, advertising, and similar activities`,
    source: 'Warhammer Fantasy RP 4E, p.196'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Comission',
    content:
      `So, you wish to own one of Von Meinkopt’s legendary repeating pistols? Or a custom helm, with a personalised crest representing your epic victories? The <i>Commission</i> Endeavour allows you to acquire unusual or highly specialized items that are never simply ‘stocked’ in the shops of the Empire. It also allows for you to arrange for the creation of unique items. Such things take time, though…
      </br>
      If you are seeking an item with an Exotic rarity and know a source capable of acquiring or manufacturing it, then undertake this Endeavour, spend the necessary funds, and place your order. The item will then be ready for collection after your next adventure. A character can only commission a single Exotic item per Endeavour; acquiring further items, will require undertaking further <i>Commission</i> Endeavours. If you are unaware of an appropriate source for their item, you will first have to undertake the <i>Consult an Expert</i> Endeavour.`,
    source: 'Warhammer Fantasy RP 4E, p.197'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Consult an Expert',
    content:
      `The Old World is replete with ancient and arcane knowledge, yet this information is not readily available on some magical box in your pocket. If you want to seek out some piece of obscure arcana, you must first seek out an expert. You may undertake the Consult an Expert Endeavour either to facilitate another Endeavour for example: <i>Commission</i>, Training, or <i>Unusual Learning</i> Endeavours), or to secure a piece of specific knowledge.
      </br>
      There are two stages to this Endeavour: locating the expert, then consulting.
      </br>
      First, you must locate your expert (this stage may be skipped with the GM’s permission if you have already identified an appropriate expert during your adventures). Attempt a <b>Challenging (+0) Gossip Test</b> (the Difficulty of this Test will vary according to the size of the settlement where your character is currently living). If you succeed, you have located your expert. If you fail, you have located the loudest self-proclaimed specialist in your location, and the GM is given free rein to vary the quality or accuracy of the advice procured. You can of course refuse to deal with this somewhat suspect source, but you never know if you might have found a diamond in the rough. GMs are contrary like that sometimes.
      </br>
      Once successfully locate an expert, you then need to convince them to talk with you. Depending on what you wish to know, this may require no more than a <b>Simple Charm Test</b> or a modest donation to the local Temple of Verena. In more extreme cases, you may have to commit to performing one or more Favours (see Do Me A Favour!) which may be called in during a future adventure, or ‘bought off ’ by spending Endeavours between future adventures. The level of Favour owed depends on the complexity — and danger — of the information you want as determined by the GM.
      </br>
      The precise nature of the information gleaned depends on the expert consulted and what you seek to know. Academics will know the origins and full history on a subject with which they are familiar; wizards of the Colleges of Magic in Altdorf understand the history of magic and various mystical objects, particularly aspects relevant to their own order; an Apothecary General can identify even the rarest poison; a Verenan scholar may have information relating to any number of historical incidents. In short, the expert’s background will influence how the knowledge is presented, and with which biases.
      </br>
      In addition to any specific information the GM imparts to their player, a successful Consult an Expert Endeavour used to seek out knowledge (and not to facilitate another Endeavour) gives you an Expert Reroll (mark this on your character sheet under Notes). This reroll may only be used on a Test specifically relating to the lore revealed and must be used before the end of your next adventure.`,
    source: 'Warhammer Fantasy RP 4E, p.197'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Crafting',
    content:
      `Rather than browse shops or commissioning someone else to do the hard work, you can fashion your own trappings. <i>Crafting</i> allows you to make any trapping from <b>Chapter 11: Consumers’ Guide</b> (or anything else the GM allows) if you have the correct Trade Skills. To do this, you require appropriate Trade Tools, raw materials, and access to an appropriate workshop. In general, the raw materials to create the trapping of your choice will cost a quarter of the trapping’s list price, and must be purchased before <i>Crafting</i> begins (with an Availability as determined by the GM); the GM may rule the raw materials are cheaper or more expensive according to the trapping to be created, and the nature of the raw materials required.
      </br>
      To craft the trapping, attempt an Extended Trade Test, with a Difficulty set by the GM, typically using the Trapping’s Availability as a loose guide.
        <table>
        <tr><th>Availability</th><th>Difficulty</th></tr>
        <tr><td>Common</td><td>Average (+20)</td></tr>
        <tr><td>Scarce</td><td>Challenging (+0)</td></tr>
        <tr><td>Rare</td><td>Difficult (-10)</td></tr>
        <tr><td>Exotic</td><td>Very Hard (-30)</td></tr>
        </table>np
      The number of SL required to succeed at the Test is also set by
      the GM, using the listed price for the trapping in the Consumers’
      Guide as a reference.
      </br>
      The SL required is further modified by the Qualities or Flaws you work into the trapping. Each Flaw halves the SL required, and each Quality adds +5 (worked out after halving for Flaws). Each Endeavour you spend <i>Crafting</i> allows you to make one roll towards your Extended Test. Unfinished work can be kept in whatever you have that amounts to lodgings, or carried around with you as you adventure, should that be possible
        <table>
        <tr><th>List Price</th><th>SL</th></tr>
        <tr><td>Brass</td><td>5</td></tr>
        <tr><td>Silver</td><td>10</td></tr>
        <tr><td>Gold</td><td>15+</td></tr>
        </table>`,
    source: 'Warhammer Fantasy RP 4E, p.197'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Income',
    content:
      `This Endeavour covers the many ways you can make money between your bouts of adventuring. The majority will most likely work in a recognized profession — bounty hunters hunt bounties, riverwardens ward rivers, troll slayers slay Trolls — others may rely on a lucrative skill. Wealthier characters, such as Nobles and Merchants, might collect a stipend by (briefly) indulging their family, or collecting interest on their investments and business ventures. Roguish types have any number of means to acquire funds, though it’s best not to ask for any details.
      </br>
      You should briefly narrate exactly how your character makes money. This is intended more for fun background detail than to have any direct consequences, though GMs may well gather useful or sinister ideas for future use depending on what you describe. You then acquire the income you’ll start your next adventure with, which is your standard income determined by your Status (see page 51). Certain results on the <i>Events Table</i> on page 193 may directly affect your income. The money you get from an Income Endeavour is given to you after your money from the last adventure is spent (see <i>Money to Burn</i>).
      </br>
      In addition to acquiring funds for later use, if you are in the third or fourth level of a Career and undertake this Endeavour, you automatically maintain your standing in your career. See With Great Power… on page 195 for details.`,
    source: 'Warhammer Fantasy RP 4E, p.198'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Invent!',
    content:
      `Invent allows you to invent new trappings. This is done in two stages: Plan and Build. To Plan your new trapping, you first decide the trappings you wish to combine to create your invention. As examples, Pistols have been combined with other Pistols to create Repeating Pistols, and Pigeons and been combined with Bombs to create Pigeon Bombs. Let your imagination go wild. Once you have your plan, it’s time to make the blueprints, which costs 1 Endeavour to attempt. Take a <b>Trade (Engineer)</b> Test, with a Difficulty set by how outlandish your proposed trapping combination is as determined by the GM. If you succeed, you are ready to start Building. Each SL scored adds +1 SL to the attempt to build your invention, as the plans are well laid out and easy to follow.
      </br>
      To Build the invention, you must either undertake a <i>Crafting</i> or <i>Commission</i> Endeavour. If it’s <i>Crafting</i>, you are building the item yourself, and you must have the appropriate Skills to do so for the trappings being combined; so, if you were combining Pigeons with Bombs, you would need Animal Training and Trade (Explosives). The Difficulty to craft the invention is always Very Hard (–30), and the SL is set as normal. The raw materials needed to build the invention cost twice the listed price for the trappings being combined, and have an Availability rating equal to the most scarce of the trappings used in your invention. If you <i>Commission</i> the invention, you will likely need to undertake a <i>Consult an Expert</i> Endeavour first to find someone with the required Skills. That done, follow the <i>Commission</i> Endeavour as normal; it costs six times the listed price for the trappings to be combined to commission the work. The exact rules for your new invention are left to your GM to finalise.`,
    source: 'Warhammer Fantasy RP 4E, p.199'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Training',
    content:
      `The <i>Training</i> Endeavour allows you to train in a Skill or Characteristic outside of your Career, treating it as if it were in- Career. In addition to the normal XP cost, you must also pay money to the tutor. Training for Basic Skills and all Characteristics costs XP+1d10 brass pennies , where XP is the number of XP it costs to buy the Advance. Tutoring in all Advanced Skills costs double that amount. For more, see Advances, see page 43.
      </br>
      You should be able to find a tutor for most skills, certainly in a city-state like Altdorf, but some particularly unusual skills may require you seek out the right instructor, likely by using the <i>Consult an Expert</i> Endeavour — ‘Professionals’ who can teach you how to properly pick a lock generally don’t advertise, after all. Other skills, especially Lore Skills, often require an institution of learning, and some are flat out forbidden in the Empire. Finding a tutor capable (and willing) to instruct someone in proscribed matters — such as those relating to the Ruinous Powers or Necromancy — may be particularly dangerous, and perhaps an adventure to even source such an individual. Such tutors will also ask for far more than the ‘going rate’ for tutoring and will likely require a Significant Favour (see <b>Do Me A Favour!</b>).`,
    source: 'Warhammer Fantasy RP 4E, p.199'
  },
  {
    type: 'endeavour',
    category: 'common',
    name: 'Unusual Learning',
    content:
      `It is one thing to pick up a Skill that can be readily practised, quite another to learn something for which one may have no aptitude at all. This Endeavour allows you to attempt to learn a Talent outside of your Career. There is no guarantee this attempt will be successful, meaning there is a good chance you will fail to learn the Talent you hope to acquire, expending XP and money to no avail.
      </br>
      You can only learn a Talent if you have an appropriate tutor. In most big cities, this will not be a problem, but if the Talent is particularly obscure, or you are far from a large city, the GM may require you complete a <i>Consult an Expert</i> Endeavour first.
      </br>
      Once you have acquired a tutor, the fee to train the Talent is 2d10 shillings per 100 XP it costs to purchase the Talent. If you pay this fee, attempt a <b>Hard (-20)</b> Test using the Characteristic or Skill most relevant to the Talent as determined by the GM. If you succeed, you have learned the Talent. If not, you have failed this time but can try again with a future Endeavour and gain a +10 modifier for each failed attempt.`,
    source: 'Warhammer Fantasy RP 4E, p.199'
  },
  {
    type: 'endeavour',
    category: 'class',
    name: 'Combat Training (Rangers, Warriors)',
    content:
      `Warriors too long from the field can find their fighting skills lose their edge. Hard regular training not only mitigates this, it can add an extra advantage when the time comes. If you undertake this Endeavour, you spend your days training with the weapons you know, honing your skills for the day when it matters most.
      </br>
      After undertaking this Endeavour, attempt a <b>Challenging (+0)</b> Test using either a Melee or Ranged Skill. If you succeed, you may reverse a Test with the associated Skill once during your next adventure. Note this on your character sheet. You can enact this Endeavour multiple times if you wish.`,
    source: 'Warhammer Fantasy RP 4E, p.200'
  },
  {
    type: 'endeavour',
    category: 'class',
    name: 'Foment Dissent (Burghers, Peasants)',
    content:
      `If you are looking to sow civil unrest, undertake the <i>Foment Dissent</i> Endeavour. By talking with local citizens, leading meetings, and involving yourself, you can direct conversations to slowly feed anger and resentment towards a specific individual, group, or institution. But this takes time, so <i>Fomenting Dissent</i> takes two Endeavours to attempt (and will also count as an <i>Income</i> Endeavour if you are in the Agitator career).
      </br>
      To undertake the Endeavour, you must first attempt an <b>Average (+20) Gossip</b> Test to understand the local movers and shakers. If you succeed, attempt a <b>Charm</b> Test with the Difficulty determined by how unpopular the target may be. Rousing anger against an oppressive noble may be an <b>Easy (+40)</b> test, while raising a mob to protest the good work of a Shallyan hospice may be <b>Hard (–20)</b>. If you fail either of these tests, the Endeavour fails.
      </br>
      If successful, you will find it easier to invoke the wrath of crowds upon your chosen target. During your next adventure, you can attempt a <b>Charm</b> Test to gather a rioting mob to accost the target, with the difficulty determined by the GM according to how well-planned the mob-to-be is. A single success means you gather enough angered townsfolk to confront the target, shouting insults, demanding justice, throwing rotting vegetables, and generally accosting the focus of their ire. An Impressive or Astounding Success may lead to uncontrollable lynch mobs, or even attempted burnings!
      </br>
      Failure means folk have no stomach for wrath; failing by several SL may mean the target, or their sympathisers, become aware of your actions… </br> Once you have the ear of a mob (successfully undertaking this Endeavour), you can attempt to rally the mob against a different target during an adventure, although this is more difficult, and the Difficulty of the <b>Charm</b> Test is two levels higher.`,
    source: 'Warhammer Fantasy RP 4E, p.200'
  },
  {
    type: 'endeavour',
    category: 'class',
    name: 'The Latest News (Rangers, Riverfolk)',
    content: `This Endeavour allows you to learn the latest news from afar. Attempt a <b>Challenging (+0) Gossip</b> Test. If you succeed, you learn an interesting rumour; each SL adds another rumour, and they may even be connected to your upcoming adventure. If you fail particularly badly (an Impressive Failure) you learn something false you are convinced is true; to allow this, the GM may make this roll in secret on your behalf.`,
    source: 'Warhammer Fantasy RP 4E, p.201'
  },
  {
    type: 'endeavour',
    category: 'class',
    name: 'Reputation (Academics, Burghers, Courtiers)',
    content:
      `Money talks, as they say. If you are looking to exert your influence and elevate your Status, you had best be willing to spread your wealth around. Any boost to your reputation will fade once the coins stop flowing, so you should exploit this advantage while it lasts.
      </br>
      Characters can spend money to increase their Standing by +1 for the next adventure, after which the bonus fades. This costs your maximum Earning income (see page 52) — so, if you would normally earn 4d10 pennies, it costs 40d — and requires a <b>Challenging (+0) Career</b> Skill Test. If you succeed, your Standing increases by +1. If you score an Astounding Success (+6), it increases by +2. If you fail, you have just wasted your money. If you score an Astounding Failure (–6), your toadying has so infuriated your peers, your standing decreases by -1 (to a minimum of 0) for the entire duration of your next adventure. `,
    source: 'Warhammer Fantasy RP 4E, p.201'
  },
  {
    type: 'endeavour',
    category: 'class',
    name: 'Research Lore (Academics)',
    content:
      `This Endeavour allows you to seek greater knowledge concerning a specific subject, such as the site of a battle, a famed historical event, or an individual. The character must have access to an appropriate storehouse of lore, such as a library, the annals of a Dwarf Hold, the records of a Guild, or a Temple of Verena.
      </br>
      Attempt an <b>Average (+20) Lore</b> Test, using the appropriate Lore Specialisation for the knowledge you seek. If you do not have the correct Lore Specialisation and are literate, you can still attempt to learn something, but it will take a <b>Difficult (–10) Intelligence</b> Test. If you succeed, you learn one piece of interesting, useful, or hidden knowledge about the subject researched; each SL adds another piece of relevant information. If you fail particularly badly (an Impressive or Astounding Failure)) you learn something false that you are convinced is true; to facilitate this, the GM may want to make this role in secret on your behalf.`,
    source: 'Warhammer Fantasy RP 4E, p.201'
  },
  {
    type: 'endeavour',
    category: 'class',
    name: 'Study a Mark',
    content:
      `You use this Endeavour to observe a potential target and gain advantages during future criminal enterprises. A Charlatan may study a merchant in order to better impersonate them during a future scam, or a Grave Robber may linger about a Temple of Morr, watching the coming and going of the priests to get an idea of their practices and their Garden of Morr’s layout.
      </br>
      Attempt a <b>Challenging (+0) Perception</b> Test, though the difficulty may be modified for especially easy or difficult marks. If you succeed, you may reverse a Test concerning your mark once during your next adventure. Note this on your character sheet. You can enact this Endeavour multiple times if you wish. Further, the GM should provide information (or disinformation!) concerning your mark according to the SL you scored`,
    source: 'Warhammer Fantasy RP 4E, p.201'
  },
];

export default endeavours_data;
