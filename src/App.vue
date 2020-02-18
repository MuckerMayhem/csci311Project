<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light static-top shadow navbarHeight">
      <div class="container">
        <router-link to="/login" alt="Login" class="nav-link navbar-brand text-dark">
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
                <router-link to="/about" alt="About" class="nav-link">About</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/login" alt="Login" class="nav-link">Login</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/register" alt="Register" class="nav-link">Register</router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Side navigation menu to be rendered when a user is logged on -->
    <template v-if="authenticated === true">
      <div class="sidenav">
        <router-link alt="Home" to="/" 
            class="sidenav-link py-2 text-light font-weight-bold home-nav-link">
          Home
        </router-link>
        <hr>
        <router-link alt="Scouted Objects" to="/scout" 
            class="sidenav-link py-2 text-light font-weight-bold">
          Scouted Objects
        </router-link>
        <router-link alt="Close Approaching Objects" to="/close-approaching" 
            class="sidenav-link py-2 text-light font-weight-bold">
          Confirmed Objects
        </router-link>
      </div>
    </template>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        href: null,
        active: null,
        link: null,
        nav: null
      }
    },
    watch: {
      $route () {
        this.authenticated = this.$cookies.isKey("session_id");
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
hr {
  background-color: aliceblue;
  border: none;
  height: 1px;
}

#app {
  font-family: 'Roboto-Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.navbarHeight {
  height: 5rem;
}

.home-nav-link {
  font-size: 1.5rem;
}

.sidenav {
  height: 100vh;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #373a47;
  overflow-x: hidden;
  padding-top: 5rem;
}

.sidenav-link {
  display: block;

}

</style>
