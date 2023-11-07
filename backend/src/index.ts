import express from 'express'
import cardRouter from './routes/cards'
import { createServer } from "http";

const app = express()
app.use(express.json()) //middleware


const httpServer = createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});


const PORT = 3000
let counter = 0

app.get('/test', (req, res) => {    
    console.log("hello world");
    res.send('V 1.1')
})

io.on('connection', (socket: any) => {
    console.log('a user connected');
  
    socket.on('message', (message: any) => {
      console.log(message);
      io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
  
    socket.on('disconnect', () => {
      console.log('a user disconnected!');
    });

    setInterval(() => {
        io.emit('message', Math.random());
        counter++;
      }, 5000);
  });

httpServer.listen(PORT);
app.use('/api/cards', cardRouter)

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

