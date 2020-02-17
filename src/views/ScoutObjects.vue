<template>
  <div class="scout">
    <div class="container m-auto">
      <h2 class="py-4">CNEOS Scout System Data</h2>
      <!-- For more information on the Scout System see the following: https://cneos.jpl.nasa.gov/scout/intro.html -->
      <p class="w-75 mx-auto description-text">
        NASA's Scout Data API provides access to near-realtime results from the Centre for Near Earth
        Object Studies (CNEOS) Sout system. Scout provides trajectory analysis and hazard assessment 
        for recently detected objects on the Minor Planet Center’s Near-Earth Object Confirmation Page 
        (NEOCP). Objects on these pages are unconfirmed; their designations are user-assigned and unofficial. 
        These objects could be real asteroids, but they cannot be officially designated until they are 
        confirmed by additional observations.
      </p>
      <h4>Stay Tuned!</h4>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'ScoutObjects'
  }
</script>

<style scoped>
.scout {
  min-height: 100vh;
  margin-left: 200px;
  padding-top: 15rem;
}

.description-text {
  line-height: 1.25;
  text-align: justify;
}
</style>
