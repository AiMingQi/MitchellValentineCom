import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css'
// Helpers
import colors from 'vuetify/es5/util/colors'
 
Vue.use(Vuetify, {
  theme: {
    primary: '#fff', 
    secondary: '#c00000',
    accent: '#000' 
  }
  })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
