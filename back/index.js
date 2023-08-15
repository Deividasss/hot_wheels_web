//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js";

//init express
const app = express();
import 'dotenv/config'
//get the require module instead of import
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
globalThis.bcrypt = require('bcrypt');

globalThis.jwt = require('jsonwebtoken');

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

//PORT
app.listen(3000, () => {
  console.log("Server running successfully");
});