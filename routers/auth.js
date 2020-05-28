const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const Customer = require("../models").Customer;
const bcrypt = require("bcrypt");
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/", async (req, res, next) => {
  // Here goes the login logic.
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .send({ message: "Please supply a valid email and password" });
  } else {
    const customer = await Customer.findOne({
      where: {
        email,
      },
    });
    if (!customer) {
      res
        .status(404)
        .send({ message: "No customer with that e-mail was found" });
    } else if (bcrypt.compareSync(password, customer.password)) {
      res.send({ jwt: toJWT({ customerId: customer.id }) });
    } else {
      res.status(400).send({ message: "Password was incorrect" });
    }
  }
});

router.get("/test-auth", authMiddleware, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.customer.email}.`,
  });
});

module.exports = router;
