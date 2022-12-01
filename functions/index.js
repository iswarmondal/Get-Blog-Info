const functions = require("firebase-functions");
const express = require('express');
const app = express();
const cors = require('cors');
const parseTheUrl = require("./middlewares/parseTheUrl")

app.use(cors())

app.get("/", (req,res)=>{
    res.json({"msg":"nice job"})
})

app.post("/this-one", parseTheUrl, (req, res)=>{
    console.log(req.html);
    res.json({"html" : "nothing"})
})

exports.api = functions.https.onRequest(app)
