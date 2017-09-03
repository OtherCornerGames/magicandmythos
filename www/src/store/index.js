import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: '//localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

let state = {
  user: {},
  decks: [],
  inventory: [],
  activeDeck: {},
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store({
  state,
  mutations: {
    //USER
    setUser(state, user) {
      state.user = user
    },
    //CARDS
    setInventory(state, inventory) {
      state.inventory = inventory
    },
    //DECKS
    setDecks(state, decks) {
      state.decks = decks
    },
    setActiveDeck(state, activeDeck) {
      state.activeDeck = activeDeck
    }
  },
  actions: {
    //CARDS
    getInventory({ commit, dispatch }) {
      api('/userinventory')
        .then(res => {
          commit('setInventory', res.data.data)
        })
        .catch(handleError)
    },
    getCardsByDeckId({ commit, dispatch }, deckId) {
      api('decks/' + deckId + '/cards')
        .then(res => {
          commit('setCards', res.data.data)
        })
        .catch(handleError)
    },
    addCardToDeck({ commit, dispatch }, payload) {
      api.put('cards/' + payload.card._id, payload)
        .then(res => {
          dispatch('getInventory')
        })
        .catch(handleError)
    },
    removeCard({ commit, dispatch }, payload) {
      api.put('cards/' + payload.card._id, payload)
        .then(res => {
          dispatch('getCardsByDeckId', payload.card.deckId)
        })
        .catch(handleError)
    },
    //DECKS
    getActiveDeck({ commit, dispatch }, deckId) {
      api('decks/' + deckId)
        .then(res => {
          commit('setActiveDeck', res.data.data)
        })
        .catch(handleError)
    },
    getDecks({ commit, dispatch }) {
      api('userdecks')
        .then(res => {
          commit('setDecks', res.data.data)
        })
        .catch(handleError)
    },
    removeDeck({ commit, dispatch }, deck) {
      api.delete('decks/' + deck._id)
        .then(res => {
          dispatch('getDecks')
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    createDeck({ commit, dispatch }, deck) {
      api.post('decks', deck)
        .then(res => {
          dispatch(getDecks)
            .then(res => {
              commit('setDecks', res.data.data)
            })
        })
        .catch(handleError)
    },
    //USER
    register({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
          router.push('/dashboard')
        }).catch(handleError)
    },
    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            router.push('/login')
          } else {
            commit('setUser', res.data.data)
            router.push('/dashboard')
          }
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/login')
        }).catch(handleError)
    }
  }
})