var express = require('express')
var http = require('http')
var server = express()

server.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

http.createServer(server).listen(8001, () => {
    console.log('Server started at http://localhost:8001');
});
let data = require('./data');
server.get("/students", (req, res) => {
    res.json(data);
});
server.get("/students/:id", (req, res) => {
    const itemId = req.params.id;
    const item = data.find(_item => _item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.json({ message: `item ${itemId} doesn't exist` })
    }
});