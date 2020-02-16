<template>
  <div class="form-group">
      <form class="form-signin" @submit.prevent="submit">
        <div class="form-label-group">
          <label for="username">Username</label>
          <input type="text" id="username" class="form-control" placeholder="username" 
            v-model="form.username" tabindex="1" required autofocus/>
        </div>

        <div class="form-label-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" placeholder="email"
            v-model="form.email" tabindex="2" required/>
        </div>
        <hr>

        <div class="form-label-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" placeholder="password"
            v-model="form.password" tabindex="3" required/>
        </div>

        <div class="form-label-group">
          <label for="verify-password">Verify Password</label>
          <input type="password" id="verify-password" class="form-control"
            placeholder="verify password" v-model="form.verify_password" tabindex="4" required/>
        </div>
        <div class="error invalid-feedback" v-if="!$v.form.verify_password.sameAs">
          Passwords do not match.
        </div>

        <button class="btn btn-lg btn-dark btn-block btn-login text-uppercase font-weight-bold mb-2" 
          type="submit" tabindex="5" @click.stop.prevent="submit()">Register</button>
        <router-link to="/login" class="d-block text-center mt-2">Sign In</router-link>
      </form>
  </div>
</template>

<script>

import { sameAs } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            form: {
                username: "",
                email: "",
                password: "",
                verify_password: "" 
            }
        };
    },

    validations: {
      
        form: {
          verify_password: { sameAs: sameAs('password') }
        }
    },

    methods: {
        submit() {
          this.$v.form.$touch();
          if (!this.$v.form.$error) {
            // do server-side call here...
            this.$cookies.set("session_id", "plural-of-pegasus-should-be-pegasi");
            this.$router.push("/");
          }
        }
    }

}
</script>

<style scoped>
label {
  visibility: hidden;
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

.form-label-group > input {
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