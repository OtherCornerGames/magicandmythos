const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  user: {
    name: 'User',
    endpoint: 'users',
    // preventDefaultApi: true,
    useCustomRoutes: true
  },
  card: {
    name: 'Card',
    endpoint: 'cards',
    useCustomRoutes: true
  },
  deck: {
    name: 'Deck',
    endpoint: 'decks',
    useCustomRoutes: true    
  },
  dungeon: {
    name: 'Dungeon',
    endpoint: 'dungeons',
    // useCustomRoutes: true    
  }
}


module.exports = {
  actions,
  models
}