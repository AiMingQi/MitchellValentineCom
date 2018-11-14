<template lang="pug">
  div#app
    v-navigation-drawer(app)
    v-toolbar(app)
      router-link(to="/") Home
      router-link(to="/about") About
    v-content
      v-container(fluid)
        router-view
    v-footer(app)
</template>


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
