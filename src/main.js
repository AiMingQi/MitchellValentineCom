import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueInstagram from 'vue-instagram'
 
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueInstagram)

Vue.use(VueYouTubeEmbed)

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
