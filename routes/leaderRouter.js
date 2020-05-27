const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders back to you!');
})
.post((req,res,next) => {
    res.end('This leader will be added: ' + req.body.name + ' With the details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('This operation is not supported in /leaders')
})
.delete((req,res,next) => {
    res.end('All the leaders are deleted')
});


leaderRouter.route('/:leaderId')
.get((req,res,next) => {
   res.end('Will send the leader: ' + req.params.leaderId + ' back to you!')
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported for promotion : ' + req.params.leaderId);
})
.put((req,res,next) => {
    res.write('Updating leader: ' + req.params.leader + '\n');
    res.end('Promotion: ' + req.body.name + ' with details: ' + req.body.description + ' has been updated');
})
.delete((req,res,next) => {
    res.end('Promotion: ' + req.params.leaderId + ' has been deleted');
});

module.exports = leaderRouter;