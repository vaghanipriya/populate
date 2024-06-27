const { City } = require("../model");

const create_city_S = (data) => {
    return City.create(data);
}

const get_city_S = () => {
    return City.find().populate("state")
}

module.exports = {
    create_city_S,
    get_city_S
}