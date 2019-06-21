<template>
    <div class="container">
        <h1 class="welcome" v-text="msg"></h1>
        <h1 class="hello" v-text="count"></h1>
        <button class="increment" @click="count++"></button>
        <button class="decrement" @click="count--"></button>
    </div>
</template>

<script>
    export default {
        name: "Counter",

        data(){
            return {
                count: 0,
                msg: 'Welcome to the counter'
            }
        }
    }
</script>

<style scoped>

</style>
