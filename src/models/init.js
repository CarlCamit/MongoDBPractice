const mongoose = require('mongoose');

//connect to our local database (that can be called whatever we want - for development anyway, tends to get locked down for production)
mongoose.connect('mongodb://localhost/music-api', { 
  useMongoClient: true }, (error) => {
  //If there was an error connecting to the database
    if (error) {
    console.error('Error connecting to MongoDB database', error)
    }
 });
  //use the promise functionality built into Node.js
mongoose.Promise = global.Promise;

module.exports = mongoose