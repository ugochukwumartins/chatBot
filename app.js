// Setup basic express server
const express = require('express');
const orderRoute = require("./routes/add_order");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { connectToDb } = require("./db");


const port = process.env.PORT || 3000;



// Routing


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(orderRoute);


// Chatroom
connectToDb();




io.on('connection', (socket) => {
  
  console.log(socket.id)
  




});


server.listen(port, () => {
    console.log('Server listening at port %d', port);
  
  
  });
  