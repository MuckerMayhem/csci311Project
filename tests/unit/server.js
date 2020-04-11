import { Server, Model, Response } from 'miragejs'
import fireballData from './fireballsData.json'
import sentryData from './sentryData.json'

export function makeServer({ environment = 'development' } = {}) {
    let server = new Server({
        environment,
        models: {
            user: Model,
        },

        seeds(server) {
            server.db.loadData({
                users: [
                    {
                        'username': 'macdonaldezra',
                        'email': 'macdonaldezra@gmail.com',
                        'password': 'password'
                    },
                    {
                        'username': 'colehoule',
                        'email': 'ohoulihan@live.ca',
                        'password': 'password'
                    }
                ],
                fireballs: fireballData,
                sentry: sentryData
            })
        },

        routes() {
            this.namespace = "~csci311e/server"

            // Login route
            this.post("/login.php", (schema, request) => {
                let user = JSON.parse(request.requestBody)
                let foundUser = schema.db.users.findBy({username: user.username})

                if (foundUser.username.length === 0 || foundUser.username === null) {
                    return new Response (
                        403, // status code
                        {}, // headers
                        { message: "Unable to find a user with that username" } // response body
                    )
                }

                if (foundUser.password === user.password) {
                    return new Response (
                        200,
                        {},
                        { message: "Success!" }
                    )
                }
                return new Response (
                    403,
                    {},
                    { message: "Unable to find a user with that username and password" }
                )
            })

            // Registration route
            this.post("/register.php", (schema, request) => {
                let user = JSON.parse(request.requestBody)
                let foundUser = schema.db.users.findBy({username: user.username})

                if (foundUser.username.length !== 0 || foundUser.username !== null) {
                    return new Response (
                        403,
                        {},
                        { message: "User with that username already exists." }
                    )
                } else {
                    return new Response (
                        200,
                        {},
                        { message: "Success!" }
                    )
                }
            })

            // Home routes
            this.post("/home.php", () => {
                return new Response (
                    200,
                    {},
                    { message: "Success!" }
                )
            })

            this.get("/home", () => {
                return new Response(200, {'message': 'Success!'})
            })

            this.get("/fireballs.php", (schema) => {
                return new Response (
                    200,
                    {}, 
                    { data: schema.db.fireballs }
                )
            })

            this.get("/sentry.php", (schema) => {
                return new Response (
                    200,
                    {},
                    { data: schema.db.sentry }
                )
            })


        }
    })

    return server
}