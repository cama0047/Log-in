const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

//answer the rout /login
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.use('/login',)

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));