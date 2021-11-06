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

// Routes
app.get('/', (req, res) => {
  return res.render("index");
});

app.get("/", (req, res) => {
	axios
		.get("https://meme-api.herokuapp.com/gimme")
		.then((memes) => {
			return res.render("index", {
				memes: _.sampleSize(memes.data.data.memes, 10)
			});
		})
		.catch((e) => {
			return res.status(500).send("500 Internal Server Error");
		});
});

app.post("/generate", (req, res) => {
	axios
		.post(
			"https://api.imgflip.com/caption_image",
			{},
			{
				params: {
					template_id: req.body.template_id,
					username: req.body.username,
					password: req.body.password,
					text0: req.body.text0,
					text1: req.body.text1,
				},
			}
		)
		.then((response) => {
			return res.send(`<img src=${response.data.data.url}>`);
		}).catch((e) => {
            return res.status(403).send("403 Client Error")
        });
});

// Listeing to server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});