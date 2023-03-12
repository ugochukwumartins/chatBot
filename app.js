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
  
  // when the client emits 'new message', this listens and executes
//   socket.on('new message', (data) => {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new message', {
//       username: socket.username,
//       message: data
//     });
//   });

//   // when the client emits 'add user', this listens and executes
//   socket.on('add user', (username) => {
//     if (addedUser) return;

//     // we store the username in the socket session for this client
//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit('login', {
//       numUsers: numUsers
//     });
//     // echo globally (all clients) that a person has connected
//     socket.broadcast.emit('user joined', {
//       username: socket.username,
//       numUsers: numUsers
//     });
//   });

//   // when the client emits 'typing', we broadcast it to others
//   socket.on('typing', () => {
//     socket.broadcast.emit('typing', {
//       username: socket.username
//     });
//   });

//   // when the client emits 'stop typing', we broadcast it to others
//   socket.on('stop typing', () => {
//     socket.broadcast.emit('stop typing', {
//       username: socket.username
//     });
//   });

//   // when the user disconnects.. perform this
//   socket.on('disconnect', () => {
//     if (addedUser) {
//       --numUsers;

//       // echo globally that this client has left
//       socket.broadcast.emit('user left', {
//         username: socket.username,
//         numUsers: numUsers
//       });
//     }
//   });


});


server.listen(port, () => {
    console.log('Server listening at port %d', port);
  
  
  });
  