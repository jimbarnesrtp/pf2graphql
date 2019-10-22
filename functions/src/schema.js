const spelllist = require('./spells.js')
const monList = require('./monsters.js')
const conList = require('./conditions.js')
const traitList = require('./traits.js')
const featList = require('./feats.js')
const focusList = require('./focusspells.js')
const ritualList = require('./rituals.js')
const advGear = require('./advgear.js')
const armors = require('./armors.js')
const weapons = require('./weapons.js')
const shields = require('./shields.js')
const alchy = require('./alchemicalitems.js')
const cons = require('./consumables.js')
const graphql = require('graphql')


const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql

const traitType = new GraphQLObjectType({
  name: 'Trait',
  fields: {
    name: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    }
  }
})

const gearType = new GraphQLObjectType({
  name: "AdventuringGear",
  fields: {
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    frequency: {
      type: GraphQLString
    },
    effect: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },

  }
})

const featType = new GraphQLObjectType({
  name: 'Feat',
  fields: {
    name: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    traits: {
      type: GraphQLList(GraphQLString)
    },
    link: {
      type: GraphQLString
    },
    prereq: {
      type: GraphQLString
    },
    benefits: {
      type: GraphQLString
    },
    text: {
      type: GraphQLList(GraphQLString)
    }
  }
})
const spellType =  new GraphQLObjectType({
  name: 'Spell',
  fields: {
    name: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    spellText: {
      type: GraphQLString
    },
    tradition: {
      type: GraphQLList(GraphQLString)
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    source: {
      type: GraphQLString
    },
    range: {
      type: GraphQLString
    },
    duration: {
      type: GraphQLString
    },
    target: {
      type: GraphQLString
    },
    cast: {
      type: GraphQLString
    },
    savingThrow: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    area: {
      type: GraphQLString
    }
  }
})

const focusSpellType =  new GraphQLObjectType({
  name: 'FocusSpell',
  fields: {
    type: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    source: {
      type: GraphQLString
    },
    range: {
      type: GraphQLString
    },
    duration: {
      type: GraphQLString
    },
    targets: {
      type: GraphQLString
    },
    cast: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    area: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    }
  }
})

const ritualType =  new GraphQLObjectType({
    name: 'Ritual',
    fields: {
      name: {
        type: GraphQLString
      },
      level: {
        type: GraphQLInt
      },
      link: {
        type: GraphQLString
      },
      traits: {
        type: new GraphQLList(traitType),
        resolve(source,args){
          return traitList.traits.filter(trait => {
            return source.traits.includes(trait.name);
        })
        }
      },
      source: {
        type: GraphQLString
      },
      range: {
        type: GraphQLString
      },
      duration: {
        type: GraphQLString
      },
      targets: {
        type: GraphQLString
      },
      cast: {
        type: GraphQLString
      },
      area: {
        type: GraphQLString
      },
      text: {
        type: GraphQLString
      },
      cost: {
        type: GraphQLString
      },
      secondarycasters: {
        type: GraphQLInt
      },
      primarycheck: {
        type: GraphQLString
      },
      secondarychecks: {
        type: GraphQLString
      },
      criticalsuccess: {
        type: GraphQLString
      },
      success: {
        type: GraphQLString
      },
      failure: {
        type: GraphQLString
      },
      criticaldailure: {
        type: GraphQLString
      },
      heightened5th: {
        type: GraphQLString
      },
      heightened6th: {
        type: GraphQLString
      },
      heightened7th: {
        type: GraphQLString
      },
      heightened8th: {
        type: GraphQLString
      },
      heightened9th: {
        type: GraphQLString
      },
      heightened10th: {
        type: GraphQLString
      }

    }
  })

const monsSellType = new GraphQLObjectType({
  name: 'spells',
  fields: {
    name: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    }
  }
})

const actionType = new GraphQLObjectType({
  name: 'action',
  fields: {
    name: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    action: {
      type: GraphQLString
    },
    Trigger: {
      type: GraphQLString
    },
    Effect: {
      type: GraphQLString
    }
  }
})

