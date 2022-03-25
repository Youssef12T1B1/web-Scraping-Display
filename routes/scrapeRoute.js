const express = require("express");
const router = express.Router();
const Product = require("../models/product");
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

router.get("/:category", (req, res) => {
  const category = req.params.category;
  Product.find({ Category: category })
    .select("-__v")
    .exec()
    .then((response) => {
      res.render("category", { products: response });
    })

    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
