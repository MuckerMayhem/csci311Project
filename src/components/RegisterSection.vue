<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="register d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h5 class="card-title text-center">Register</h5>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus>
                  </div>
                  <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
                  </div>
                  <hr>
                  <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                  </div>
                  <div class="form-label-group">
                    <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Verify Password" required>
                  </div>
                  <button class="btn btn-lg btn-dark btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                  <a class="d-block text-center mt-2 small" href="#">Sign In</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginSection'
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

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

</style>