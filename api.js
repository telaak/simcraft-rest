const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const fs = require('fs')
var exec = require('child_process').execFile;

const simcPath = ''

http.listen(80, () => {
  console.log('listening on *:80')
})

app.get('/api/:region/:realm/:character', (req, res) => {
  let options = [`armory=${req.params.region},${req.params.realm},${req.params.character}`, `html=${req.params.character}.html`]
  exec(simcPath, options, function (err, stdout, stderr) {
    if(stderr) {
      res.send('Error')
    } else {
      res.sendFile(`${req.params.character}.html`, { root: __dirname })
    }
  });
  
})