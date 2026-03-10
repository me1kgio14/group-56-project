const writeFile = require("../utils/writeFile");
const DB= "../data/games.json";
const allowedPlatforms = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"];

const getAllGames = async (req, res) => {
    res.json(req.data);
}

const getGameById = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.data
    const game = JSON.parse(data).find((game) => game.id === id);
    if (game.length === 0) {
        return res.status(404).json({ message: "Game not found" });
    }
    res.json(game);
}

const addGame = async (req,res) => {
    const requestedData = req.body
    const data= req.data
    const keys = Object.keys(requestedData)
    const platforms = JSON.stringify(requestedData.platform)


    if (keys.length !== 3 ) {
        res.status(400).json("invalid quantity of keys you should have: name,price and platform")
    }

    if (JSON.stringify(keys.sort) !== JSON.stringify["name","price","platform"].sort){
        res.status(400).json("you have invalid kays names")
    }
    if (!platforms.map(game=> allowedPlatforms.includes(game))){
        res.status(400).json("incorrect platform")
    }

    if (data.filter(game => game.name === requestedData.name) > 0){
        res.status(400).json("this game already exists")
    }

    requestedData.id = data.length
    data.push(requestedData)

    const info = await writeFile(DB,data)
    res.status(200).json(info)
}

const putGame = async (req,res) =>{
    const id = parseInt(req.params)
    const updated = req.body
    const data = req.data
    const platforms = JSON.stringify(updated.platform)

    const Game= data.find(game=> game.id !== id)
    
    if (Game.length === 0){
        res.status(400).json("item with this item does not exists")
    }
    if (updated.name === Game[0].name && updated.price === Game[0].name && platforms.sort() === Game[0].name ){
        res.status(400).json("nothing to update")
    }

    if (updated.name){
        Game[0].name===updated.name
    }
    if (updated.price){
        Game[0].price === updated.price
    }
    if (updated.platform){
        Game[0].platform === updated.platform
    }

    const info = await writeFile(DB,data)
    res.status(200).json(Game)
}

const deleteGame = async (req,res) =>{
    const data = req.data
    const id = parseInt(req.params)
    const mustDeletedProduct=data.filter(game => game.id !== id)

    if(mustDeletedProduct === 0){
        
    }
}