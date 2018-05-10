<template>
  <v-app dark>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in items"
          :key="i"
          
        >
         <router-link :to="{ name: item.name }">
          <v-list-tile-action>
            <v-icon color="white" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          </router-link>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>         
          </v-list-tile-content>
           
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
     <router-link :to="{ name: 'welcome' }"> <v-toolbar-title v-text="title"></v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <router-view></router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'pregnant_woman', title: 'Birth', name: 'birth' },
          { icon: 'android', title: 'Childhood', name: 'childhood' },
          { icon: 'account_balance', title: 'College', name: 'college' },
          { icon: 'translate', title: 'China', name: 'china' },
          { icon: 'bug_report', title: 'California', name: 'california' },
          { icon: 'trending_up', title: 'CFFP', name: 'cffp' },
          { icon: 'flight_takeoff', title: 'Drone Racing', name: 'droneracing' },
          { icon: 'toll', title: 'Crypto', name: 'crypto' },
          { icon: 'flare', title: 'Fatherhood', name: 'fatherhood' },
          { icon: 'accessibility_new', title: 'Conclusion', name: 'conclusion' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Mitchell Valentine'
      }
    }
  }
</script>
