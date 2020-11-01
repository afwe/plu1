import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tik from '@/components/tik.vue'
import test from '@/components/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/11',
      name:'tic',
      component: tik
    },
    {
      path:'/111',
      name:'test',
      component:test
    }
  ]
})
