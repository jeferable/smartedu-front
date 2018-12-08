import Vue from 'vue'
import Router from 'vue-router'

import Profile from '@/components/Profile'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    }
  ]
})