const mongoose = require("mongoose");

const country_Schema = mongoose.Schema(
    {
        // key
        country_name: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const country = mongoose.model("country", country_Schema);

module.exports = country;
