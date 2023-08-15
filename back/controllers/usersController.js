import {
    getCars,
    registerNewUser,
    getLoginUser,
    getAllSerialNumber
  } from "../models/usersModel.js";

  
  //get all products
  export const getAllCars = (req, res) => {
    getCars((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  export const registerUser = (req, res) => {
   let data = req.body
   let a = Number(process.env.SALT_ROUNDS)
   console.log(a);
      bcrypt.hash(data.password,a, function(err, hash) {
        if(hash){
        registerNewUser(data.username,hash,(err, results) => {
          if (err) {
            res.send(err);
          } else {
            res.json('User created successfully');
          }
        });
      } else {
        res.send('Error creating account');
      }
  });

  };

  export const returnLoginUser = (req, res) => {
    const loginData = req.body;
    getLoginUser(loginData.username, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        if(results.length > 0){
          bcrypt.compare(loginData.password, results[0].password, function(err, result) {
            console.log(result);
            if(result == true){
              let rez = {
              "username": results[0].username,
              "role":results[0].role,
               "id": results[0].user_id,
               "blocked": results[0].blocked
            }
    
            let jwtToken = jwt.sign(rez, process.env.TOKEN_SECRET, { expiresIn: '1h' })
            res.json({token: jwtToken, blocked:  results[0].blocked });
            }
            else{
              res.status(500)
              res.json("User does not exist");
            }
  
        });
       
      }
      else{
        res.status(500)
        res.json("User does not exist");
      }
      }
    });
  };

   //check if user's jwt token is still valid
   export const AuthentificateUser = (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null){
     return res.sendStatus(401)
    }
    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
      if (err) {
        res.sendStatus(401)
      }
      else{
        res.json(decoded);
      }
    })

    };

    export const getAllSerialNumbers = (req, res) => {
      const serialNumber = req.body
      getAllSerialNumber(serialNumber.input,(err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    };