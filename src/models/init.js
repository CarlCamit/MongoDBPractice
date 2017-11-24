const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
// Use the Promise functionality built into Node.js
mongoose.Promise = global.Promise

module.exports = mongoose