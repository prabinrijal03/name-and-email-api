const express = require('express');
const app = express();
const db = require('./config/db');
const userModel = require('./model/user.model');
const userRouter = require('./routers/user.router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', userRouter);

const port = process.env.port || 4000;
app.listen(port, (req,res)=>{
    console.log(`Server started at port ${port}`);
});
