const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/POLLING-SYSTEM');

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log('Data Base is connected successfully');
});

module.exports = mongoose;