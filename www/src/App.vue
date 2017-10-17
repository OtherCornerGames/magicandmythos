<template>
  <div id="app">
    <div v-if="!adminview">
      <navbar></navbar>
    </div>
    <div v-if="adminview">
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
    admin(){
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
