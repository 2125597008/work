var express = require("express");
var router = express.Router();
//引入控制器文件
var carController = require("../Controller/TableController");

//相对于的路径访问相对于控制器的方法
router.get("/", carController.getCarList);

module.exports = router;
