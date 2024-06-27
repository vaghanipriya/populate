const mongoose = require("mongoose");

const state_Schema = mongoose.Schema(
    {
        // key
        state_name: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const state = mongoose.model("state", state_Schema);

module.exports = state;
