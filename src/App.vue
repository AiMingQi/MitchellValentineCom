<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
      v-model="drawer"
      clipped
      fixed
      app
      )
      v-list(dense)
        v-list-tile(@click="")
          v-list-tile-action
            v-icon dashboard
          v-list-tile-content
            v-list-tile-title Dashboard
        v-list-tile(@click="")
          v-list-tile-action
            v-icon settings
          v-list-tile-content
            v-list-tile-title Settings
    v-toolbar(
      fixed
      clipped-left
      app
      )
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Mitchell Valentine
      v-spacer
      v-btn(to="/") Home 
      v-btn(to="/about") About
    v-content
      v-container(fluid fill-height)
        router-view
    v-footer(app fixed)
      span.pl-3 &copy; 2018 - Mitchell Valentine
</template>
<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
