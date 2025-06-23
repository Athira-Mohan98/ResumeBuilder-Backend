//1.improt json-server
const jsonServer = require('json-server')

//2. create a server using json file
const server = jsonServer.create()

//3. set up a middleware
const middleware = jsonServer.defaults()

//4. setup routes
const route = jsonServer.router('db.json')

//5.import cors
const cors = require('cors')

//6 implementing use
server.use(cors())
server.use(middleware)
server.use(route)

//7. create a port

const PORT = process.env.PORT || 3000

//8 start server
server.listen(PORT, () => {
    console.log("Server running on the port", PORT);
});



