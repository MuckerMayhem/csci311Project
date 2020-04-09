<template>
  <div class="home">
  
    <h1 class="py-5 text-center">Analysis until you require dialysis!</h1>
    <div class="border-top mx-auto my-3 w-75"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="text-center mb-3">Fireballs</h3>
          <p class="text-left">
            Fireballs are an astronomical term for for exceptionally bright meteors that
            are spectacular enough to be observed over a wide area. The Fireball dataset
            includes such events that were observed by U.S. Government sensor and were stored
            by the Center for Near Earth Object Studies. This dataset is by no means a complete
            list of fireball events, but only the brightest fireballs encountered recently.
          </p>
          <!-- Reference for above text: https://cneos.jpl.nasa.gov/fireballs/intro.html -->
        </div>
        <div class="col">
          <h3 class="text-center mb-3">PHAs</h3>
          <p class="text-left">
            Potentially Hazardous Asteroids (PHAs) are defined based on parameters that measure
            the asteroid's potential to make threatening close approaches to Earth. Specifically,
            all asteroids with a minimum intersection distance (MOID) of 0.05 au or less and an
            absolute magnitude (H) of 22.0 or less are considered PHAs.
          </p>
        </div>
      </div>
    </div>
    
    <div class="border-top mx-auto my-3 w-75"></div>

    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="text-center mb-3">Scouted NEOs</h3>
          <p class="text-left">
            Scouted Near Earth Objects are unconfirmed objects analyzed by the Center for Near Earth Object
            Studies's Scout system. Scout provides trajectory analysis and hazard assessment for recently detected
            objects on the Minor Planet Center's Near Earth Object Confirmation Page. These objects could be real
            asteroids, but they cannot be officially designated unti lthey are confirmed by additional observations.
            Once objects are confirmed, they dissapear from this data store and are given an official designation. 
          </p>
          <!-- Reference for above text: https://cneos.jpl.nasa.gov/scout/intro.html-->
        </div>
        <div class="col">
          <h3 class="text-center mb-3">Observed NEOs</h3>
            As Near Earth Objects orbit the sun, they occassionally approach Earth. Note that a “close” passage 
            astronomically can be very far away in human terms: millions or even tens of millions of kilometers. 
            CNEOS software detects predicted Earth close approaches for all known NEOs, in both the past and the 
            future, and tabulates the close approach data organized by time.
          <p class="text-left">
          <!-- Reference for above text: https://cneos.jpl.nasa.gov/ca/neo_ca_intro.html -->
          </p>
        </div>
      </div>
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
    margin-left: 250px;
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