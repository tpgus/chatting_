const http = require('http');
const express = require('express');
const cors = require('cors');
const socket = require('socket.io');

const handleSocketEvents = require('./socket');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// Start API Server
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '5mb' }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  })
);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
// End API Server

// Start WebSocket Server
const server = http.createServer(app);
const ws = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
handleSocketEvents(ws);
// End WebSocket Server

// const PORT = process.env.PORT || 5500;
server.listen(5500, () => console.log('Server is running at http://localhost:5500'));
