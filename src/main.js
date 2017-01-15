// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(VueRouter)

import postlist from './components/PostList'
import postview from './components/PostView'

/* eslint-disable no-unused-vars */
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: postlist
    },
    {
      path: '/post/:postid',
      component: postview
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
