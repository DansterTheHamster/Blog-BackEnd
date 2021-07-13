const express = require('express');
const { MongoClient, ObjectId } = require("mongodb");

const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.bodyParser());

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const PORT = 4000;

// // Load Config
 dotenv.config({ path: './config/config.env' });


//  app.get('/employees', (req,res) => {
//      res.send('Employees!');
//  });



// let db;

// MongoClient.connect(process.env.MONGO_URI, {useUnifiedTopology: true}, function(err,client){
//     console.log("Connected to MongoDB successfully");
//    // db = client.db("mean-challenge");
    
// });


    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Mongo DB Connected: ');


// Routes
app.use('/', require('./routes/index'));

app.get('/', (req, res) => {
    res.send("Hello World");
});

/*
    Create a blog. 
    1. Fetch the author, title, content from req.body.whatever.
    2. Store in MongoDB.$
    3. Send res.send("Blog added") if everything is right.
    4. Catch error if there's a problem and console.log it. 
*/
app.post('/create', (req, res) => {

});


/*
    Get all blogs.
    1. res.send all the blogs in MongDB.
*/
app.get('/blogs', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });