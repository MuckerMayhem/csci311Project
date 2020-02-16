<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow navbarHeight">
      <div class="container">
        <router-link to="/login" class="nav-link navbar-brand text-dark">
          NASAnalysis
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarResponsive" aria-controls="navbarResponsive" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <template v-if="authenticated === true">
              <li class="nav-item px-2">
                <button class="nav-item px-2 btn text-dark" @click="logout()">Logout</button>
              </li>
            </template>
            <template v-if="authenticated === false">
              <li class="nav-item px-2">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/register" class="nav-link">Register</router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        authenticated: false
      }
    },
    watch: {
      $route () {
        this.authenticated = this.$cookies.isKey("session_id")
      }
    },
    methods: {
      logout() {
        this.$cookies.remove("session_id");
        this.$router.push("/login");
      }
    }

  }
</script>

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
