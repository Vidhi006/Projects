const express = require("express");
const app = express();
const PORT = 5000;
const mongodb = require("./db");
mongodb();
app.get("/", (req, res) => {
        res.send("Hello World")
	});

app.listen(PORT, () => console.log("Server running on port " + PORT));