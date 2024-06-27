const express = require("express");

const stateRoute = require("./state_routes");
const  cityRoute = require("./city_routes");
const countryRoute = require("./country_routes");


const router = express();

router.use("/state", stateRoute);
router.use("/city", cityRoute);
router.use("/country", countryRoute);

module.exports = router;
