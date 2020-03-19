<template>
  <div class="home">
    <h2 class="py-4 text-center">Picture of the Day</h2>
    <div class="container">
      <img class="picOfTheDay" v-bind:src="image" v-bind:alt="title"/>
      <h4 class="py-3 text-center">{{ title }}</h4>
      <p class="picOfDayDescription mx-auto small">{{ description }}</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import {NASA_PICTURE_OF_DAY_QUERY} from "../../instance/config.js"

  export default {
    name: 'Home',

    data() {
      return {
        image: null,
        title: null,
        description: null
      }
    },

    mounted() {
      axios.get(NASA_PICTURE_OF_DAY_QUERY).then(response => (
              this.image = response.data.url,
                      this.title = response.data.title,
                      this.description = response.data.explanation
      ))
    }
  }
</script>

<style scoped>
  .home {
    min-height: 100vh;
    margin-left: 200px;
    padding-top: 5rem;
  }

  .picOfTheDay {
    max-height: 50vh;
  }

  .picOfDayDescription {
    margin: auto;
    width: 75%;
    line-height: 1.25;
    text-align: justify;
  }
</style>