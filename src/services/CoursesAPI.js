import axios from 'axios'

export default {
    getCourses() {
        return axios.get('/courses/all')
        .then(response => {
            return response.data
        })
    }
}