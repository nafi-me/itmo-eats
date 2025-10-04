const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('ITMO Eats Backend is running!');
});

// Socket.io for chat
io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id);
  socket.on('send_message', (data) => {
    io.emit('receive_message', data);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected: ' + socket.id);
  });
});

const PORT = config.port;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
