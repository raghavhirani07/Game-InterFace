import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'
import User from '../models/userSchema.js'
import Game from '../models/game.js'
import Alldetail from "../models/alldetail.js"
import Assest from "../models/assestSchema.js"
import { ObjectId } from 'mongoose'



export const connectWithGame = asyncHandler(async (req, res) => {
    const { userId, gameId } = req.body

    const user = await Game.findOne({ gameId: gameId, user: { $elemMatch: { $eq: userId } } }).exec()
    if (user) {
        return res.status(400).json({ status: false, message: 'User already exist' })
    }

    const updatedGame = await Game.updateOne({ "gameId": gameId }, { $push: { user: userId } });

    if (updatedGame) {
        return res.json({ status: true, message: `Connection with game is successful` })
    }
    else {
        return res.json({ status: false, message: `Can't connect with game` })
    }
})
export const getusergame = async (req, res) => {
    const { email } = req.body;
    // console.log(email);
    if (!email) { return res.status(401).json({ "message": "All filed need" }); }
    const userhas = await User.findOne({ email: email });

    if (!userhas) {
        return res.status(401).json({ "message": "user not found " })
    }
    const usergame = await User.find({ email: email }, '-game_id').populate({ path: 'have_game.game_id', model: Game });


    // const usergame = await User.aggregate([
    //     {
    //         '$lookup': {
    //             'from': 'newgames',
    //             'localField': 'have_game.game_id',
    //             'foreignField': '_id',
    //             'as': 'game_full_detail'
    //         }
    //     }, {
    //         '$match': {
    //             'email': email
    //         }
    //     }
    // ])
    return res.send(usergame)
}
export const fetchgamedetail = async (req, res) => {
    const { game_id } = req.body;
    console.log(game_id);
    if (!game_id) return res.status(401).json({ "message": "All filed need" });
    const gamedetail = await Game.findOne({ game_id: game_id });

    if (!gamedetail) {
        return res.status(401).json({ "message": "user not found " })
    }
    return res.send(gamedetail)
}
export const getuserassest = async (req, res) => {
    const { email } = req.body

    if (!email) return res.status(401).json({ "message": "Enter All Filed" })

    const user = await User.findOne({ email: email }).exec();

    if (!user) return res.status(501).json({ "message": "User Not Found " })
    const user_id = user._id;
    console.log(user_id);

    const allassest = await Alldetail.aggregate(
        [
            {
                '$unwind': {
                    'path': '$user_assest',
                    'includeArrayIndex': 'index',
                    'preserveNullAndEmptyArrays': true
                }
            }, {
                '$match': {
                    'user_assest.user_id': user_id
                }
            }
        ])
    await Alldetail.populate(allassest, [ { path: 'user_assest.assest_id', model: Assest }, { path: 'user_assest.user_id', model: User }, { path: 'game_id', model: Game } ])

    if( allassest.length === 0 ){
      return  res.status(201).json({"message":"User Has no Assest"})
    }

    return res.send(allassest)
}
