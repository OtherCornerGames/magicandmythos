<template>
  <div class="dashboard">
    <div class="row">
      <div v-if="this.showDecks">
        <div v-for="deck in decks">
          <deck :deck="deck"></deck>
        </div>
      </div>
      <div v-if="this.showInventory">
        <div v-for="card in inventory">
          <card :card="card"></card>
        </div>
      </div>
      <div v-if="this.showDungeons">
        <div v-for="dungeon in dungeons">
          <dungeon :dungeon="dungeon"></dungeon>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Deck from './Deck'
import Card from './Card'
import Dungeon from './Dungeon'
export default {
  name: 'dashboard',
  data() {
    return {
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
    },
     showDecks() {
      return this.$store.state.showDecks
    },
    showInventory() {
      return this.$store.state.showInventory
    },
    showDungeons() {
      return this.$store.state.showDungeons
    }
  },
  methods: {

  },
  components: {
    Deck,
    Card,
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
