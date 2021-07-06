//Name database News
//Name of collection that contains news is newslist

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose') // new line
const bodyParser = require('body-parser') //new line

const app = express();
const http = require('http').createServer(app);

app.use(cors()); //new line

const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
}); 

const task = require('./routes/NewsRoutes') //new Line
const customerRoutes = require('./routes/CustomerRoutes') //new Line
app.use('/customer', customerRoutes);

app.use('/news', task); //new line

app.get('/', (req, res) => {
    res.send('hello');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    });
})

//-----------------------------------------------------------------------------------------
//new code
mongoose.connect(
    //'mongodb://mongo-db:27017/taskManager',
    'mongodb://localhost:27017/news',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err) => err ? console.log('Something got wrong', err) : console.log('DB Connected')
)

//--------------------------------------------------------------------------------------------


http.listen(3000, () => {
    console.log("Server running on port 3000");
});