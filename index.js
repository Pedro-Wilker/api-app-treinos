const express = require('express');
const server = express();
const treinos = require('./src/data/treinos.json');

server.get('/treinos', (req, res)=>{
    return res.json(treinos)
})

server.listen(3000, () => {
    console.log("SERVIDOR ONLINE")
})