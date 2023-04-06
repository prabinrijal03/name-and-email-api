const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost:27017/data').on('open',()=>{
    console.log('Mongodb connected successfully');
}).on('error',()=>{
    console.log('mongodb connection error');
});

module.exports = connection;

