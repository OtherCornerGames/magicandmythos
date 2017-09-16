<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-xs-6">
        <p class="logout pull-left">

          <button type="button" class="toggles" @click="toggleDecks">Decks</button>
          <button class="toggles" @click="toggleInventory">Your Inventory</button>
          <button class="toggles" @click="toggleDungeons">Dungeons</button>
        </p>
        <h1 class="capitalize">Hello, {{user.name}}!</h1>
      </div>
      <div class="col-xs-6">
        <p class="logout pull-right">
          <button class="logout" @click="logout(user)">Logout</button>
        </p>
      </div>
      <div v-if="this.showDecks">
        <div v-for="deck in decks">
          <deck :deck="deck"></deck>
        </div>
      </div>
      <div v-if="this.showInventory">
        <div v-for="card in inventory">
        <inventory :card="card"></inventory>
        </div>
      </div>
      <div v-if="this.showDungeons">
        <div v-for="dungeon in dungeons">
        <dungeon :dungeon="dungeon"></dungeon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Deck from './Deck'
import Inventory from './Inventory'
import Dungeon from './Dungeon'
export default {
  name: 'dashboard',
  data() {
    return {
      showDecks: true,
      showDungeons: false,
      showInventory: false
    }
  },
  computed: {
    decks() {
      return this.$store.state.decks
    },
    inventory() {
      return this.$store.state.inventory
    },
    dungeons() {
      return this.$store.state.dungeons
    },
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    toggleDecks() {
      this.showDecks = true;
      this.showInventory = false;
      this.showDungeons = false;
    },
    toggleInventory() {
      this.showDecks = false;
      this.showInventory = true;
      this.showDungeons = false;
    },
    toggleDungeons() {
      this.showDecks = false;
      this.showInventory = false;
      this.showDungeons = true;
    },
    logout(user){
      this.$store.state.dispatch('logout', user)
    }
  },
  components: {
    Deck,
    Inventory,
    Dungeon
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
