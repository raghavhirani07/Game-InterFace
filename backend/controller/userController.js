import User from "../models/userSchema.js";
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'


export const createNewUser = asyncHandler(async (req , res) => {

    // read data from req body
    const {name , email ,role , password , cpassword} = req.body

    // duplicate entry
    const duplicate = await User.findOne({email}).lean().exec();
    if (duplicate) {
        return res.status(409).json({status:false, message: 'Duplicate username' })
    }

    // password and confirm password match
    const pwdIsCpwd = password!==cpassword;
    if(pwdIsCpwd)
    {
        return res.status(410).json({status:false ,message : 'Confirm Password doesnt match with password'})
    }

    // hashing a password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password , salt)

    // creating userObject
    const userObject = {name , email , role , "password":hashedPassword}

    // Create and store new user
    const user = await new User(userObject).save()

    if (user) { //created
        return res.status(201).json({status:true , message: `New user ${email} created` })
    } else {
        return res.status(400).json({ status:false ,message: 'Invalid user data received' })
    }

})

export const updateUser = asyncHandler(async (req, res) => {
    const {useruid , name , email ,role } = req.body

    const user = await User.findOne({"userId":uid}).exec()
    if (!user) {
        return res.status(400).json({status:false , message: 'User not found' })
    }

    // Check for duplicate
    const duplicate = await User.findOne({"email": email}).lean().exec()
    if (duplicate) {
        return res.status(409).json({status:false , message: 'Duplicate email or mobileno' })
    }

    const updatedObject = {name , email}
    // console.log(updatedObject);
    const updatedUser = await User.updateOne({"userId":uid} , updatedObject);

    if(updateUser)
    {
        return res.json({status:true , message: `${email} updated` })
    }
    else
    {
        return res.json({status:false , message: `Not updated` })
    }
})

export const resetPassword = asyncHandler(async (req , res) => {
    // read data from req body
    const {email , oldpassword , newpassword} = req.body
    // console.log(req.body);

    // find user and match
    const foundUser = await User.findOne({'email': email }).exec()
    // console.log(foundUser);
    if (!foundUser) {
        return res.status(401).json({status:false, message: 'User not available' })
    }
    // console.log("here");
    const matchPasswd = await bcrypt.compare(oldpassword, foundUser.password)
    // console.log(matchPasswd);

    if (!matchPasswd) return res.status(401).json({status:false, message: 'Unauthorized' })


    // hashing a password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(newpassword , salt)
    // console.log(hashedPassword);

    const userObject = {"password":hashedPassword , "cpassword": hashedPassword}
    const resetPasswd = await User.updateOne({email} , userObject)
    // console.log(resetPasswd);

    res.json({status:true,message : "Password resetted"})
})


export const deleteUser = asyncHandler(async (req, res) => {
    const email  = req.params.email
    // console.log(req.body);
    // Confirm data
    if (!email) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    // Does the user exist to delete?
    const user = await User.findOne({email}).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await User.deleteOne({email})

    const reply = `Username ${result.email} deleted`

    res.json({message: reply})
})