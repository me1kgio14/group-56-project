const WriteFile = require("../utils/writeFile");
const crypto = require("crypto")
const allowedPlatforms = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"];
const path = require("path");


const DB = path.join(__dirname, "../data/games.json");


const getAllGames = async (req, res) => {
    res.json(req.data);
}

const getGameById = async (req, res) => {
    const id = req.params.id
    const data = req.data
    const game =data.find((game) => game.id === id);
    if (!game) {
        return res.status(404).json({ message: "Game not found" });
    }
    res.json(game);
}

const postGame = async (req,res) => {
    const requestedData = req.body
    const data= req.data
    const keys = Object.keys(requestedData)
    const platforms = requestedData.platform


    if (keys.length !== 4 ) {
        return res.status(400).json("invalid quantity of keys you should have: name,price and platform")
    }

    if (JSON.stringify(keys.sort()) !== JSON.stringify(["name","platform","price","company"].sort())){
        return res.status(400).json("you have invalid keys names")
    }
    if (!platforms.every(game=> allowedPlatforms.includes(game))){
        return res.status(400).json("incorrect platform")
    }

    if (data.filter(game => game.name === requestedData.name).length > 0){
        return res.status(400).json("this game already exists")
    }

    requestedData.id = crypto.randomUUID()
    data.push(requestedData)

    await WriteFile(DB,data)
    res.status(200).json(data)
}

const putGame = async (req,res) =>{
    const id = req.params.id
    const updated = req.body
    const data = req.data

    const Game = data.find(game => game.id === id)

    if (!Game){
        return res.status(404).json("item does not exist")
    }

    const platformCheck =
        updated.platform === undefined ||
        (updated.platform.length === Game.platform.length &&
         updated.platform.every(p => Game.platform.includes(p)))

    if (
        (updated.name === undefined || updated.name === Game.name) &&
        (updated.price === undefined || updated.price === Game.price) &&
        (updated.company === undefined || updated.company === Game.company) &&
        platformCheck
    ){
        return res.status(400).json("nothing to update")
    }

    if (updated.name !== undefined){
        Game.name = updated.name
    }
    if (updated.price !== undefined){
        Game.price = updated.price
    }
    if (updated.platform !== undefined){
        Game.platform = updated.platform
    }
    if (updated.company !== undefined){
        Game.company = updated.company
    }

    await WriteFile(DB,data)

    res.status(200).json(Game)
}

const deleteGame = async (req,res) =>{
    let data = req.data
    const id = req.params.id
    const mustDeletedProduct=data.filter(game => game.id === id)

    if(mustDeletedProduct.length === 0){
        return res.status(400).json("invalid id")
    }

    data=data.filter(game => game.id !== id)
    await WriteFile(DB,data)
    res.status(204).json();
}

const invalidMethod = (req, res) => {
    res.status(405).json({ message: "Method Not Allowed" });
}


module.exports={getAllGames,getGameById,postGame,putGame,deleteGame,invalidMethod}