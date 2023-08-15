import db from "../config/database.js";

//get all users
export const getCars = (result) => {
  db.query("SELECT * FROM cars", (err, results) => {
    if (err) {
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const registerNewUser = (username,password, result) => {
  db.query("INSERT INTO users SET username=?, password=?, created_at=?", [username,password,new Date()], (err, results) => {
    if (err) {
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getLoginUser = (username, result) => {
  db.query("SELECT * FROM users where username=?", [username], (err, results) => {
    if (err) {
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getAllSerialNumber = (serialNumber, result) => {
  db.query("SELECT * FROM serialNumbers where serialnumber=?", [serialNumber], (err, results) => {
    if (err) {
      result(err, null);
    } else {
      result(null, results);
    }
  });
};



