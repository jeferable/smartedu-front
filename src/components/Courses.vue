<template>
  <div>
    <h1>Cources</h1>
    <p>{{courses}}</p>
    <ul>
      <li v-for="value in courses"
      v-bind:key="value.id"
      >{{ value.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import CoursesApi from "@/services/CoursesAPI"
export default {
  name: 'Courses',
  data() {
    return {
      courses: "test data",
      loading: true
    }
  },
  created() {
    CoursesApi.getCourses()
      .then(courses => {
          this.courses = courses
      })
      .catch(error => console.log(error))
      .finally(
        () => {
          this.loading = false
        }
      )
  }
}
</script>