const router = require("express").Router();
const api = require("./api");

router.get("/", (_, res) =>
  res.status(200).send("Welcome to the Getir Backend Challenge")
);
router.use("/api/v1", api);

module.exports = router;
