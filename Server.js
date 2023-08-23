const express = require('express');
const path = require('path');
const port=3000;

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/hw',function (req,res){
    res.send("Hello World");
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${port}`)
  })