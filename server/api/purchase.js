const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const { Purchase } = require('../db/models');

router.get(
  '/',
  defaultHandler(async (req, res, next) => {
    const purchases = await Purchase.findAll();
    res.json(purchases);
  })
);

router.get(
  '/:id',
  defaultHandler(async (req, res, next) => {
    const purchaseId = req.params.id;
    const purchase = await Purchase.findById(purchaseId);
    res.json(purchase);
  })
);

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const newPurchase = await Purchase.create(req.body.purchase);
    res.json({ newPurchase });
  })
);

router.delete(
  '/:id',
  defaultHandler(async (req, res, next) => {
    await Purchase.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(200);
  })
);

module.exports = router;
