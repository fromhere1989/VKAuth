const express = require('express');
const app = express();
const router = require('./routes/router');

app.use('/', router);
app.use(express.static('view'));

app.listen(8080, () => {
  console.log('On port 8080')
})
