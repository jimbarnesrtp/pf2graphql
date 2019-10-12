const spelllist = require('./spells.js')
const monList = require('./monsters.js')
const conList = require('./conditions.js')
const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql


const spellType =  new GraphQLObjectType({
  name: 'Spell',
  fields: {
    name: {
      type: GraphQLString
    },
    level: {
      type: GraphQLString
    },
    spellText: {
      type: GraphQLList(GraphQLString)
    },
    tradition: {
      type: GraphQLList(GraphQLString)
    },
    traits: {
      type: GraphQLList(GraphQLString)
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
      type: GraphQLString
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
      type: GraphQLList(GraphQLString)
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