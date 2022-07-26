const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AuthRoute = require("./routes/authRoutes");
const routes = require("./routes/routes");
const product = require("./routes/productRoute");
const category = require("./routes/Category");
const path = require("path");
const cartRoutes = require("./routes/CartRoute");
const order = require("./routes/orderRoute");
const address = require("./routes/addressRoutes");
const member = require("./routes/memberRoute");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", AuthRoute);
app.use("/", routes);
app.use("/", product);
app.use("/", category);
app.use("/", address);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/", cartRoutes);
app.use("/", order);
app.use("/", member);

const URI =
  "mongodb+srv://Guhan:guhan@cluster0.ar76cyf.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running in ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
