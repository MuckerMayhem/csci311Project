import { Server, Model, Response } from 'miragejs'

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
                        403,
                        {},
                        { message: "Unable to find a user with that username" }
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
                // let dataReq = JSON.parse(request.requestBody)

                return new Response (
                    200,
                    {},
                    { message: "Success!" }
                )
            })

            this.get("/home", () => {
                return new Response(200, {'message': 'Success!'})
            })


        }
    })

    return server
}