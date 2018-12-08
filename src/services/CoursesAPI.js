import axios from 'axios'

export default {
    getCourses() {
        return axios.get('/courses/all')
        .then(response => {
            return response.data
        })
    },
    getCourse(id) {
        return axios.get('/get/course/info/'+id)
        .then (response => {
            return response.data
        })
    }
}