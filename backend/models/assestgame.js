import mongoose, { Mongoose } from 'mongoose'

const assestgame = new mongoose.Schema({
    "game_id": {
        "type": mongoose.Schema.Types.ObjectId,
        "ref": 'newGame'
    },
    "assest": {
        type: Array,
        "items": {
            "type": mongoose.Schema.Types.ObjectId,
            "ref": 'assest'
        }
    }
})

assestgame.pre("save", async function (next) {
    next()
});

const Assestgame = mongoose.models.assestgame || mongoose.model('assestgame', assestgame)

export default Assestgame