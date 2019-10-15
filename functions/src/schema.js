const spelllist = require('./spells.js')
const monList = require('./monsters.js')
const conList = require('./conditions.js')
const traitList = require('./traits.js')
const featList = require('./feats.js')
const focusList = require('./focusspells.js')
const ritualList = require('./rituals.js')
const advGear = require('./advgear.js')
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
    }
  }
})


const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema