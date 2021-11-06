// IMPORTS
const express = require('express');
const axios = require('axios').default;
const _ = require('lodash');

// CONSTANTS
const app = express();

// MIDDLEWARES
app.use(express.json()); // This will parse json payload.
app.use(express.urlencoded({extended: true})); // This will parse urlencoded payload.
app.use(express.static('public')); // This will serve public directory on our server.
app.set('view engine', 'ejs'); // So express uses ejs as its templating engine.

app.get("/meme", (req, res) => {
	axios
		.get("https://meme-api.herokuapp.com/gimme")
		.then((memes) => {
            console.log(memes.data.url)
            url = memes.data.url
			return res.render("index", {
                // ALBATRON TODO
			});
		})
		.catch((e) => {
			return res.status(500).send("500 Internal Server Error");
		});
});


// Listeing to server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});