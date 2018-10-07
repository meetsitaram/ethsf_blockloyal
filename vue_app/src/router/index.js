import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from '@/components/Home'
import 'vuetify/dist/vuetify.min.css'
// import('../assets/vuetify.min.css') // very much needed
// import('../assets/main.styl')
import Seller from '@/components/Seller'
import Buyer from '@/components/Buyer'
import Sell from '@/components/Sell'
import Buy from '@/components/Buy'
import Contract from '@/components/Contract'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/seller/:id',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/buyer/:id',
      name: 'Buyer',
      component: Buyer
    },
    {
      path: '/sell/:id',
      name: 'Sell',
      component: Sell
    },
    {
      path: '/buy/:id',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/contract/:id',
      name: 'Contract',
      component: Contract
    }
  ]
})
