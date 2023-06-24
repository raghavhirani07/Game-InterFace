// importing router from express
import { Router } from "express";
import {getusergame,fetchgamedetail,getuserassest} from "../controller/gameController.js";

// importing controller functions


// create router application for taking and providing req and res
const gameRouter = Router();

// router queries
gameRouter.post("/usergame" , getusergame)
gameRouter.post("/getuserassest",getuserassest)
// gameRouter.post("/getgamedetail" , fetchgamedetail)

export default gameRouter;