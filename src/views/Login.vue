<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading text-nasa-dark my-5 text-center">Welcome back!</h3>
                <login-form/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginForm from '../forms/LoginForm.vue';

  export default {
    name: 'Login',
    components: {
      'login-form': LoginForm
    }
  }
</script>

<style scoped>
  .login, .image {
    min-height: 100vh;
  }

  .login-heading {
    font-weight: 500;
  }

  .bg-image {
    /* Image retrieved from: https://www.flickr.com/photos/nasacommons/4857947689/ */
    background-image: url('../assets/lunar-prospector.jpg');
    background-size: cover;
    background-position: center;
  }
</style>