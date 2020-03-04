import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
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
      path: '/calls/workshop',
      name: 'tutorials',
      component: () => import('./views/calls/Tutorials.vue')
    },
    {
      path: '/calls/doctorial',
      name: 'doctorial',
      component: () => import('./views/calls/Doctorial.vue')
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
    {
      path: '/organizing/members',
      name: 'members',
      component: () => import('./views/organizing/Members.vue')
    },
    {
      path: '/about/town',
      name: 'town',
      component: () => import('./views/about/Town.vue')
    },
    {
      path: '/about/university',
      name: 'university',
      component: () => import('./views/about/University.vue')
    },
    {
      path: '/about/accommodation',
      name: 'accommodation',
      component: () => import('./views/about/Accommodation.vue')
    },
    {
      path: '/about/culture',
      name: 'culture',
      component: () => import('./views/about/Culture.vue')
    },
    {
      path: '/sponsorship',
      name: 'sponsorship',
      component: () => import('./views/Sponsorship.vue')
    },
    {
      path: '/reviewer',
      name: 'reviewer',
      component: () => import('./views/Reviewer.vue')
    },
  ]
})
