<template>
    <div class="about container text-center">
        <h2>Get Engaged with NASA Data</h2>
        <h6 class="my-4 mx-auto text-left w-75">
            This project provides a user friendly interface for accessing two of NASA's many API's.
            <br/><br/>
            The information available to users through our application includes data on both speculative 
            and confirmed objects closely approaching Earth. This includes information like object size, velocity, distance
            from Earth, and what date the object has or will closely approach Earth.
            <br/><br/>
            The application is designed to explore ways to improve data accessibility by leveraging the latest and greatest
            tools in modern web development, and is developed as part of meeting project requirements for the Introduction to Web
            Development course in the Spring 2020 semester at Vancouver Island University.
        </h6>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style scoped>
    .about {
        min-height: 100vh;
        margin: auto;
        padding-top: 7.5rem;
    }
</style>
