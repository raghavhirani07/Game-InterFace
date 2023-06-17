import mongoose from 'mongoose'
import validator from 'validator';

const gameSchema = new mongoose.Schema({
    "gameId": {
        type: Number,
        default: 2000,
    },
    "game_name": {
        type: String,
    },
    "game_description":{
        type : String
    },
    "user": {
        type: Array,
    },
    "assets": [
        {
            "assetsId": {
                type: Number,
            },
            "assetsType": {
                type: String
            },
            "assetsName": {
                type: String
            },
            "assetsImage": {
                type: String
            },
            "assestSale": {
                type: Boolean,
                enum : [true , false ]
            }
        }
    ],
},
    { timestamps: true }
)

gameSchema.pre("save", async function (next) {
    var docs = this;
    const game = await Game.find()
    docs.gameId = docs.gameId+data.length;
    next()
  });


const Game = mongoose.models.newGame || mongoose.model('newGame', gameSchema)

export default Game