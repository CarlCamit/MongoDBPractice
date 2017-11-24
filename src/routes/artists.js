const express = require('express')
const router = express.Router()

const Artist = require('../models/artist')

router.get('/artists', (req, res) => {
    Artist.find().then((artists) => {
        res.json(artists)
    })
})

router.get('/artists/:id', (req, res) => {
    id = req.params["id"]
    // Find by a certain attribute inherent to MongoDB
    Artist.findById(id).then((artist) => {
        if (artist) {
            res.json(artist)
        }
        else {
            res.status(404).json({ message: "ID does not belong to an artist"})
        }
    })
    .catch((error) => {
        res.status(400).json({ error: `Invalid ID` })
    })
})

router.post('/artists', (req, res) => {
    const attributes = req.body
    Artist.create(attributes).then((artist) => {
        res.status(201).json(artist)
    })
    .catch((error) => {
        res.status(400).json({ error: error })
    })
})

router.patch('/artists/:id', (req, res) => {
    id = req.params["id"]
    const attributes = req.body
    Artist.findByIdAndUpdate(id, attributes, {new: true}).then((artist) => {
        if (artist) {
            res.status(200).json({ message: `Artist with an id: ${id} has been updated to ${artist.name}`})
        }
        else {
            res.status(404).json({ error: "ID does not belong to an artist"})
        }
    })
    .catch((error) => {
        res.status(400).json({ error: "Invalid ID"})
    })
})

router.delete('/artists/:id', (req, res) => {
    id = req.params["id"]
    Artist.findByIdAndRemove(id).then((artist) => {
        if (artist) {
            res.status(200).json({ message: `Artist with an id: ${id} was removed from the database`})
        }
        else {
            res.status(400).json({ error: `Artist with the id: ${id} cannot be found`})
        }
    })
    .catch((error) => {
        res.status(404).json({ message: "Invalid ID"})
    })
})

module.exports = router