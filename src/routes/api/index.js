const router = require("express").Router();
const { validate } = require("express-validation");
const { RecordModelValidator } = require("../../models/record/validation");
const { getRecords } = require("../../controllers");

router.route("/records").post(validate(RecordModelValidator), getRecords);
module.exports = router;
