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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

app.post("/generate", (req, res) => {
	axios
		.post(
			"https://api.imgflip.com/caption_image",
			{},
			{
				params: {
					template_id: req.body.template_id,
					username: "alvarsson",
					password: "tontalbin",
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

app.get("/", (req, res) => {
	axios
		.get("https://api.imgflip.com/get_memes")
		.then((memes) => {
            console.log(memes.data.data.memes)
			return res.render("index", {
				memes: _.sampleSize(memes.data.data.memes, 1)
			});
		})
		.catch((e) => {
			return res.status(500).send("500 Internal Server Error");
		});
});
// NOT USE API duh
butterJudges = ["https://imgflip.com/i/5t6uyj","https://imgflip.com/i/5t6v1v","https://imgflip.com/i/5t6vi0", "https://imgflip.com/i/5t6vm8", "https://imgflip.com/i/5t6vs2" ]
app.get("/butter", (req,res) => {
    axios.get("").then((memes) => {
        return res.render("index", {
            memes: [{
                id: '71428573',
                name: 'Butter',
                url: butterJudges[getRandomInt(5)],
                width: 698,
                height: 900,
                box_count: 2
            }]
        });
    })
    .catch((e) => {
        return res.status(500).send("500 Internal Server Error");
    });
})
/* app.get("/meme", (req, res) => {
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
}); */


// Listeing to server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});