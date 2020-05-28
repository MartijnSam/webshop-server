const Customer = require("../models").Customer;
const { toData } = require("./jwt");

// async function auth(req, res, next) {
//   // 1. check for authorization header and "split" it.
//   // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
//   //    If not, we return a 401 status and the message: 'Please supply some valid credentials
//   //    Remember to try/catch the call to "toData()".
//   // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
//   // 4. If not found, call next();
//   // 5. If user is found, set it to `req.user = user` and call next();

//   const auth =
//     req.headers.authorization && req.headers.authorization.split(" ");
//   if (auth && auth[0] === "Bearer " && auth[1]) {
//     try {
//       const data = toData(auth[1]);
//       const customer = await Customer.findByPk(data.customerId);
//       if (!customer) {
//         res.status(404).send("No customer found");
//       } else req.customer = customer;
//       next();
//     } catch (e) {
//       res.status(400).send("Invalid JWT token");
//     }
//   } else {
//     res.status(401).send({
//       message: "Please supply some valid credentials",
//     });
//   }
// }

async function auth(req, res, next) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      const customer = await Customer.findByPk(data.customerId);
      if (!customer) {
        res.status(404).send("No customer found");
      } else {
        req.customer = customer;
        next();
      }
    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      });
    }
  } else {
    console.log(req.headers);
    res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }
}

module.exports = auth;
