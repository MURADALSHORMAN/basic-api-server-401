'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFounderHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const app = express();
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);


app.get('/', (req, res) => {
    res.send('serverworking');
});

app.get('/bad',(res,req)=>{
    throw new Error('Error');
});

app.use('*', notFounderHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => { console.log(`working on port ${port}`) });
    },
};