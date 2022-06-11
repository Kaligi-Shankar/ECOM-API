const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mongoose = require("mongoose");



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use('/products', require('./routes/ProductRoute'));

mongoose.connect(
  "mongodb+srv://user:COv2MApcVLt3xvgD@cluster0.yosj5.mongodb.net/ecom?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

mongoose.connection.on("connected", () => {
    console.log("connected to database");
})


app.get("/", (req, res) => {
  res.send("Hello World");
});
const host = '0.0.0.0';
const PORT = process.env.PORT || 3000;
app.listen(PORT, host, () => {
    console.log(`Server is running on port ${ PORT }`);
});
