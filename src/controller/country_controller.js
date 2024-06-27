const { country_services } = require("../services");

const create_country = async (req, res) => {
    try {
        //   services
        const data = req.body;
        const new_country = await country_services.create_country_S(data);
        res.status(200).json({
            success: true,
            data: new_country,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_country = async (req, res) => {
    try {
        //   services
        
        const new_country = await country_services.get_country_S();
        res.status(200).json({
            success: true,
            data: new_country,
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
    create_country,
    get_country
};
