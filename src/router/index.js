import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Childhood from '@/components/Childhood'
import College from '@/components/College'
import China from '@/components/China'
import California from '@/components/California'
import CFFP from '@/components/CFFP'
import DroneRacing from '@/components/DroneRacing'
import Crypto from '@/components/Crypto'
import Fatherhood from '@/components/Fatherhood'
import Conclusion from '@/components/Conclusion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/birth',
      name: 'birth',
      component: Birth
    },
    {
      path: '/childhood',
      name: 'childhood',
      component: Childhood
    },
    {
      path: '/college',
      name: 'college',
      component: College
    },
    {
      path: '/china',
      name: 'china',
      component: China
    },
    {
      path: '/california',
      name: 'california',
      component: California
    },
    {
      path: '/cffp',
      name: 'cffp',
      component: CFFP
    },
    {
      path: '/drone-racing',
      name: 'droneracing',
      component: DroneRacing
    },
    {
      path: '/crypto',
      name: 'crypto',
      component: Crypto
    },
    {
      path: '/fatherhood',
      name: 'fatherhood',
      component: Fatherhood
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      component: Conclusion
    },

  ]
})
