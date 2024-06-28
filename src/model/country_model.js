const mongoose = require("mongoose");

const country_Schema = mongoose.Schema(
    {
        // key
        country_name: {
            type: String,
            trim: true,
        },
        country_pin: {
            type: Number,
            default:0
        },
       
    },
    {
        timestamps: true,
    }
);

const country = mongoose.model("country", country_Schema);

module.exports = country;
