import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'
import Course from '@/components/Course'
import NewCourse from '@/components/NewCourse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    },
    {
      path: '/courses/:id',
      name: 'Course',
      component: Course
    },
    {
      path: '/newcourse',
      name: 'NewCourse',
      component: NewCourse
    }
  ]
})