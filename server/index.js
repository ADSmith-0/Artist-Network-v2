const express = require('express');
const app = express();

const PORT = process.env.PORT | 5000;
app.listen(PORT, `Server listening on port ${PORT}`);