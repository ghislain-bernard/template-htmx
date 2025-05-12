// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
import express from 'express';
// ------------------------------------------------------------------------------------------------------------------ //
const environment: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
//
const application = express();
const port = 3000;
//
application.use(express.static('dist'));
//
application.get('/random', (request, response) => {
  response.send(Math.floor(Math.random() * 10));
});
//
application.get('/hx/load', (request, response) => {
  response.send('<a hx-get="/random">?</a>'.repeat(9));
});
//
application.listen(port, () => {
  console.log('Listening on http://localhost:' + port + ' [' + environment + '] ');
});
// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
