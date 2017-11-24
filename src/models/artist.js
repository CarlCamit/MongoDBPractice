// Ensure we have establish a connection to the databased
const mongoose = require('./init')

// Define our model
const Artist = mongoose.model('Artist', {
    name: String
})

module.exports = Artist