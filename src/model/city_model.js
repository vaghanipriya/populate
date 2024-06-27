const mongoose = require("mongoose");

const city_Schema = mongoose.Schema(
    {
        // key
        city_name: {
            type: String,
            trim: true,
        },
        state:{
            type:mongoose.Types.ObjectId,
            ref:"state"
        }
    },
    {
        timestamps: true,
    }
);

const city = mongoose.model("city", city_Schema);

module.exports = city;
