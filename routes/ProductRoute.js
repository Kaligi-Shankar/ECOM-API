const router = require("express").Router();
const Product = require("../models/Product");

router.post("/create", (req, res) => {
  const product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  product.save((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send({
        message: "product Added successfully"
      });
    }
  });
});

router.get("/", (req, res) => {
  Product.find((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send({
        message: "product deleted successfully"
      });
    }
  });
});

router.put("/:id/increase-quantity", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $inc: { quantity: req.query.number } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send({
          message: "updated successfully"
        });
      }
    }
  );
});

router.put("/:id/decrease-quantity", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $inc: { quantity: -req.query.number } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
});

module.exports = router;
