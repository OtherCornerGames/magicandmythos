<template>
  <div class="admindashboard">
    <div class="row">
      <div v-if="this.showCards">
        <cardeditor></cardeditor>
      </div>
      <div v-if="this.showDungeons">
        <dungeoneditor></dungeoneditor>
      </div>
    </div>
    This is where we add cards and stuff when you are an admin. I might change it to a toggle so we have a similar looking navbar as the regular one, but for admin. When you hit the toggle, it will switch which navbar is displayed and hide the former. Right now, it changes your route, so you have to click magic and mythos again to go back to the main dashboard. The way the components are nested, this would be one huge component with a lot of scrolling, so it seems easier to have a second navbar for it that changes what happens so we can have one single component for each admin view (manage cards, manage dungeons, perhaps even users). Probably a bug queue and stuff as well.
  </div>
</template>


<script>
export default {
  name: 'admindashboard',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>

</style>