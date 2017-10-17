import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//magicandmythoscards.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: baseUrl,
  timeout: 2000,
  withCredentials: true
})

let state = {
  user: {},
  adminView: false,
  loggedIn: false,
  showDecks: false,
  showDungeons: false,
  showInventory: false,
  decks: [{ name: "deck one" }],
  inventory: [{ name: "card one" }],
  dungeons: [{ name: "dungeon one" }],
  activeDeck: {},
  error: {},
  registerMessage: 'Please register an email, user name, and password',
  loginMessage: 'Please enter your email and password to continue'
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store({
  state,
  mutations: {
    //USER
    setLoggedIn(state, status){
      state.loggedIn = status
    },
    setUser(state, user) {
      state.user = user
    },
    setLoginMessage(state, error) {
      state.loginMessage = 'Invalid email or password'
    },
    //CARDS
    setToggleInventory(state){
      state.showDecks = false;
      state.showDungeons = false;
      state.showInventory = true;
    },
    setInventory(state, inventory) {
      state.inventory = inventory
    },
    //DECKS
    setToggleDecks(state){
      state.showDecks = true;
      state.showDungeons = false;
      state.showInventory = false;
    },
    setDecks(state, decks) {
      state.decks = decks
    },
    setActiveDeck(state, activeDeck) {
      state.activeDeck = activeDeck
    },
    //DUNGEONS
    setToggleDungeons(state){
      state.showDecks = false;
      state.showDungeons = true;
      state.showInventory = false;
    },
  },
  actions: {
    //CARDS
    toggleInventory({ commit, dispatch }) {
      commit('setToggleInventory')
    },
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
    toggleDecks({ commit, dispatch }) {
      commit('setToggleDecks')
    },
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
    //DUNGEONS
    toggleDungeons({ commit, dispatch }) {
      commit('setToggleDungeons')
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
          if (!res.data.data) {
            commit('setLoginMessage', res.data)
            // return handleError(res.data.error)
          } else {
            commit('setUser', res.data.data)
            commit('setLoggedIn', true)            
            router.push('/dashboard')
          }
        }).catch(handleError)
    },
    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            router.push('/')
          } else {
            commit('setUser', res.data.data)
            commit('setLoggedIn', true)
            router.push('/dashboard')
          }
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          commit('setUser', {})
          commit('setLoggedIn', false)          
          router.push('/login')
        }).catch(handleError)
    }
  }
})