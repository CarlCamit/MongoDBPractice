const Artist = require('./artist')

// List all existing artists
Artist.find().then((artists) => { // Once it has loaded, this function will be called
    console.log("Artists:", artists)
})
.catch((error) => {
    console.log(error)
})

Artist.create([
    { name: "Phoenix" },
    { name: "Glass Animals" },
    { name: "Foals" }
]).then((artists) => {
    console.log("Created artists", artists)
})