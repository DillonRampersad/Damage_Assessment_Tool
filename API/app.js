const express = require('express');
const app = express();
const { mongoose } = require ('./db/mongoose');
const bodyParser = require ('body-parser');
const morgan = require('morgan');
const res = require('express/lib/response');


/*Load Middleware*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

//Handling CORS errors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

//Import Routers
const DamageAssessmentsRoute = require('./routers/DamageAssessmentsRoutes')
const EventsRouter = require('./routers/EventsRouters')

//Register Router
app.use(DamageAssessmentsRoute)
app.use(EventsRouter)

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status= 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

//Listening to the server on port 3000
app.listen(3000,()=>{
    console.log("Listening to port 3000");
})