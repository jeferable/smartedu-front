<template>
  <div>
    <nav class="nav-wraper">
      <a href="#" class="brand-logo">Logo</a>
      
      <img 
      class = "circle right small" 
      src = "http://192.168.0.75:8000/storage/avatars/user.jpg"
      >


      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <router-link v-for="routes in links" 
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
  created() {
     
  },
  ready() {
    
  },
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Все курсы',
          page:'/courses'
        },
        {
          id: 1,
          text: 'Мои курсы',
          page:'/mycources'
        },
        {
          id: 2,
          text: 'Создать курс',
          page:'/newcourse'
        },
        {
          id: 3,
          text: 'Помощь',
          page:'/help'
        },
        {
          id: 4,
          text: 'Мой профиль',
          page:'/profile'
        }

      ]
    }
  }
}
</script>

<style>
  img.small {
    margin: 8px;
    width: 48px;
    height: 48px;
  }
</style>