
const cors=require('cors');
const express = require('express');
const app = express();
const path = require('path')

app.use(express.static("public"));

app.use(express.static("node_modules/bootstrap/dist/css"));
app.use(express.static("node_modules/bootstrap/dist/js"));

app.get('/', (req, res) => {
	
  res.sendFile('views/index.html', {root: __dirname })
  
});

app.get('/AnimeQuotes', function(req,res) {
	
	res.sendFile('views/AnimeQuotes.html', {root: __dirname })
    
});

app.get('/BattleField', function(req,res) {
	
	res.sendFile('views/BattleField.html', {root: __dirname })
    
});

app.get('/Facts', function(req,res) {
	
	res.sendFile('views/Facts.html', {root: __dirname })
    
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});