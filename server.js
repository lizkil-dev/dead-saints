'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 8000

//Variables for content
let content = [];
const paths = {
  content: './data/content.json'
}

//Middleware
app.use(express.static('public'));
// app.use(express.json()); //nur mit post => (request.body.name)

// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/index.html')
// })              => brauchen wir nicht, wird durch app.use(express.static('public')) ersetzt

//get data from content and send it to frontend
 app.get('/api', (request, response) => {
   const saintName = request.query.name  // alternative schreib- bzw. suchweise nach queryparameter

  // app.get('/api/:name', (request, response) => {
  //    const saintName = request.params.name
  //  if(content[saintName]){
      response.json(content[saintName])
  //  }else{
  //    response.json(content['unknown'])
  //  }
})


const init = () => {
  fs.readFile(
      paths.content,
      (err, data) => {
        if (err) {
         content = [];
        }else {
          content = JSON.parse(data.toString());
        }
    }
  )

  app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}.`);
  })
}

init();