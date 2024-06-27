const { State } = require("../model");

const create_state_S = (data) => {
    return State.create(data);
};

const get_state_S = () => {
    return State.find()
};

module.exports = {
    create_state_S,
    get_state_S,
};
