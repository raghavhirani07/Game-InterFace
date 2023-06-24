import mongoose, { Schema } from 'mongoose'
import validator from 'validator';

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        default: 2000,
    },
    name: {
        type: String,
        required: [ true, 'Please enter your name' ]
    },
    email: {
        type: String,
        required: [ true, 'Please enter an email' ],
        unique: [ true, 'Email already exist' ],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    role: {
        type: Number,
        enum: [0 , 1 ],
        // role of user and admin
        required : true
    },
    password : {
        type : String,
        required : [true , "Please enter an password"],
    },
    "have_game": {
        "type": Array,
        "items": {
          "type": Object,
          "properties": {
            "game_id": {
              "type": Schema.Types.ObjectId,
              "ref":"newGame"
            },
            "in_game_user_id": {
              "type": String
            }
          },
        }
      }

},
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    var docs = this;
    const data = await User.find()
    docs.userId = docs.userId+data.length;
    next()
  });


const User = mongoose.models.newUser || mongoose.model('newUser' , userSchema)

export default User