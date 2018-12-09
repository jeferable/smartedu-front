<template>
    <div class = "row">
        <form class = "col s12 m9 l9">
            <div class="input-field col s12">
                <input id="name" type="text" class="validate">
                <label for="name">Название курса</label>
            </div>
            <div class="chips col s12">
                <input class="validate">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>


