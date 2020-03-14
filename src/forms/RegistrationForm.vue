<template>
    <div class="form-group">
        <form @submit.prevent="submit" class="form-signin">
            <div class="form-label-group">
                <label for="username">Username</label>
                <input autofocus class="form-control" id="username" placeholder="username"
                       required tabindex="1" type="text" v-model="form.username"/>
            </div>

            <div class="form-label-group">
                <label for="email">Email</label>
                <input class="form-control" id="email" placeholder="email" required
                       tabindex="2" type="email" v-model="form.email"/>
            </div>
            <hr>

            <div class="form-label-group">
                <label for="password">Password</label>
                <input class="form-control" id="password" placeholder="password" required
                       tabindex="3" type="password" v-model="form.password"/>
            </div>

            <div class="form-label-group">
                <label for="verify-password">Verify Password</label>
                <input class="form-control" id="verify-password" placeholder="verify password"
                       required tabindex="4" type="password" v-model="form.verify_password"/>
            </div>
            <div class="error invalid-feedback" v-if="!$v.form.verify_password.sameAs">
                Passwords do not match.
            </div>

            <button @click.stop.prevent="submit()"
                    class="btn btn-lg btn-dark btn-block btn-login text-uppercase font-weight-bold mb-2" tabindex="5"
                    type="submit">Register
            </button>
            <router-link alt="Login" class="d-block text-center mt-2" to="/login">Sign In</router-link>
        </form>
    </div>
</template>

<script>

    import {sameAs} from "vuelidate/lib/validators";
    import axios from 'axios';

    export default {
        data() {
            return {
                form: {
                    username: "",
                    email: "",
                    password: "",
                    verify_password: ""
                },
                stuff: null
            };
        },

        validations: {

            form: {
                verify_password: {sameAs: sameAs('password')}
            }
        },

        methods: {
            submit() {
                this.$v.form.$touch();
                alert("test");
                if (!this.$v.form.$error) {
                    axios.post('http://localhost:63342/csci311/php/axios.php', {
                        request: 2,
                        email: this.email,
                        username: this.username,
                        password: this.password
                    })
                        .then(function (response) {
                            this.stuff = response;
                            alert(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    this.$cookies.set("session_id", "plural-of-pegasus-should-be-pegasi");
                    // this.$router.push("/");


                }
                this.$cookies.set("session_id", "plural-of-pegasus-should-be-pegasi");
                // this.$router.push("/");
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