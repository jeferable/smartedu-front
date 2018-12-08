<template>
  <div>
    <h3>Cources</h3>
    <div class="row flex">
      <CoursePreview v-for="value in courses"
      v-bind:key="value.id"
      v-bind:name = "value.name"
      v-bind:preview_url = "value.courseimg"
      v-bind:desc = "value.description"
      v-bind:id="value.id"
      >
      </CoursePreview>
    </div>
  </div>
</template>

<script>
import CoursesApi from "@/services/CoursesAPI"
import CoursePreview from "@/components/CoursePreview"
export default {
  name: 'Courses',
  components: {
    'CoursePreview': CoursePreview
  },
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

<style>
  h3 {
    margin-left: 8px;
  }
</style>