const attackType = new GraphQLObjectType({
  name: 'attack',
  fields: {
    name: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    damage: {
      type: GraphQLString
    }
  }
})

const conditionType = new GraphQLObjectType({
  name: 'condition',
  fields: {
    name: {
      type: GraphQLString
    },
    text: {
      type: GraphQLList(GraphQLString)
    },
    source: {
      type: GraphQLString
    }
  }
})

const armorType = new GraphQLObjectType({
  name: 'armor',
  fields: {
    name: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    armorCategory: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    acBonus: {
      type: GraphQLString
    },
    dexCap: {
      type: GraphQLString
    },
    checkPenalty: {
      type: GraphQLString
    },
    speedPenalty: {
      type: GraphQLString
    },
    strength: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    group: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    text: {
      type: GraphQLString
    }
    
  }
})

const magicArmorType = new GraphQLObjectType({
  name: 'MagicArmor',
  fields: {
    name: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    text: {
      type: GraphQLString
    }
  }
})

const namedMagicArmorType = new GraphQLObjectType({
  name: 'NamedMagicArmor',
  fields: {
    name: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    text: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    usage: {
      type: GraphQLString
    }
  }
})


const materialArmorType = new GraphQLObjectType({
  name: 'ArmorMaterial',
  fields: {
    name: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    craftrequirements: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    }
  }
})

const specializationType = new GraphQLObjectType({
  name: 'weaponspecializations',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    }
  }
})


const meleeType = new GraphQLObjectType({
  name: 'MeleeWeapon',
  fields: {
    name: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    damage: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    hands: {
      type: GraphQLInt
    },
    group: {
      type: GraphQLString
    },
    weaponTraits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.weaponTraits.includes(trait.name);
      })
      }
    },
    source: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    specialization: {
      type: specializationType,
      resolve(source,args) {
        return weapons.critSpecialization.filter(spec => {
          return source.group == spec.name
        })[0]
      }
    }
    
  }
})

const rangeType = new GraphQLObjectType({
  name: 'rangeWeapon',
  fields: {
    name: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    damage: {
      type: GraphQLString
    },
    range: {
      type: GraphQLString
    },
    reload: {
      type: GraphQLInt
    },
    bulk: {
      type: GraphQLString
    },
    hands: {
      type: GraphQLString
    },
    group: {
      type: GraphQLString
    },
    weaponTraits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.weaponTraits.includes(trait.name);
      })
      }
    },
    source: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    specialization: {
      type: specializationType,
      resolve(source,args) {
        return weapons.critSpecialization.filter(spec => {
          return source.group == spec.name
        })[0]
      }
    }
    
  }
})


const baseMagicWeaponType = new GraphQLObjectType({
  name: 'basemagicweapon',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    source: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    usage: {
      type: GraphQLString
    }
    
  }
})

const materialWeaponType = new GraphQLObjectType({
  name: 'WeaponMaterial',
  
  fields: {
    name: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    craftRequirements: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    usage: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    }
  }
})


const magicWeaponType = new GraphQLObjectType({
  name: 'MagicWeapon',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    damage: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    source: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    usage: {
      type: GraphQLString
    },
    savingthrow: {
      type: GraphQLString
    },
    hands: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    frequency: {
      type: GraphQLString
    },
    trigger: {
      type: GraphQLString
    },
    effect: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    craftrequirements: {
      type: GraphQLString
    },
    requirements: {
      type: GraphQLString
    }
    
  }
})

const shieldType = new GraphQLObjectType({
  name: 'shield',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    acBonus: {
      type: GraphQLString
    },
    speedPenalty: {
      type: GraphQLString
    },
    hardness: {
      type: GraphQLInt
    },
    hp_bt: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    }
  }
})

const shieldMaterialType = new GraphQLObjectType({
  name: 'shieldmaterial',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    bulke: {
      type: GraphQLString
    },
    craftrequirements: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    usage: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    }
    
  }
})


