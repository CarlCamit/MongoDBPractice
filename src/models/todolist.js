const mongoose = require("./init")

const ToDoList = mongoose.model("ToDoList", {
    description: String,
    completed: {
        type: Boolean,
        required: [true, "Task must have a status"]
    }
})

module.exports = ToDoList