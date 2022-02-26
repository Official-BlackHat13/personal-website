const express = require('express');
const path = require('path');
const fs = require('fs');

const app = new express();

// Host components
fs.readdir(path.join(__dirname, '/components'), (err, folders) => {
    folders.forEach(folder => {
        app.use(`/${folder}`, express.static(path.join(__dirname, `/components/${folder}`)))
    });
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/home.html'))
})

app.listen(3000, (req, res) => {
    console.log(`[${new Date(Date.now()).toUTCString()}] listening on port 3000`);
});
console.log(app)