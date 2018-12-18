import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Shopping from '@/components/Shopping'
import Prodetail from '@/components/Prodetail'
import Buy from '@/components/Buy'
import Doing from '@/components/Doing'
import Mine from '@/components/Mine'
import Order from '@/components/Order'
import Orderdetail from '@/components/Orderdetail'
import Card from '@/components/Card'
import Message from '@/components/Message'
import Messgedetail from '@/components/Messagedetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/Index',
    name: 'Index',
    component: Index
  }, {
    path: '/Prodetail',
    name: 'Prodetail',
    component: Prodetail
  }, {
    path: '/Shopping',
    name: 'Shopping',
    component: Shopping
  }, {
    path: '/Buy',
    name: 'Buy',
    component: Buy
  }, {
    path: '/Doing',
    name: 'Doing',
    component: Doing
  }, {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  }, {
    path: '/Order',
    name: 'Order',
    component: Order
  }, {
    path: '/Card',
    name: 'Card',
    component: Card
  }, {
    path: '/Orderdetail',
    name: 'Orderdetail',
    component: Orderdetail
  }, {
    path: '/Message',
    name: 'Message',
    component: Message
  }, {
    path: '/Messgedetail',
    name: 'Messgedetail',
    component: Messgedetail
  }]
})
