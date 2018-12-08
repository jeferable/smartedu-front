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
          text: 'Hello World',
          page:'/HelloWorld'
        },
        {
          id: 2,
          text: 'About',
          page:'/About'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        }
        ,
        {
          id: 4,
          text: 'Courses',
          page:'/courses'
        }
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