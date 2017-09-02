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
    endpoint: 'cards'
  },
  deck: {
    name: 'Deck',
    endpoint: 'decks'
  }
}


export  {
  actions,
  models
}