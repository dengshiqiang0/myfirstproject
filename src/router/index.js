import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue"
import Haha from "../components/haha.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/haha",
      name:"Haha",
      component:Haha
    }
  ]
})
