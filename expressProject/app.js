const express = require(express)
const ReadFile = require("./utils/readfile.js");
const DB = "./data/games.json"
const app = express();


app.use(async(req,res,next) =>{
    const data = await ReadFile(DB)

    req.data = data
    next()
})