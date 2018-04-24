const express = require('express');
const fs = require('fs');
const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
  
app.get('/3/discover/movie', (req, res) => {
	res.header('Content-Type', 'application/json');
	let allMoviesJSON = `${__dirname}/mock/allMovies.json`;
	fs.readFile(allMoviesJSON, (error, data)=>{
		if(!error) {
			res.json(JSON.parse(data));
		}else{
			res.status(500).send();
		}
	});
});

app.listen(3000);