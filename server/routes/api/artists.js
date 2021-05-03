const express = require('express');
const router = express.Router();

const Artist = require('../../models/Artist');

// @Route   GET /api/
// @Desc    Get all artists
// @Access  PUBLIC
router.get('/', (req, res) => {
    res.status(200).send('hello');
});

// @Route   POST /api/addArtist
// @Desc    Add a new artist with ID and Name
// @Access  PUBLIC
router.post('/addArtist', (req, res) => {
    const { id, name } = req.body;
    
    if(!id && !name) return res.status(400).json({ msg: "Missing id or name of artist" });

    const newArtist = new Artist({
        "_id": id,
        "name": name
    });

    newArtist.save()
    .then(user => res.json(user))
    .catch(error => console.error(error));
});

module.exports = router;