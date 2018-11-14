<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
      v-model="drawer"
      clipped
      fixed
      app
      )
      v-list(dense)
        v-subheader Live Sites
        v-list-tile(href="https://cffp.edu" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon account_balance
          v-list-tile-content
            v-list-tile-title CFFP.edu
        v-list-tile(href="https://Crypto-Catalyst.com" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon attach_money
          v-list-tile-content
            v-list-tile-title Crypto-Catalyst.com
        v-list-tile(href="https://comradebrewing.com" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon local_drink
          v-list-tile-content
            v-list-tile-title Comrade Brewery
        v-list-tile(href="http://thosefunkendronez.com" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon airplanemode_active
          v-list-tile-content
            v-list-tile-title Those Funken Dronez
        v-list-tile(href="http://swampthing.org" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon landscape
          v-list-tile-content
            v-list-tile-title Siegel Environmental
        v-list-tile(href="http://charles-hardy.com" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon portrait
          v-list-tile-content
            v-list-tile-title Charles Hardy
        v-subheader Social Links
        v-list-tile(href="https://www.facebook.com/mitchell.valentine" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon FB
          v-list-tile-content
            v-list-tile-title Facebook
        v-list-tile(href="https://www.linkedin.com/in/cafevalentine/" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon LI
          v-list-tile-content
            v-list-tile-title LinkedIn
        v-list-tile(href="https://twitter.com/CafeValentine" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon T
          v-list-tile-content
            v-list-tile-title Twitter
        v-list-tile(href="https://github.com/AiMingQi" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon G
          v-list-tile-content
            v-list-tile-title Github
        v-list-tile(href="https://www.instagram.com/aimingqi" target="_blank" rel="noopener")
          v-list-tile-action
            v-icon I
          v-list-tile-content
            v-list-tile-title Instagram
    v-toolbar(
      fixed
      clipped-left
      app
      )
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Mitchell Valentine
      v-spacer
      v-btn(to="/")
        v-icon.secondary--text home
    v-content.pa-1
      v-container(fluid)
        router-view
    v-footer(app fixed)
      span.pl-3 &copy; 2018 - Mitchell Valentine
      v-spacer
      v-btn(href="mailto:cafevalentine@gmail.com") Email Me
</template>
<script>
  export default {
    data: () => ({
      drawer: false
    }),
    props: {
      source: String
    }
  }
</script>

<style>
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