const specificShieldType = new GraphQLObjectType({
  name: 'specificshield',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    price: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    usage: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    frequency: {
      type: GraphQLString
    },
    trigger: {
      type: GraphQLString
    },
    requirements: {
      type: GraphQLString
    },
    effect: {
      type: GraphQLString
    },
    craftrequirements: {
      type: GraphQLString
    }
    
    
  }
})

const bombType = new GraphQLObjectType({
  name: 'bomb',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    usage: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    }
  }
})

const elixirType = new GraphQLObjectType({
  name: 'elixir',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    usage: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    benefit: {
      type: GraphQLString
    },
    drawback: {
      type: GraphQLString
    }
  }
})

const poisonType = new GraphQLObjectType({
  name: 'poison',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    usage: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    savingthrow: {
      type: GraphQLString
    },
    onset: {
      type: GraphQLString
    },
    maximumduration: {
      type: GraphQLString
    },
    stage1: {
      type: GraphQLString
    },
    stage2: {
      type: GraphQLString
    },
    stage3: {
      type: GraphQLString
    }
  }
})

const toolType = new GraphQLObjectType({
  name: 'tool',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    usage: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    }
  }
})

// TODO add ammunition, oil, other, potions, talismans


/*      

** AMMUNITION**

"name": "Storm Arrow",
    "link": "https://2e.aonprd.com/Equipment.aspx?ID=169",
    "category": "ammunition",
    "level": 9,
    "price": " 130 gp",
    "traits": ["Air", "Consumable", "Electricity", "Evocation", "Magical"],
    "text": "The head of this arrow is made from gleaming copper. When an activated  storm arrow  hits a target, it is buffeted by raging winds and struck by a bolt of lightning that deals 3d12 electricity damage and the target must attempt a DC 25 Reflex saving throw. If this arrow is shot from a weapon with a  shock  property rune, the save DC increases to 27, though the attack doesn\u2019t benefit from the  shock  property rune itself.",
    "source": "Core Rulebook pg. 560",
    "ammunition": "arrow",
    "actions": "Single Action",
    "activate": " Interact",
    "criticalsuccess": " The foe is unaffected.",
    "success": " The foe takes half damage and isn\u2019t affected by the wind.",
    "failure": " The foe takes full damage and is buffeted by winds for 1 round, taking a \u20132 circumstance penalty to ranged attack rolls and a \u201310-foot circumstance penalty to its fly Speed.",
    "criticalfailure": " As failure, but the foe takes double damage." 

  *** OIL ***
        "name": "Oil of Repulsion",
    "link": "https://2e.aonprd.com/Equipment.aspx?ID=180",
    "category": "oil",
    "level": 11,
    "price": " 175 gp",
    "traits": ["Abjuration", "Consumable", "Magical", "Oil"],
    "text": "This oil contains magnetically charged iron filings repelled into opposite ends of the vial. For 1 minute after you apply this oil to armor, any creature that hits you with a melee Strike must attempt a DC 28 Fortitude save with the following effects.",
    "source": "Core Rulebook pg. 562",
    "usage": " held in 2 hands",
    "actions": "Single Action",
    "activate": " Interact",
    "success": " The creature is unaffected.",
    "failure": " The creature is pushed up to 10 feet away from you (the GM determines the direction).",
    "criticalfailure": " As failure, and the creature is also knocked prone. "

**8 OTHER ***
    "name": "Holy Water",
    "link": "https://2e.aonprd.com/Equipment.aspx?ID=245",
    "category": "other",
    "level": 1,
    "price": " 3 gp",
    "bulk": " L",
    "traits": ["Consumable", "Divine", "Good", "Splash"],
    "text": "This vial contains water blessed by a good deity. You activate a vial of  holy water  by throwing it as a Strike. It\u2019s a simple thrown weapon with a range increment of 20 feet. Unlike an alchemical bomb, it doesn\u2019t add the manipulate trait to the attack made with it. Holy water  deals 1d6 good damage and 1\u00a0good splash damage. It damages only fiends, undead, and creatures that have a weakness to good damage.",
    "source": "Core Rulebook pg. 571",
    "usage": " held in 1 hand; ",
    "actions": "Single Action",
    "activate": " Strike"

*** potions ***
    "link": "https://2e.aonprd.com/Equipment.aspx?ID=185",
    "name": " Dragon's Breath Potion (Young)",
    "activate": "",
    "source": "Core Rulebook pg. 562",
    "level": 7,
    "price": "20 gp",
    "text": "This liquid contains blood from a certain type of dragon. For 1 hour after you imbibe the concoction, you can unleash a breath weapon used by that type of dragon. The potency of the breath depends on the potion\u2019s type, based on the age of the dragon whose blood was used to make the potion. This potion has the trait matching the damage type of the breath weapon . Exhaling dragon breath uses a single action. The damage type and the area of the dragon breath depend on the type of dragon blood in the potion, as shown in the table below. Regardless of the dragon type, the breath weapon deals 4d6 damage, and each creature in the area must attempt a DC 23 basic save of a type determined by the type of the dragon. After you use the breath weapon, you can\u2019t do so again for 1d4 rounds.",
    "traits": ["Consumable", "Evocation", "Magical", "Potion"],
    "usage": "held in 1 hand",
    "actions": "Single Action",
    "category": "potion"

**** talismans ***

    "name": "Viper's Fang",
    "link": "https://2e.aonprd.com/Equipment.aspx?ID=238",
    "category": "talisman",
    "level": 14,
    "price": " 850 gp",
    "traits": ["Consumable", "Evocation", "Magical", "Talisman"],
    "text": "When you activate this resin-strengthened viper skull, you make an  You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn\u2019t count toward your multiple attack penalty, and your multiple attack penalty doesn\u2019t apply to this Strike.Attack of Opportunity against the triggering creature.  If you have Attack of Opportunity, you can activate the  viper\u2019s fang  as a free action.",
    "source": "Core Rulebook pg. 142",
    "usage": " affixed to a weapon",
    "trigger": " A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it\u2019s using. A creature within your reach uses a manipulate or move action, makes a ranged attack, or leaves a square during a moving action it's using; ",
    "actions": "Reaction",
    "activate": " Envision; ",
    "requirements": " You are a master with the affixed weapon"
    
    */

