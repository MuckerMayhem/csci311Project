<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light static-top shadow navbarHeight">
      <div class="container">
        <router-link to="/login" class="nav-link navbar-brand text-dark">
          CSCI311 Team Project
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarResponsive" aria-controls="navbarResponsive" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item px-2">
              <router-link to="/login" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: 'Roboto-Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.hasError {
  border-color: red;
}

.navbarHeight {
  height: 5rem;
}
</style>
