import mongoose from 'mongoose'

const sale = new mongoose.Schema({
    "game_id": {
        "type": mongoose.Schema.Types.ObjectId,
        "ref": 'newGame'
    },
    "assest_id": {
        "type": mongoose.Schema.Types.ObjectId,
        "ref": 'assest'
    },
    "user_id":{
        "type": mongoose.Schema.Types.ObjectId,
        "ref": 'newUser'
    },
    "price":{
        "type":Number
    }
})

sale.pre("save", async function (next) {
    next()
});

const Sale = mongoose.models.sale || mongoose.model('sale', sale)

export default Sale