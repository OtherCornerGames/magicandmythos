<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-xs-6">
        <p class="logout pull-left">
          <img style="width: 10%" src="../assets/logo.jpg">
          <button type="button" class="toggles" @click="toggleVaults">Vaults</button>
          <button class="toggles" @click="toggleKeeps">Your Keeps</button>
          <button class="toggles" @click="toggleAllKeeps">All Keeps</button>
        </p>
        <h1 class="capitalize">Hello, {{user.name}}!</h1>
      </div>
      <div class="col-xs-6">
        <p class="logout pull-right">
          <button class="logout" @click="logout(user)">Logout</button>
        </p>
      </div>
      <decks v-if="this.showDecks"></decks>
      <inventory v-if="this.showInventory"></inventory>
      <dungeon v-if="this.showDungeon"></dungeon>
    </div>
  </div>
</template>

<script>
import Decks from './Decks'
import Inventory from './Inventory'
import Dungeon from './Dungeon'
export default {
  name: 'dashboard',
  data () {
    return {
      showDecks: true,
      showDungeon: false,
      showInventory: false
    }
  }
}
</script>

<style scoped>
h1, h2 {
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
