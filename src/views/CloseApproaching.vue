<template>
  <div class="close-approaching">
    <div class="container m-auto">
      <h2 class="py-4">Confirmed Earth Approaching Objects</h2>
      <!-- For more information rearding NASA's Small Body Databse see the following: https://ssd.jpl.nasa.gov/sbdb.cgi -->
      <p class="w-75 mx-auto description-text">
        This page is still under construction, though once complete, will include an interface
        for interacting with the Jet Propulsion Laboratory's Small-Body Database. This database includes
        information about currently close-approaching asteroids and comets in the past present and future.
      </p>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'CloseApproaching'
  }
</script>

<style scoped>
.close-approaching {
  min-height: 100vh;
  padding-top: 15rem;
  margin-left: 200px;
}

.description-text {
  line-height: 1.25;
  text-align: justify;
}
</style>
