<template>
  <div class="home">
    <h2 class="py-4">Picture of the Day</h2>
    <div class="container">
      <img class="picOfTheDay" v-bind:src="image" v-bind:alt="title"/>
      <h4 class="py-3">{{ title }}</h4>
      <p class="picOfDayDescription mx-auto small">{{ description }}</p>
    </div>
    
  </div>
</template>

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
