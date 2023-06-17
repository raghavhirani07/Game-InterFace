// importing router from express
import { Router } from "express";
import { createNewUser } from "../controller/userController.js";

// importing controller functions


// create router application for taking and providing req and res
const userRouter = Router();

// router queries
userRouter.post("/signup" , createNewUser)
// router.patch("/update/:id" , updateUser)
// router.patch("/resetpasswd" , resetPassword)
// router.delete("/delete/:email" , deleteUser)

// exporting router application
export default userRouter;