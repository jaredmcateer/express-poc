const express = require('express');
const app = express();


app.all('/restricted/*', (req, res, next) => {
  res.status(403).send();
})

// Set the static file directory
app.use(express.static('./views'));
app.use(express.static('./out'));
app.use(express.static('./static'));

app.get('/', (req, res) => {
  res.render('index.html');
});
// Start the server
const port = process.env.PORT || 23000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
