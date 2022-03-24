const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const moment = require("moment");

router.get("/", (req, res) => {
  Product.find()
    .select("-__v")
    .exec()
    .then((response) => {
      res.render("index", { products: response });
    })

    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
