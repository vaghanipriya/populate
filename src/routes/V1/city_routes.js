const express = require("express");
const { city_controller } = require("../../controller");
const router = express.Router();

router.post(
    "/create-city",
    // cb
    city_controller.create_city
);

router.get(
    "/get-city",
    // cb
   city_controller.get_city
);

module.exports = router;
