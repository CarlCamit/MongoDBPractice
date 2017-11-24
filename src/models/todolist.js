const mongoose = require("./init")

const ToDoList = mongoose.model("ToDoList", {
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = ToDoList