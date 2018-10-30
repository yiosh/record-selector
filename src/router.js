import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Root.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    
  ]
})
