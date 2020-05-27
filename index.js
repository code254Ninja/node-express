//Importing third party modules to help in our applcations.
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Impoting the Routes

const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//Mounting the routes to my express server

app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);

//This is use to serve all the static files
app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>')

})

//Creating our server using the http third party module
const server = http.createServer(app);

//where application will listen
server.listen(port, hostname, () => {
    console.log(`Running at port http://${hostname}:${port}`);
})