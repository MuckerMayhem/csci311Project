import { Server, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
    let server = new Server({
        environment,
        models: {
            user: Model,
        },

        seeds(server) {
            server.create("user", { username: "macdonaldezra", email: "macdonaldezra@gmail.com", password: "password" }),
            server.create("user", { username: "robert", email: "robert@gmail.com", password: "password" })
        },

        routes() {
            this.namespace = "~csci311e/server"

            this.post("/login.php", (schema, request) => {
                let username = JSON.parse(request.requestBody).username
                return schema.user.find(username)
                
            })
        }
    })

    return server
}