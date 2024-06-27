const express = require("express");
const { state_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-state",
    // cb
    state_controller.create_state
);

router.get(
    "/get-state",
    // cb
    state_controller.get_state
);

module.exports = router