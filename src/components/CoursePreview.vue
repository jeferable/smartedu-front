<template>
        <div class = "col s12 m6 l4 preview">
            <div class="card">
                <div class="card-image">
                    <img :src="preview_url">
                    <span class="card-title">{{ name }}</span>
                </div>
                <div class="card-content">
                    <p> {{ desc}} </p>
                </div>
                <div class="card-action">
                    <router-link 
                    :to="url + id"
                    >This is a link</router-link>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'CoursePreview',
    props: [
            'id',
            'name',
            'desc',
            'preview_url'
    ],
    data() {
        return {
             url: '/courses/'
        }
    }
}
</script>


<style>
</style>

