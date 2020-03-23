<template>
    <div class="form-group">
        <form @submit.prevent="submit">
            <!-- Username form and errors -->
            <div class="form-group row" :class="{ 'form-group--error': $v.username.$error }">
                <label class="text-nasa-dark col-sm-3 col-form-label" for="username">Username: </label>
                <div class="col-sm-9">
                    <input autofocus class="form-control form__input" v-bind:class="{'is-invalid': $v.username.$error }"
                        id="username" placeholder="Username" tabindex="1" type="text" v-model.trim.lazy="$v.username.$model"/>
                </div>
                <div class="small text-danger text-left ml-3" v-if="!$v.username.maxLength">
                    Username must not contain more than {{$v.username.$params.maxLength.max}} characters.
                </div>
                <div class="small text-danger text-left ml-3" v-if="!$v.username.minLength">
                    Username must have at least {{$v.username.$params.minLength.min}} characters.
                </div>
            </div>

            <!-- Email form and errors -->
            <div class="form-group row">
                <label class="text-nasa-dark col-sm-3 col-form-label" for="password">Email: </label>
                <div class="col-sm-9">
                    <input class="form-control form__input" id="email" placeholder="Email" v-bind:class="{'is-invalid': $v.email.$error }"
                        tabindex="2" v-model.trim.lazy="$v.email.$model"/>
                </div>
                <div class="small text-danger text-left mb-2" v-if="!$v.email.email">
                    Email is invalid.
                </div>
            </div>
            <hr class="bg-nasa-dark">

            <!-- Password form and errors -->
            <div class="form-group row">
                <label class="text-nasa-dark col-sm-3 col-form-label" for="password">Password: </label>
                <div class="col-sm-9">
                    <input class="form-control form__input" placeholder="Password" id="password" v-bind:class="{'is-invalid': $v.password.$error }" tabindex="2" type="password" 
                        v-model.trim.lazy="$v.password.$model"/>
                </div>
                <div class="small text-danger text-left ml-3" v-if="!$v.password.maxLength">
                    Password must not contain more than {{$v.password.$params.maxLength.max}} characters.
                </div>
                <div class="small text-danger text-left ml-3" v-if="!$v.password.minLength">
                    Password must be at least  more than {{$v.password.$params.minLength.min}} characters.
                </div>
            </div>

            <!-- Verify password form and errors -->
            <div class="form-group row">
                <label class="text-nasa-dark col-sm-3 col-form-label" for="verify-password">Confirm: </label>
                <div class="col-sm-9">
                    <input class="form-control" id="verify-password" placeholder="Confirm Password" v-bind:class="{'is-invalid': $v.verify_password.$error }"
                        tabindex="4" type="password" v-model="$v.verify_password.$model"/>
                </div>
                <div class="small text-danger text-left ml-3" 
                    v-if="!$v.verify_password.sameAs && $v.password.required && $v.verify_password.required ">
                    Passwords do not match.
                </div>
            </div>

            <!-- Form errors and Submit Menu -->
            <div class="form-group text-center">
                <button class="btn btn-md bg-nasa-dark text-light font-weight-bold mt-3 mb-2 py-2 px-5" 
                    tabindex="4" type="submit" :disabled="$v.$invalid">Register
                </button>
            </div>
            <p class="text-center">Already have an account? <router-link alt="Login" to="/login">Sign In</router-link></p>
        </form>
    </div>
</template>

<script>

    import { required, minLength, maxLength, email, sameAs } from "vuelidate/lib/validators";
    import axios from 'axios';

    export default {
        data() {
            return {
                username: "",
                email: "",
                password: "",
                verify_password: "",
                errors: null
            }
        },

        validations: {
            username: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(40)
            },
            email: {
                required,
                email: email()
            },
            password: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(40)
            },
            verify_password: {
                required,
                sameAs: sameAs('password')
            }
        },

        methods: {
            submit() {
                this.$v.$touch();
                if (!this.$v.$error) {
                    axios.post('server/axios.php', {
                        email: this.email,
                        username: this.username,
                        password: this.password
                    })
                    .then(function (response) {
                        console.log(response.headers);
                        console.log(response.data);
                        this.$cookies.set("session_id", "plural-of-pegasus-should-be-pegasi");
                        this.$router.push("/");
                    })
                    .catch(function (error) {
                        this.errors = error.data;
                        console.log(error);
                    });

                }
            }
        }

    }
</script>

<style scoped>
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