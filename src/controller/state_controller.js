const { state_services } = require("../services");

const create_state = async (req, res) => {
    try {
        //   services
        const data = req.body;
        const new_state = await state_services.create_state_S(data);
        res.status(200).json({
            success: true,
            data: new_state,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_state = async (req, res) => {
    try {
        //   services

        const get_state = await state_services.get_state_S();
        res.status(200).json({
            success: true,
            data: get_state,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_state,
    get_state,
};
