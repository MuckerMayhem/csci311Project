<template>
  <div class="home">
    <h2>Picture of the Day</h2>
    <div class="container">
      <img class="picOfTheDay" v-bind:src="image" v-bind:alt="title"/>
      <h4 class="py-3">{{ title }}</h4>
      <p class="picOfDayDescription mx-auto">{{ description }}</p>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios';
  import { NASA_PICTURE_OF_DAY_QUERY } from "../../instance/config.js"

  export default {
    name: 'Home',

    data () {
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
  margin: auto;
}

.picOfTheDay {
  max-height: 50vh;
  padding-top: 7.5rem;
}

.picOfDayDescription {
  width: 75%;
  line-height: 1.25;
  text-align: justify;
}
</style>
