import Game from "../Models/game.js";
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'



export const connectWithGame = asyncHandler(async (req, res) => {
    const {userId , gameId} = req.body

    const user = await Game.findOne({gameId: gameId , user : {$elemMatch : {$eq : userId}}}).exec()
    if (user) {
        return res.status(400).json({status:false , message: 'User already exist' })
    }

    const updatedGame = await Game.updateOne({"gameId":gameId} , {$push : {user : userId}});

    if(updatedGame)
    {
        return res.json({status:true , message: `Connection with game is successful` })
    }
    else
    {
        return res.json({status:false , message: `Can't connect with game` })
    }
})