const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions back to you!');
})
.post((req,res,next) => {
    res.end('This promotion will be added: ' + req.body.name + ' With the details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('This method is not supported')
})
.delete((req,res,next) => {
    res.end('All the promotion are deleted')
});


promotionRouter.route('/:promotionId')
.get((req,res,next) => {
   res.end('Will send the promotion: ' + req.params.promotionId + ' back to you!')
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported for promotion : ' + req.params.promotionId);
})
.put((req,res,next) => {
    res.write('Updating promotion: ' + req.params.promotionId + '\n');
    res.end('Promotion: ' + req.body.name + ' with details: ' + req.body.description + ' has been updated');
})
.delete((req,res,next) => {
    res.end('Promotion: ' + req.params.promotionId + ' has been deleted');
});

module.exports = promotionRouter;