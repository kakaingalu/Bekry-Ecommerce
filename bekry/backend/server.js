const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // enable CORS

app.use('/login', (req, res) => {   // login route
    res.send({
        token: 'test123' // sample token
    });
});

app.listen(3001, () => console.log('API is running on http://localhost:3001/login')); // run server on port 3001
