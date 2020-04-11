import { Server, Model, Response } from 'miragejs'
import fireballData from './fireballsData.json'

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
                fireballs: fireballData
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-02-28 09:30:00',
                    //     'latitude': '45.7N',
                    //     'longitude': '15.1E',
                    //     'altitude': '34.5',
                    //     'velocity': '21.5',
                    //     'velocity_x': '-18.2',
                    //     'velocity_y': '-11.3',
                    //     'velocity_z': '-2.1',
                    //     'radiated_energy': '1.15E+11',
                    //     'impact_energy': '0.34'
                    // },
                    // {
                    //     'peak_brightness': '2020-02-24 22:21:00',
                    //     'latitude': '3.6N',
                    //     'longitude': '96.0E',
                    //     'altitude': '0',
                    //     'velocity': '0',
                    //     'velocity_x': '0',
                    //     'velocity_y': '0',
                    //     'velocity_z': '0',
                    //     'radiated_energy': '2.00E+10',
                    //     'impact_energy': '0.073'
                    // },
                    // {
                    //     'peak_brightness': '2020-01-16 09:31:00',
                    //     'latitude': '71.7S',
                    //     'longitude': '116.4W',
                    //     'altitude': '27.8',
                    //     'velocity': '12.9',
                    //     'velocity_x': '9.8',
                    //     'velocity_y': '-4.5',
                    //     'velocity_z': '7',
                    //     'radiated_energy': '5.9E+10',
                    //     'impact_energy': '0.19'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-02-28 09:30:00',
                    //     'latitude': '45.7N',
                    //     'longitude': '15.1E',
                    //     'altitude': '34.5',
                    //     'velocity': '21.5',
                    //     'velocity_x': '-18.2',
                    //     'velocity_y': '-11.3',
                    //     'velocity_z': '-2.1',
                    //     'radiated_energy': '1.15E+11',
                    //     'impact_energy': '0.34'
                    // },
                    // {
                    //     'peak_brightness': '2020-02-24 22:21:00',
                    //     'latitude': '3.6N',
                    //     'longitude': '96.0E',
                    //     'altitude': '0',
                    //     'velocity': '0',
                    //     'velocity_x': '0',
                    //     'velocity_y': '0',
                    //     'velocity_z': '0',
                    //     'radiated_energy': '2.00E+10',
                    //     'impact_energy': '0.073'
                    // },
                    // {
                    //     'peak_brightness': '2020-01-16 09:31:00',
                    //     'latitude': '71.7S',
                    //     'longitude': '116.4W',
                    //     'altitude': '27.8',
                    //     'velocity': '12.9',
                    //     'velocity_x': '9.8',
                    //     'velocity_y': '-4.5',
                    //     'velocity_z': '7',
                    //     'radiated_energy': '5.9E+10',
                    //     'impact_energy': '0.19'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // },
                    // {
                    //     'peak_brightness': '2020-03-04 20:25:00',
                    //     'latitude': '53.S',
                    //     'longitude': '90.8E',
                    //     'altitude': '24.3',
                    //     'velocity': '19.8',
                    //     'velocity_x': '-5.2',
                    //     'velocity_y': '2.2',
                    //     'velocity_z': '19.0',
                    //     'radiated_energy': '3.94E+11',
                    //     'impact_energy': '1'
                    // }
                // ]
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
                return new Response (
                    200,
                    {},
                    { message: "Success!" }
                )
            })

            this.get("/home", () => {
                return new Response(200, {'message': 'Success!'})
            })

            this.post("/fireballs.php", (schema) => {
                return new Response (
                    200,
                    {},
                    { 
                        data: schema.db.fireballs,
                        row_count: schema.db.fireballs.length
                    }
                )
            })


        }
    })

    return server
}