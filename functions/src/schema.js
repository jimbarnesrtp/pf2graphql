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
      type: new GraphQLList(traitType),
      resolve(source,args){
        return traitList.traits.filter(trait => {
          return source.traits.includes(trait.name);
      })
      }
    },
    link: {
      type: GraphQLString
    },
    prerequisites: {
      type: GraphQLString
    },
    benefits: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    archetype: {
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
    special: {
      type: GraphQLString
    },
    trigger: {
      type: GraphQLString
    },
    frequency: {
      type: GraphQLString
    },
    access: {
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

/*     
    */
const spellType =  new GraphQLObjectType({
  name: 'Spell',
  fields: {
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    level: {
      type: GraphQLInt
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
    source: {
      type: GraphQLString
    },
    traditions: {
      type: GraphQLString
    },
    cast: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    area: {
      type: GraphQLString
    },
    range: {
      type: GraphQLString
    },
    targets: {
      type: GraphQLString
    },
    savingthrow: {
      type: GraphQLString
    },
    duration: {
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
    criticalfailure: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    trigger: {
      type: GraphQLString
    },
    effect: {
      type: GraphQLString
    },
    heightened3rd: {
      type: GraphQLString
    },
    heightened4th: {
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
    },
    heightenedplus1: {
      type: GraphQLString
    },
    heightenedplus2: {
      type: GraphQLString
    },
    
    
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

/*  ** AMMUNITION***/

const ammoType = new GraphQLObjectType({
  name: 'ammunition',
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
    category: {
      type: GraphQLString
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
    ammunition: {
      type: GraphQLString
    },
    actions: {
      type: GraphQLString
    },
    activate: {
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
    criticalfailure: {
      type: GraphQLString
    },
  }
})
  //*** OIL ***

const oilType = new GraphQLObjectType({
  name: 'oil',
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
    category: {
      type: GraphQLString
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
    actions: {
      type: GraphQLString
    },
    activate: {
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
    criticalfailure: {
      type: GraphQLString
    },
  }
})
    /*** OTHER ***/
const otherType = new GraphQLObjectType({
  name: 'other',
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
    category: {
      type: GraphQLString
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
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    }
  }
})
   /* *** potions ***/
const potionType = new GraphQLObjectType({
  name: 'potion',
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
    category: {
      type: GraphQLString
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
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    }
  }
})

/***** talismans ***/

const talismanType = new GraphQLObjectType({
  name: 'talisman',
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
    category: {
      type: GraphQLString
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
    actions: {
      type: GraphQLString
    },
    activate: {
      type: GraphQLString
    },
    bulk: {
      type: GraphQLString
    },
    requirements: {
      type: GraphQLString
    }
  }
})


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
        return featList.baseFeats.filter(feat => {
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
        return featList.baseFeats.filter(feat => {
            return feat.name.startsWith(searchString);
        })
      }
    },
    feats: {
      type: new GraphQLList(featType),
      resolve: () => {
        return featList.baseFeats
      }
    },//archetype feats
    archtypefeat: {
      type: featType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return featList.archFeats.filter(feat => {
            return feat.name == name;
        })[0]
      }
    },
    archFeatSearch: {
      type: new GraphQLList(featType),
      args: {
        searchString: { type: GraphQLString }
      },
      resolve: (source, {searchString}) => {
        return featList.archFeats.filter(feat => {
            return feat.name.startsWith(searchString);
        })
      }
    },
    archfeats: {
      type: new GraphQLList(featType),
      resolve: () => {
        return featList.archFeats
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
        return monList.monsters.filter(monster => {
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
    }, //ammoType
    ammos: {
      type: new GraphQLList(ammoType),
      resolve: () => {
        return cons.ammunition
      }
    },
    ammo: {
      type: ammoType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return cons.ammunition.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //oilType
    oils: {
      type: new GraphQLList(oilType),
      resolve: () => {
        return cons.oils
      }
    },
    oil: {
      type: oilType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return cons.oils.filter(item => {
            return item.name == name;
        })[0]
      }
    }, //otherType
    others: {
      type: new GraphQLList(otherType),
      resolve: () => {
        return cons.other
      }
    },
    other: {
      type: otherType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return cons.other.filter(item => {
            return item.name == name;
        })[0]
      }
    }, // potionType
    potions: {
      type: new GraphQLList(potionType),
      resolve: () => {
        return cons.potions
      }
    },
    potion: {
      type: potionType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return cons.potions.filter(item => {
            return item.name == name;
        })[0]
      }
    },//talismanType
    talismans: {
      type: new GraphQLList(talismanType),
      resolve: () => {
        return cons.talismans
      }
    },
    taisman: {
      type: talismanType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (source, {name}) => {
        return cons.talismans.filter(item => {
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