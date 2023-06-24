import mongoose, { Schema } from 'mongoose'

const usergame = new mongoose.Schema({
    "game_id": {
        type: Schema.Types.ObjectId,
        "ref": "newGame",
    },
    "game_user": {
        type: Array,
        "items": {
            "type": Object,
            "properties": {
                "email": {
                    "type": String
                },
                "in_game_user_id": {
                    "type": String
                }
            },
        }

    }
})

const Usergame = mongoose.models.usergame || mongoose.model('usergame', usergame)

export default Usergame