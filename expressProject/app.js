const express = require(express)
const ReadFile = require("./utils/readfile.js");
const gameRouter = require ("./routers/games.routers.js");
const DB = "./data/games.json"

const app = express();


app.use(express.json())

app.use(async(req,res,next) =>{
    const data = await ReadFile(DB)

    req.data = data
    next()
})



app.use("/games", gameRouter)