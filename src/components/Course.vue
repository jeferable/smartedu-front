<template>
    <div>
        <div class = "row">
            <div class = "col s12 m6 l3">
                <img width="" v-bind:src="course.courseimg">
                <router-link v-if = "course.subscribe" class = "waves-effect waves-light btn" 
                    :to="'/subscribe/' + id"
                >Подписаться
                </router-link>
                <router-link v-else class = "waves-effect waves-light btn" 
                    :to="'/unsubscribe/' + id"
                >Отписаться
                </router-link>
            </div>
            <div class="col s12 m6 l9">
                <h3>{{ course.name }}</h3>
                <p class = "date">{{ course.created_at }}</p>
                <span> {{ course.description }}</span>
            </div>
       </div>
    </div>
</template>

<script>
import CoursesApi from "@/services/CoursesAPI"
export default {
    name: 'Course',
    data() {
        return {
            name: 'test',
            course: ''
        }
    },
    created () {
        //this.id = $route.params.id
        CoursesApi.getCourse(this.$route.params.id)
        .then(course => {
            this.course = course
        })
        .catch(error => console.log(error))
    }
    
}
</script>

<style>
img {
    width: 340px;
}
.date {
    color: darkgrey;
}
</style>



