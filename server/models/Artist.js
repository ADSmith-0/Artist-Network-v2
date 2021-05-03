const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String, unique: true, required: true },
    related: [{ type: String }]
});

module.exports = mongoose.model('Artist', ArtistSchema);