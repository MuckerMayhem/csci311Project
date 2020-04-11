<template>
    <div class="form-group">
        <form @submit.prevent="submit">

            <!-- Username form and validation -->
            <div class="form-group">
                <label class="text-nasa-dark" for="username">Username</label>
                <input autofocus class="form-control form__input" v-bind:class="{'is-invalid': $v.username.$error }" id="username" placeholder="Username" tabindex="1" 
                    v-model.trim.lazy="$v.username.$model"/>
                <div class="small text-danger text-left" v-if="!$v.username.maxLength">
                    Username must not contain more than {{$v.username.$params.maxLength.max}} characters.
                </div>
                <div class="small text-danger text-left" v-if="!$v.username.minLength">
                    Username must have at least {{$v.username.$params.minLength.min}} characters.
                </div>
                <!-- Render username errors from server -->
                <div class="small text-danger text-left" v-if="this.errors.username">
                    {{ this.errors.username }}
                </div>
            </div>

            <!-- Password form and validation -->
            <div class="form-group">
                <label class="text-nasa-dark" for="password">Password</label>
                <input class="form-control form__input" placeholder="Password" id="password" v-bind:class="{'is-invalid': $v.password.$error }" tabindex="2" type="password" 
                    v-model.trim.lazy="$v.password.$model"/>
                <div class="small text-danger text-left" v-if="!$v.password.maxLength">
                    Password must not contain more than {{$v.password.$params.maxLength.max}} characters.
                </div>
                <div class="small text-danger text-left" v-if="!$v.password.minLength">
                    Password must be at least  more than {{$v.password.$params.minLength.min}} characters.
                </div>
                <!-- Render password errors from server -->
                <div class="small text-danger text-left" v-if="this.errors.password">
                    {{ this.errors.password }}
                </div>
            </div>

            <div class="form-group text-center">
                <div class="small text-danger text-center" v-if="this.errors.message">
                    {{ this.errors.message }}
                </div>
                <button class="btn btn-md bg-nasa-dark text-light font-weight-bold mt-3 mb-2 py-2 px-5" 
                    tabindex="3" type="submit" :disabled="$v.$invalid">Sign In
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import { minLength, maxLength, required } from "vuelidate/lib/validators";
    import axios from 'axios';

    export default {
        data() {
            return {
                username: "",
                password: "",
                errors: {}
            }
        },
        validations: {
            username: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(40)
            },
            password: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(40)
            }
        },

        methods: {
            submit: function() {
                this.$v.$touch();
                if (!this.$v.$error) {
                    axios.post('/~csci311e/server/login.php', {
                        username: this.username,
                        password: this.password
                    })
                    .then(response => {
                        if (199 < response.status < 300) {
                            this.$cookies.set("logged_in", "True");
                            this.$router.push("/");
                        }
                    })
                    .catch(error => {
                        if (error.response) {
                            this.errors = Object.assign({}, this.errors, error.response.data);
                        }
                    });
                }
            }
        }
    }
</script>
