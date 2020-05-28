const cors = require("cors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

const customerRouter = require("./routers/customer");
const productRouter = require("./routers/product");
const authRouter = require("./routers/auth");
const categoryRouter = require("./routers/category");

// const authMiddleware = require("./auth/middleware");

//middleware app-level

app.use(express.json());

//routers
app.use("/customers", customerRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/login", authRouter);

function onListen() {
  console.log(`Listening on :${PORT}`);
}
app.listen(PORT, onListen);
