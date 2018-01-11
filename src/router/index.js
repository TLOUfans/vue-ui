import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Business from '@/components/business/Index'
import FormList from '@/components/business/FormList'
import Form from '@/components/business/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/formList',
      name: 'FormList',
      component: FormList,
    }, {
      path: '/form',
      name: 'Form',
      component: Form,
    }
  ]
})
