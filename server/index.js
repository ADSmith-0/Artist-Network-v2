const express = require('express');
const app = express();

require('dotenv').config();

console.log(process.env.MONGO_URI);

// For parsing application/json 
app.use(express.json());

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// CORS access 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    next();
});

// Enable CORS requests
app.options('*/*', (req, res) => {
    res.status(200).end();
});

app.use('/api/artists', require('./routes/api/artists.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Server listening on port ${PORT}`);