const monsterType =  new GraphQLObjectType({
  name: 'Monster',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    family: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
    },
    alignment: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    },
    size: {
      type: GraphQLString
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    recallKnowledge: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    Perception: {
      type: GraphQLString
    },
    Languages: {
      type: GraphQLList(GraphQLString)
    },
    Str: {
      type: GraphQLString
    },
    Dex: {
      type: GraphQLString
    },
    Con: {
      type: GraphQLString
    },
    Int: {
      type: GraphQLString
    },
    Wis: {
      type: GraphQLString
    },
    Cha: {
      type: GraphQLString
    },
    AC: {
      type: GraphQLString
    },
    Fort: {
      type: GraphQLString
    },
    Ref: {
      type: GraphQLString
    },
    Will: {
      type: GraphQLString
    },
    HP: {
      type: GraphQLString
    },
    Speed: {
      type: GraphQLString
    },
    spells: {
      type: GraphQLList(monsSellType)
    },
    skills: {
      type: GraphQLList(GraphQLString)
    },
    items: {
      type: GraphQLList(GraphQLString)
    },
    actions: {
      type: GraphQLList(actionType)
    },
    attacks: {
      type: GraphQLList(attackType)
    },
    text: {
      type: GraphQLString
    }
  }
})

const queryType =  new GraphQLObjectType({
  name: 'Query',
  fields: {
    spell: {
      type: spellType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return spelllist.spells.filter(spell => {
            return spell.name == name;
        })[0]
      }
    },
    spellSearch: {
      type: new GraphQLList(spellType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return spelllist.spells.filter(spell => {
            return spell.name.startsWith(searchString);
        })
      }
    },
    spells: {
      type: new GraphQLList(spellType),
      resolve: () => {
        return spelllist.spells
      }
    },
    focusSpell: {
      type: focusSpellType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return focusList.spellList.filter(spell => {
            return spell.name == name;
        })[0]
      }
    },
    focusSpellSearch: {
      type: new GraphQLList(focusSpellType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return focusList.spellList.filter(spell => {
            return spell.name.startsWith(searchString);
        })
      }
    },
    focusSpells: {
      type: new GraphQLList(focusSpellType),
      resolve: () => {
        return focusList.spellList
      }
    },
    ritual: {
      type: ritualType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return ritualList.rituals.filter(ritual => {
            return ritual.name == name;
        })[0]
      }
    },
    ritualSearch: {
      type: new GraphQLList(ritualType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return ritualList.rituals.filter(ritual => {
            return ritual.name.startsWith(searchString);
        })
      }
    },
    rituals: {
      type: new GraphQLList(ritualType),
      resolve: () => {
        return ritualList.rituals
      }
    },
    trait: {
      type: traitType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return traitList.traits.filter(trait => {
            return trait.name == name;
        })[0]
      }
    },
    traitSearch: {
      type: new GraphQLList(traitType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return traitList.traits.filter(trait => {
            return trait.name.startsWith(searchString);
        })
      }
    },
    traits: {
      type: new GraphQLList(traitType),
      resolve: () => {
        return traitList.traits
      }
    },
    feat: {
      type: featType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return featList.feats.filter(feat => {
            return feat.name == name;
        })[0]
      }
    },
    featSearch: {
      type: new GraphQLList(featType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return featList.feats.filter(feat => {
            return feat.name.startsWith(searchString);
        })
      }
    },
    feats: {
      type: new GraphQLList(featType),
      resolve: () => {
        return featList.feats
      }
    },
    advGear: {
      type: gearType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return advGear.itemList.filter(item => {
            return item.name == name;
        })[0]
      }
    },
    advGearSearch: {
      type: new GraphQLList(gearType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return advGear.itemList.filter(item => {
            return item.name.startsWith(searchString);
        })
      }
    },
    advGears: {
      type: new GraphQLList(gearType),
      resolve: () => {
        return advGear.itemList
      }
    },
    monster: {
      type: monsterType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return monList.monsters.filter(monster => {
            return monster.name == name;
        })[0]
      }
    },
    monsters: {
      type: new GraphQLList(monsterType),
      resolve: () => {
        return monList.monsters
      }
    },
    monsterSearch: {
      type: new GraphQLList(monsterType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return monlist.monsters.filter(monsters => {
            return monster.name.startsWith(searchString);
        })
      }
    },
    condition: {
      type: conditionType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return conList.conditions.filter(condition => {
            return condition.name == name;
        })[0]
      }
    },
    conditions: {
      type: new GraphQLList(conditionType),
      resolve: () => {
        return conList.conditions
      }
    },
    armor: {
      type: armorType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return armors.armorList.filter(armor => {
            return armor.name == name;
        })[0]
      }
    },
    armors: {
      type: new GraphQLList(armorType),
      resolve: () => {
        return armors.armorList
      }
    },
    magicArmor: {
      type: magicArmorType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return armors.baseMagicArmor.filter(armor => {
            return armor.name == name;
        })[0]
      }
    },
    magicArmors: {
      type: new GraphQLList(magicArmorType),
      resolve: () => {
        return armors.baseMagicArmor
      }
    },
    armorMaterial: {
      type: materialArmorType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return armors.preciousMaterialArmor.filter(armor => {
            return armor.name == name;
        })[0]
      }
    },
    armorMaterials: {
      type: new GraphQLList(materialArmorType),
      resolve: () => {
        return armors.preciousMaterialArmor
      }
    },
    specialArmor: {
      type: namedMagicArmorType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return armors.magicArmorList.filter(armor => {
            return armor.name == name;
        })[0]
      }
    },
    specialArmors: {
      type: new GraphQLList(namedMagicArmorType),
      resolve: () => {
        return armors.magicArmorList
      }
    },
    meleeWeapons: {
      type: new GraphQLList(meleeType),
      resolve: () => {
        return weapons.melee
      }
    },
    meleeWeapon: {
      type: meleeType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return weapons.melee.filter(weap => {
            return weap.name == name;
        })[0]
      }
    },
    meleeWeaponSearch: {
      type: new GraphQLList(meleeType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return weapons.melee.filter(weap => {
            return weap.name.startsWith(searchString);
        })
      }
    },
    rangeWeapons: {
      type: new GraphQLList(rangeType),
      resolve: () => {
        return weapons.range
      }
    },
    rangeWeapon: {
      type: rangeType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return weapons.range.filter(weap => {
            return weap.name == name;
        })[0]
      }
    },
    meleeWeaponSearch: {
      type: new GraphQLList(rangeType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return weapons.range.filter(weap => {
            return weap.name.startsWith(searchString);
        })
      }
    },
    baseMagicWeapons: {
      type: new GraphQLList(baseMagicWeaponType),
      resolve: () => {
        return weapons.baseMagicWeapons
      }
    },
    baseMagicWeapon: {
      type: baseMagicWeaponType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return weapons.baseMagicWeapons.filter(weap => {
            return weap.name == name;
        })[0]
      }
    },
    baseMagicWeaponSearch: {
      type: new GraphQLList(baseMagicWeaponType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return weapons.baseMagicWeapons.filter(weap => {
            return weap.name.startsWith(searchString);
        })
      }
    }, // materialWeaponType
    weaponMaterials: {
      type: new GraphQLList(materialWeaponType),
      resolve: () => {
        return weapons.specialMats
      }
    },
    weaponMaterial: {
      type: materialWeaponType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return weapons.specialMats.filter(weap => {
            return weap.name == name;
        })[0]
      }
    }, //magicWeaponType
    magicWeapons: {
      type: new GraphQLList(magicWeaponType),
      resolve: () => {
        return weapons.magicWeapons
      }
    },
    magicWeapon: {
      type: magicWeaponType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return weapons.magicWeapons.filter(weap => {
            return weap.name == name;
        })[0]
      }
    }, //shieldType
    shields: {
      type: new GraphQLList(shieldType),
      resolve: () => {
        return shields.baseShields
      }
    },
    shield: {
      type: shieldType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return shields.baseShields.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //shieldMaterialType
    shieldMaterials: {
      type: new GraphQLList(shieldMaterialType),
      resolve: () => {
        return shields.specialMaterialShields
      }
    },
    shieldMaterial: {
      type: shieldMaterialType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return shields.specialMaterialShields.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //specificShieldType
    magicShields: {
      type: new GraphQLList(specificShieldType),
      resolve: () => {
        return shields.specificShields
      }
    },
    magicShield: {
      type: specificShieldType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return shields.specificShields.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //bombType
    bombs: {
      type: new GraphQLList(bombType),
      resolve: () => {
        return alchy.bombs
      }
    },
    bomb: {
      type: bombType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return alchy.bombs.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //elixirType
    elixirs: {
      type: new GraphQLList(elixirType),
      resolve: () => {
        return alchy.elixirs
      }
    },
    elixir: {
      type: elixirType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return alchy.elixir.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //poisonType
    poisons: {
      type: new GraphQLList(poisonType),
      resolve: () => {
        return alchy.poisons
      }
    },
    poison: {
      type: poisonType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return alchy.poison.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //toolType
    alchTools: {
      type: new GraphQLList(toolType),
      resolve: () => {
        return alchy.tools
      }
    },
    alchTool: {
      type: toolType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return alchy.tools.filter(item => {
            return item.name == name;
        })[0]
      }
    }
  }
})


const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema