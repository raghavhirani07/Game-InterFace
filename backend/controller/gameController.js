import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'
import User from '../models/userSchema.js'
import Game from '../models/game.js'
import Alldetail from "../models/alldetail.js"
import Assest from "../models/assestSchema.js"
import Sale from '../models/saleSchema.js'
import { ObjectId } from 'mongodb';



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

    if (allassest.length === 0) {
        return res.status(201).json({ "message": "User Has no Assest" })
    }

    return res.send(allassest)
}

export const showstore = async (req, res) => {

    const alldetail = await Sale.find({}).populate([ { path: 'assest_id', model: Assest }, { path: 'user_id', model: User }, { path: 'game_id', model: Game } ]).exec();
    return res.send(alldetail)
}

export const saleproduct = async (req, res) => {
    const { email, game_id, assest_id } = req.body

    if (!email || !game_id || !assest_id) {
        return res.status(501).json({ "message": "All Filed Require" })
    }

    const user = await User.find({ email: email })
    if (!user) {
        return res.status(502).json({ "message": "Wrong Filled" })
    }
    const user_id = user[ 0 ][ "_id" ];
    // console.log(user_id);

    const game = await Game.aggregate([ { '$match': { '_id': new ObjectId(game_id) } } ])
    if (game.length == 0) {
        return res.status(502).json({ "message": "Wrong game Filled" })

    }

    const assest = await Assest.aggregate([ { '$match': { '_id': new ObjectId(assest_id) } } ])

    if (assest.length == 0) {
        return res.status(502).json({ "message": "Wrong assest Filled" })
    }

    const alldetail = await Alldetail.aggregate([ { '$match': { 'game_id': new ObjectId(game_id), 'user_assest.user_id': user_id, 'user_assest.assest_id': new ObjectId(assest_id) } }, ])

    if (alldetail.length == 0) {
        return res.status(502).json({ "message": "Not has Assest For Sale Filled" })
    }

    const has_in_sale = await Sale.find({
        game_id: new ObjectId(game_id),
        user_id: user_id,
        assest_id: new ObjectId(assest_id),
    })

    // console.log(has_in_sale);
    if (has_in_sale.length !== 0) {
        return res.status(506).json({ "message": "this product you all ready add to store " })
    }

    const result = await Sale.create({
        game_id: new ObjectId(game_id),
        user_id: user_id,
        assest_id: new ObjectId(assest_id),
        price: 4000
    })

    // console.log(alldetail);
    if (!result) {
        return res.status(502).json({ "message": "Some database resonse Data not store" })
    }

    // console.log(result);
    return res.status(200).json({ "message": "Your assest open to buy " })
}
export const buyproduct = async (req, res) => {
    const { email, sale_id } = req.body;

    //* Empty Filed
    if (!email || !sale_id) {
        return res.status(501).json({ "message": "All Filed Required" })
    }

    //* Buyer All Details Collected
    const buyer_user = await User.find({ email: email }).exec()

    const buyer_user_id = buyer_user[ 0 ][ "_id" ]
    console.log(buyer_user_id);
    if (buyer_user.length == 0) {
        return res.status(501).json({ "message": "User Not have" })
    }

    //* Product sale All Detail gate
    const sale_has_id = await Sale.find({ _id: new ObjectId(sale_id) })
    if (sale_has_id.length == 0) {
        return res.status(501).json({ "message": "Assest has not sale in store" })
    }
    // console.log(sale_has_id);
    const game_id = sale_has_id[ 0 ][ "game_id" ];
    const assest_id = sale_has_id[ 0 ][ "assest_id" ]
    const saler_id = sale_has_id[ 0 ][ 'user_id' ]
    console.log(assest_id);


    //* Find the Buyer has that game or not
    const has_game = await User.aggregate([ { '$match': { 'have_game.game_id': game_id, '_id': buyer_user_id } } ])

    // console.log("hello");

    if (has_game.length == 0) {
        return res.status(501).json({ "message": "Buyer  has not this game" })
    }

    const user_has_register = await Alldetail.aggregate([ { '$match': { 'user_assest.user_id': buyer_user_id } } ])

    // console.log(user_has_register);

    const alldetail = await Alldetail.find({ game_id: game_id })
    if (alldetail.length == 0) {
        return res.status(501).json({ "message": "Game detail not set yet " })
    }
    const alldetail_id = alldetail[ 0 ][ "_id" ]
    var result = false;
    // console.log(alldetail);
    if (user_has_register.length == 0) {
        //* User not Register
        const new_Object = {
            "user_id": buyer_user_id,
            "assest_id": [ assest_id ]
        }
        result = await Alldetail.find({ game_id: game_id }).updateMany({
            $push: {
                "user_assest": new_Object
            }
        }).exec()
        // console.log(result.acknowledged);
    }
    else {

        result = await Alldetail.updateOne({ game_id: game_id, "user_assest.user_id": buyer_user_id }, { $push: { "user_assest.$.assest_id": assest_id } })
        // console.log(result.acknowledged);
    }
    // console.log(result.acknowledged);
    if (result.acknowledged) {
        //* delete the Entry From the User That has assest
        //* Also Delete Sale Part From The Database
        const delete_item_from_seller = await Alldetail.updateOne({ game_id: game_id, "user_assest.user_id": saler_id }, { $pull: { "user_assest.$.assest_id": assest_id } }).exec()

        const delete_sale_detail = await Sale.deleteOne({ '_id': new ObjectId(sale_id) }).exec()

    }

    return res.send("Purchase buy successfully ")
}