<template>
  <div id="app">
    <div v-if="!adminView">
      <navbar></navbar>
    </div>
    <div v-if="adminView">
      <adminnavbar></adminnavbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import adminnavbar from './components/AdminNavbar'
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('authenticate')
  },
  components: {
    navbar,
    adminnavbar
  },
  computed: {
    adminView(){
      return this.$store.state.adminView
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
