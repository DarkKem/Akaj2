const express = require('express')
const app = express();
const http = require("http")
const server = http.createServer(app)
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


// Setup mongodb Connection
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URL,
    // 'mongodb+srv://admin:admin@cluster0.inwitqb.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Setup rooting
app.use('/', require("./common/routes"))

// Setup io socket
const {Server} = require('socket.io')
const io = new Server(server)
io.on('connection', (socket) => {
    console.log('a user connected')
    // socket.on('message', (message) => {
    //     console.log('message', message)
    // })
    require("./common/sockets/Message").sockets(socket, io.sockets);
})
// Setup socket server

// Setup no routes handling
app.use((req, res) => {
    res.status(404);
    res.contentType("text/html");
    res.sendFile(__dirname + '/public/html/404.html');
});
// Setup http server
server.listen(parseInt(process.env.SERVER_PORT) || 5000, () => {
    let {port} = server.address()
    console.log(`Listening on port ${port}`)
})