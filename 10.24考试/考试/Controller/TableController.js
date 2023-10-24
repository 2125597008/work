//CarController.js
const express = require("express");

//创建服务器
const app = express.Router();

const {
  getCar,
  insertCar,
  updateCar,
  deleteCar,
} = require("../dataBase/table");

app.get("/getCar", (req, res, next) => {
  getCar().then((response) => {
    res.send(response);
  });
});

app.post("/insertCar", (req, res, next) => {
  let param = req.body;
  let { username, phone, password } = param;
  insertCar([username, phone, password]).then((response) => {
    res.send(response);
  });
});

app.post("/updateCar", (req, res, next) => {
  let param = req.body;
  let { username, phone } = param;
  updateCar([username, phone]).then((response) => {
    res.send(response);
  });
});

app.get("/deleteCar", (req, res, next) => {
  let id = req.query.id;
  deleteCar([id]).then((response) => {
    res.send(response);
  });
});

module.exports = app;
