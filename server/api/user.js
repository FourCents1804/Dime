const router = require("express").Router();
const defaultHandler = require("./errorHandler");
const { User } = require("../db/models");

router.get(
  "/",
  defaultHandler(async (req, res, next) => {
    const users = await User.findAll();
    res.json(users);
  })
);

router.get(
  "/:id",
  defaultHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.json(user);
  })
);

router.post(
  "/",
  defaultHandler(async (req, res, next) => {
    const newUser = await Purchase.create(req.body.user);
    res.json({ newUser });
  })
);

router.delete(
  "/:id",
  defaultHandler(async (req, res, next) => {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(200);
  })
);

module.exports = router;
