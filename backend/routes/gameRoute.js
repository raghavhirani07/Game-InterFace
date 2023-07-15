// importing router from express
import { Router } from "express";
import {getusergame,getuserassest,showstore,saleproduct,buyproduct} from "../controller/gameController.js";

// importing controller functions


// create router application for taking and providing req and res
const gameRouter = Router();

// router queries
gameRouter.post("/usergame" , getusergame)
gameRouter.post("/getuserassest",getuserassest)
gameRouter.post("/showstore",showstore)
gameRouter.post("/saleproduct",saleproduct)
gameRouter.post("/buyproduct",buyproduct)
// gameRouter.post("/getgamedetail" , fetchgamedetail)

export default gameRouter;getuserassest