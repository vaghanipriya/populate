const { Country } = require("../model");

const create_country_S = (data) => {
    return Country.create(data);
};

const get_country_S = () => {
    return Country.find();
};

module.exports = {
    create_country_S,
    get_country_S
};
