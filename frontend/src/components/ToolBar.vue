<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div class="title">
            <h1>Weather Trip</h1>
        </div>
        <div class="header">
            <router-link to="/today">Today Weather</router-link>&nbsp&nbsp|&nbsp &nbsp
            <router-link to="/news">This Week Weather</router-link>&nbsp&nbsp|&nbsp &nbsp
            <router-link to="/detail">Detail Weather</router-link>&nbsp&nbsp|&nbsp &nbsp
            <router-link to="/ask">Sunny Days</router-link>&nbsp&nbsp|&nbsp &nbsp
            <router-link to="/jobs">Gloomy Days</router-link>&nbsp&nbsp|&nbsp &nbsp
            <router-link to="/jobs">Snowy Days</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToolBar"
    }
</script>

<style scoped>
    .header{
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 8px;
        font-size: 1em;
    }
    .header .router-link-exact-active {
        color: #35495e;
    }
    .header a {
        color: white;
    }
    .title{
        color: white;
        background-color: #42b883;
        display: flex;
        padding-left: 11px;
    }
    .title .router-link-exact-active {
        color: #35495e;
    }
    .title a {
        color: white;
    }
</style>