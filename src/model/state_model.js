const mongoose = require("mongoose");

const state_Schema = mongoose.Schema(
    {
        // key
        state_name: {
            type: String,
            trim: true,
        },
        state_pin: {
            type: Number,
            default: 0,
        },
        country: {
            type: mongoose.Types.ObjectId,
            ref: "country",
        },
    },
    {
        timestamps: true,
    }
);

const state = mongoose.model("state", state_Schema);

module.exports = state;
