const Artist = require('./artist')
const ToDoList = require('./todolist')

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

// List all existing to do lists
ToDoList.find().then((todolists) => { // Once it has loaded, this function will be called
    console.log("To Do List:", todolists)
})
.catch((error) => {
    console.log(error)
})

ToDoList.create([
    { 
        description: "Take out trash",
        status: true
    },
    { 
        description: "Cook dinner",
        status: false
    },
    { 
        description: "Wash dishes",
        status: false
    }
]).then((todolists) => {
    console.log("Created to do list", todolists)
})

