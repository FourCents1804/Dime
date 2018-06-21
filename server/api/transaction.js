const router = require("express").Router();
const defaultHandler = require("./errorHandler");
const { Transaction } = require("../db/models");

router.get(
  "/",
  defaultHandler(async (req, res, next) => {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  })
);

router.get(
  "/:id",
  defaultHandler(async (req, res, next) => {
    const transactionId = req.params.id;
    const transaction = await Transaction.findById(transactionId);
    res.json(transaction);
  })
);

router.post(
  "/",
  defaultHandler(async (req, res, next) => {
    const newTransaction = await Transaction.create(req.body.newTransaction);
    res.json({ newTransaction });
  })
);

router.delete(
  "/:id",
  defaultHandler(async (req, res, next) => {
    await Transaction.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(200);
  })
);

module.exports = router;
