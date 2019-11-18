import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dates',
      name: 'dates',
      component: () => import('./views/Dates.vue')
    },
    {
      path: '/calls/general',
      name: 'general',
      component: () => import('./views/calls/General.vue')
    },
    {
      path: '/calls/industry',
      name: 'industry',
      component: () => import('./views/calls/Industry.vue')
    },
    {
      path: '/calls/tutorials',
      name: 'tutorials',
      component: () => import('./views/calls/Tutorials.vue')
    },
    {
      path: '/program/main',
      name: 'program',
      component: () => import('./views/program/Program.vue')
    },
    {
      path: '/program/proceedings',
      name: 'proceedings',
      component: () => import('./views/program/Proceedings.vue')
    },
    {
      path: '/program/keynotes',
      name: 'keynotes',
      component: () => import('./views/program/Keynotes.vue')
    },
    {
      path: '/organizing/committee',
      name: 'committee',
      component: () => import('./views/organizing/Committee.vue')
    },
  ]
})
