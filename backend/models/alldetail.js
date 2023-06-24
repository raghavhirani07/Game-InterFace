import mongoose, { Mongoose, Schema } from 'mongoose'

const alldetail = new mongoose.Schema({
    "game_id": {
        "type": Schema.Types.ObjectId,
        "ref":'newGame'
    },
    "user_assest": {
        "type": Array,
        "items": {
            "type": Object,
            "properties": {
                "user_id": {
                    "type": Schema.Types.ObjectId,
                    "ref":"newUser"
                },
                "assest_id": {
                    "type": "array",
                    "items": {
                        "type": Schema.Types.ObjectId,
                        "ref":"assest"
                    }
                }
            },
        }
    }
})

alldetail.pre("save", async function (next) {
    next()
});

const Alldetail = mongoose.models.alldetail || mongoose.model('alldetail', alldetail)

export default Alldetail