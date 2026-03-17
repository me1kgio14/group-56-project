const express = require("express")
const morgan = require("morgan")
const ReadFile = require("./utils/readfile.js");
const errorhandler = require("errorhandler")
const responseTime = require("response-time");

const gameRouter = require ("./routers/games.routers.js");
const DB = "./data/games.json"


const app = express();


app.use(morgan("dev"))

app.use(responseTime())

app.set("json spaces", 1);

app.use(express.json())

app.use(async(req,res,next) =>{
    const data = await ReadFile(DB)

    req.data = data
    next()
})

app.use("/games", gameRouter)
app.use(errorhandler())

app.listen(3000, () => {
    console.log("server is running on port 3000")
})