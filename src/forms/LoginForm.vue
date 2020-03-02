<template>
    <div class="form-group">
        <form @submit.prevent="submit">
            <div class="form-label-group">
                <label for="email">Email</label>
                <input autofocus class="form-control" id="email"
                       placeholder="Email address" required tabindex="1"
                       type="email" v-model="form.email"/>
            </div>

            <div :class="{'hasError': $v.form.password.$error }" class="form-label-group">
                <label for="password">Password</label>
                <input class="form-control" id="password" placeholder="Password"
                       required tabindex="2" type="password" v-model="form.password"/>
                <!-- Errors to be displayed if error returned from password form -->
                <div class="text-sm mt-2 text-danger text-sm" v-if="$v.form.password.$error">
                    <div v-if="!$v.maxLength">Password must not be longer than 40 characters.</div>
                </div>
            </div>

            <button @click.stop.prevent="submit()"
                    class="btn btn-lg btn-dark btn-block btn-login text-uppercase font-weight-bold mb-2" tabindex="4"
                    type="submit">Sign In
            </button>
        </form>
    </div>
</template>

<script>
    import {maxLength} from "vuelidate/lib/validators";

    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                }
            };
        },
        validations: {
            form: {
                password: {max: maxLength(40)}
            }
        },

        methods: {
            submit() {
                this.$v.form.$touch();
                if (!this.$v.form.$error) {
                    // do server-side call here...
                    // ... if server agrees that data is valid...
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