const { Router } = require("express");
const router = new Router();
const Customer = require("../models").Customer;
const Address = require("../models").Address;
const Order = require("../models").Order;
const Order_Product = require("../models").Order_Product;
const bcrypt = require("bcrypt");

router.get("/", async (req, res, next) => {
  try {
    const customers = await Customer.findAll();
    if (!customers) {
      res.status(404).send("No customers were found");
    } else res.json(customers);
  } catch (e) {
    next(e);
  }
});

router.get("/:customerId", async (req, res, next) => {
  try {
    const customerId = parseInt(req.params.customerId);
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      res.status(404).send("The customer was not found");
    } else res.json(customer);
  } catch (e) {
    next(e);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      profileImg,
    } = req.body;
    if (!email || !password || !firstName || !lastName || !phone) {
      res.status(400).send("missing parameters");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newCustomer = await Customer.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        profileImg,
      });
      res.json(newCustomer);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:customerId/addresses", async (req, res, next) => {
  try {
    const customerId = parseInt(req.params.customerId);
    const customer = await Customer.findByPk(customerId);
    const addresses = await Address.findAll({
      where: { CustomerId: customerId },
    });
    if (!customer) {
      res.status(404).send("The customer was not found");
    }
    if (!addresses) {
      res.status(404).send("No addresses for this user were found");
    } else res.json({ customer: customer, addresses: addresses });
  } catch (e) {
    next(e);
  }
});

router.post("/:customerId/addresses", async (req, res, next) => {
  try {
    const customerId = parseInt(req.params.customerId);
    const customer = await Customer.findByPk(customerId);
    const { street, number, postcode, city, country } = req.body;
    if (!customer) {
      res.status(404).send("The customer was not found");
    }
    if (!street || !number || !postcode || !city || !country) {
      res.status(400).send("missing parameters");
    } else {
      const newAddress = await Address.create({
        street,
        number,
        postcode,
        city,
        country,
        CustomerId: customerId,
      });
      res.json({ customer: customer, newAddress: newAddress });
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:customerId/orders", async (req, res, next) => {
  try {
    const customerId = parseInt(req.params.customerId);
    const customer = await Customer.findByPk(customerId);
    const orders = await Order.findAll({
      where: { CustomerId: customerId },
    });
    if (!customer) {
      res.status(404).send("The customer was not found");
    }
    if (!orders) {
      res.status(404).send("No orders for this user were found");
    } else res.json({ customer: customer, orders: orders });
  } catch (e) {
    next(e);
  }
});

//example orderProducts:
//   [{productId:1, quantity:1}, {productId:2, quantity:2}]

router.post("/:customerId/orders", async (req, res, next) => {
  try {
    const customerId = parseInt(req.params.customerId);
    const customer = await Customer.findByPk(customerId);
    const { totalPrice, orderProducts } = req.body;
    if (!customer) {
      res.status(404).send("The customer was not found");
    }
    if (!totalPrice || !orderProducts) {
      res.status(400).send("missing parameters");
    } else {
      const newOrder = await Order.create({
        totalPrice,
        CustomerId: customerId,
      });
      const allProductsInOrder = await orderProducts.map((product) => {
        Order_Product.create({
          orderId: newOrder.id,
          productId: product.productId,
          quantity: product.quantity,
        });
      });
      res.json({ customer: customer, newOrder: newOrder });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
