"use strict";

const router = require("express").Router();

module.exports = router;

router.use("/user", require("./user"));
router.use("/purchase", require("./purchase"));
router.use("/transaction", require("./transaction"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});
