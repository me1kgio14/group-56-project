const express = require("express")
const gamesRouters = express.Router()
const {getAllGames,getGameById,postGame,putGame,deleteGame} = require("../controllers/games.controllers")


gamesRouters.route("/")
    .get(getAllGames)
    .post(postGame)

gamesRouters.route("/:id")
    .get(getGameById)
    .put(putGame)
    .delete(deleteGame)


module.exports=gamesRouters