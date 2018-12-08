<template>
  <div>
    <nav class="nav-wraper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <router-link class = "navitem" v-for="routes in links" 
      tag = "li" 
      v-bind:key="routes.id"
      :to="`${routes.page}`"><a>{{routes.text}}</a></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Profile',
          page:'/profile'
        },
        {
          id: 1,
          text: 'About',
          page:'/about'
        },
        {
          id: 2,
          text: 'Contact',
          page:'/contact'
        }
        ,
        {
          id: 3,
          text: 'Courses',
          page:'/courses'
        }
        /*
        {
          id: 4,
          text: 'Home',
          page:'/home'
        }
        */
      ]
    }
  }
}
</script>

<style>
  navitem {
    margin-left: 16px;
  }
</style>