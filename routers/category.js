const { Router } = require("express");
const router = new Router();
const Category = require("../models").Category;
const Product = require("../models").Product;
const Product_Category = require("../models").Product_Category;

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500);
    const offset = req.query.offset || 0;

    Category.findAndCountAll({ limit, offset }).then((result) =>
      res.send({ categories: result.rows, total: result.count })
    );
  } catch (e) {
    next(e);
  }
});

router.get("/:categoryId", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const category = await Category.findByPk(categoryId);
    if (!category) {
      res.status(404).send("The category was not found");
    } else res.json(category);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).send("missing parameters");
    } else {
      const newCategory = await Category.create({
        name,
        description,
      });
      res.json(newCategory);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:categoryId/products", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const category = await Category.findByPk(categoryId, {
      include: [Product],
    });
    if (!category) {
      res.status(404).send("The category was not found");
    } else res.json(category);
  } catch (e) {
    next(e);
  }
});

router.post("/:categoryId/products", async (req, res, next) => {
  try {
    const { productId } = req.body;
    const categoryId = parseInt(req.params.categoryId);
    const category = await Category.findByPk(categoryId);
    const product = await Product.findByPk(productId);
    if (!category) {
      res.status(404).send("The category was not found");
    }
    if (!product) {
      res.status(404).send("The productId was not correct");
    } else {
      const addedProductToCategory = await Product_Category.create({
        categoryId: categoryId,
        productId: productId,
      });
      res.json(addedProductToCategory);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
