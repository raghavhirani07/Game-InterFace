import mongoose from 'mongoose'

const assestschema = new mongoose.Schema({
    "assest": {
        type: Object,
        "items": {
            "type": Object,
            "properties": {
                "assest_id": {
                    "type": Number
                },
                "assest_type": {
                    "type": String
                },
                "assest_name": {
                    "type": String
                },
                "assest_image": {
                    "type": String
                },
                "assest_saleble_or_not": {
                    "type": Boolean
                }
            },
        }
    }
})

const Assest = mongoose.models.assest || mongoose.model('assest', assestschema)

export default Assest