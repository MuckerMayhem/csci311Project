<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="register d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto mt-5">
                <h3 class="card-title text-nasa-dark text-center mb-4">Register</h3>
                <registration-form/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RegistrationForm from '../forms/RegistrationForm.vue';

  export default {
    name: 'Register',
    components: {
      'registration-form': RegistrationForm
    }
  }
</script>

<style scoped>
  .register, .image {
    min-height: 100vh;
  }

  .bg-image {
    /* Image retrieved from: https://www.flickr.com/photos/nasacommons/38956428714/ */
    background-image: url('../assets/elevation-satellite-liftoff.jpg');
    background-size: cover;
    background-position: center;
  }

  .register-heading {
    font-weight: 500;
  }


</style>
