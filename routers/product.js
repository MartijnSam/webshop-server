const { Router } = require("express");
const router = new Router();
const Product = require("../models").Product;

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500);
    const offset = req.query.offset || 0;

    Product.findAndCountAll({ limit, offset }).then((result) =>
      res.send({ products: result.rows, total: result.count })
    );
  } catch (e) {
    next(e);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const productId = parseInt(req.params.productId);
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).send("The product was not found");
    } else res.json(product);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, price, inStock, description, img } = req.body;
    if (!name || !price || !description || !img) {
      res.status(400).send("missing parameters");
    } else {
      const newProduct = await Product.create({
        name,
        price,
        inStock,
        description,
        img,
      });
      res.json(newProduct);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
