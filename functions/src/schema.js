const spelllist = require('./spells.js')
const monList = require('./monsters.js')
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
    }
  }
})

const monsterType =  new GraphQLObjectType({
  name: 'Monster',
  fields: {
    name: {
      type: GraphQLString
    },
    level: {
      type: GraphQLString
    },
    monsterText: {
      type: GraphQLList(GraphQLString)
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
        id: { type: GraphQLInt }
      },
      resolve: (source, {id}) => {
        return monList.monsters[id]
      }
    },
    monsters: {
      type: new GraphQLList(monsterType),
      resolve: () => {
        return monList.monsters
      }
    }
  }
})


const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema