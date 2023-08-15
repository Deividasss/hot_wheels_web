//import express
import express from "express";

//import functions from controller
import {
    getAllCars,
    getAllSerialNumbers,
    registerUser,
    returnLoginUser,
    AuthentificateUser,
} from "../controllers/usersController.js";

//init express router
const router = express.Router();

//get all users
router.get("/cars", getAllCars);
//register new user
router.post("/newUser", registerUser);

router.post("/login", returnLoginUser);

router.post("/authenticate", AuthentificateUser);

router.post("/serialNumbers", getAllSerialNumbers);


//export default router
export default router;