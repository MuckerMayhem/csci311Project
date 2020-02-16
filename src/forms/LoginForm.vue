<template>
  <div class="form-group">
    <form @submit.prevent="submit">
      
      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" 
          placeholder="Email address" v-model="form.email" 
          required autofocus/>
      </div>

      <div class="form-label-group" :class="{'hasError': $v.form.password.$error }">
        <input type="password" id="inputPassword" class="form-control" 
          placeholder="Password" v-model="form.password" required/>
        <!-- Errors to be displayed if error returned from password form -->
        <div class="text-sm mt-2 text-danger text-sm" v-if="$v.form.password.$error">
          <div v-if="!$v.maxLength">Password must not be longer than 40 characters.</div>
        </div>
      </div>

      <div class="custom-control custom-checkbox mb-3">
        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
        <label class="custom-control-label" for="customCheck1">Remember password</label>
      </div>
      <button class="btn btn-lg btn-dark btn-block btn-login text-uppercase font-weight-bold mb-2" 
        type="submit" @click.stop.prevent="submit()">Sign In</button>
      <div class="text-center">
        <a class="small" href="#">Forgot password?</a></div>
    </form>
  </div>
</template>

<script>
import { maxLength } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            form: {
                password: ""
            }
        };
    },
    validations: {
        form: {
            password: {max: maxLength(40) }
        }
    },

    methods: {
        submit() {
          this.$v.form.$touch();
          if (!this.$v.form.$error) {
            // do server-side call here...
            this.$router.push("/");
          }
        }
    }

}
</script>

<style scoped>
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