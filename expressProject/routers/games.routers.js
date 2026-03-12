const express = require("express")
const gamesRouters = express.Router()
const {getAllGames,getGameById,postGame,putGame,deleteGame,invalidMethod} = require("../controllers/games.controllers")


gamesRouters.route("/")
    .get(getAllGames)
    .post(postGame)
    .all(invalidMethod)
gamesRouters.route("/:id")
    .get(getGameById)
    .put(putGame)
    .delete(deleteGame)
    .all(invalidMethod)




module.exports=gamesRouters