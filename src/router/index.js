import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  base:'/agri_kg_window/',
  mode: "history",
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  }]
})

