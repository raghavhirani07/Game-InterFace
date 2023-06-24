import mongoose from 'mongoose'
import validator from 'validator';

const gameSchema = new mongoose.Schema({
    "game_id": {
        type: Number,
        default: 5000,
    },
    "game_name": {
        type: String,
    },
    "game_description": {
        type: String
    },
    "game_category": {
        type: String
    },
    "game_photo":{
        type:String
    },
},
    { timestamps: true }
)

gameSchema.pre("save", async function (next) {
    var docs = this;
    const game = await Game.find()
    docs.game_id = docs.game_id + data.length;
    next()
});


const Game = mongoose.models.newGame || mongoose.model('newGame', gameSchema)

export default Game