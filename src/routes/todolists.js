const express = require('express')
const router = express.Router()

const ToDoList = require("../models/todolists")

router.get("/todolists", (req, res) => {
    ToDoList.find().then((todolists) => {
        res.json(todolists)
    })
})

router.post("/todolists", (req, res) => {
    const attributes = req.body
    ToDoList.create(201).then((todolist) => {
        res.status(201).json(todolist)
    })
    .catch((error) => {
        res.status(400).json({ error: "Cannot create to do list"})
    })
})

router.get("/todolists/:id", (req, res) => {
    id = req.params["id"]
    ToDoList.findById(id).then((todolist) => {
        if (todolist) {
            res.status(200).json(todolist)
        }
        else {
            res.status(404).json({ message: "ID does not belong to a to do list" })
        }
    })
    .catch((error) => {
        res.status(400).json({ error: "Invalid ID" })
    })
})

router.patch("/todolists/:id", (req, res) => {
    id = req.params["id"]
    const attributes = req.body
    ToDoList.findByIdAnUpdate(id, attributes, {new: true}).then((todolist) => {
        if (todolist) {
            res.status(200).json({ message: `${todolist.description}'s status has been updated to ${todolist.completed}`})
        }
        else {
            res.status(200).json({ error: `To do list with the id: ${id} cannot be found`})
        }
    })
    .catch((error) => {
        res.status(400).json({ error: "Invalid ID" })
    })
})

router.delete("/todolists/:id", (req, res) => {
    id = req.params["id"]
    ToDoList.findByIdAndRemove(id).then((todolist) => {
        if (todolist) {
            res.status(200).json({ message: `${todolist.description} was removed from the database`})
        }
        else {
            res.status(400).json({ error: `To do list with the id: ${id} cannot be found`})
        }
    })
    .catch((error) => {
        res.status(404).json({ message: "Invalid ID"})
    })
})

module.exports = router