const { city_services } = require("../services");

const create_city = async (req, res) => {
    try {
        //   services
        const data = req.body;
        const new_state = await city_services.create_city_S(data);
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

const get_city = async (req, res) => {
    try {
        //   services
       
        const get_state = await city_services.get_city_S();
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
    create_city,
    get_city
}

