// src/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const sequelize = require('./models');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const bidRoutes = require('./routes/bidRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/bids', bidRoutes);
app.use('/notifications', notificationRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('bid', (data) => {
    io.emit('update', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

sequelize.sync().then(() => {
  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
