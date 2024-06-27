const express = require("express");
const { country_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-country",
    // cb
    country_controller.create_country
);

router.get(
    "/get-country",
    // cb
    country_controller.get_country
);

module.exports = router;
