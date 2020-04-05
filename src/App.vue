<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow header-nav">
      <div class="container bg-nasa-blue">
        <router-link to="/login" alt="Login" class="nav-link navbar-brand text-light font-weight-bold">
          NASAnalysis
        </router-link>
        <button aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler" data-target="#navbarResponsive"
                data-toggle="collapse" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <template v-if="authenticated === true">
              <li class="nav-item px-2">
                <button class="nav-item px-2 btn text-light header-nav-font" @click="logout()">Logout</button>
              </li>
            </template>
            <template v-if="authenticated === false">
              <li class="nav-item px-2">
                <router-link to="/about" alt="About" class="nav-link header-nav-font">About</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/login" alt="Login" class="nav-link header-nav-font">Login</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/register" alt="Register" class="nav-link header-nav-font">Register</router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Side navigation menu to be rendered when a user is logged on -->
    <template v-if="authenticated === true">
      <div class="sidenav">
         <h3 class="text-dark text-center font-weight-lighter pt-3">Data Tables</h3>
        <hr/>
          <router-link alt="Scouted Objects" class="sidenav-link py-3 text-dark" to="/scout">
            <img class="sidenav-icon mx-3" src="./assets/comet-1.png"/>
            Scouted NEOs
          </router-link>

          <router-link alt="Close Approaching Objects" class="sidenav-link py-3 text-dark" to="/close-approaching">
            <img class="sidenav-icon mx-3" src="./assets/planet-earth-4.png"/>
            Confirmed NEOs
          </router-link>
      </div>
    </template>
    <router-view/>

    <footer class="m-auto main-footer">
      <p> Copyright &copy;2020 Vancouver Island University <template v-if="authenticated===true"> | Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></template></p>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        authenticated: this.$cookies.isKey("logged_in")
      }
    },
    watch: {
      $route (to) {
        if (to === "/" && !this.authenticated) {
          this.$router.push("/login");
        }
        this.authenticated = this.$cookies.isKey("logged_in");
      }
    },
    methods: {
      logout() {
        axios.post('/~csci311e/server/login.php');
        this.$cookies.remove("logged_in");
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

  }

  .header-nav {
    height: 5rem;
    background-color: #205ba8 !important;
  }

  .header-nav-font {
    font-weight: 500;
    font-size: 1.1rem;
  }

  .home-nav-link {
    font-size: 1.5rem;
  }

  .sidenav {
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow-x: hidden;
    padding-top: 5rem;
    background-color: #d8dee4;
  }

  .sidenav-link {
    display: block;
    padding-left: 1.5rem;
  }

  .sidenav-icon {
    max-height: 35px;
    max-width: 35px;
  }

  .bg-nasa-blue {
    background-color: #205ba8 !important;
  }

  .bg-nasa-dark {
    background-color: #3B4B5A !important;
  }

  .text-nasa-dark {
    color: #3B4B5A !important;
  }

  .main-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3rem;
    text-align: center;
    font-size: small;
  }

</style>