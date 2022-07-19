const { searchCars } = require('../repository/Search.repository');

const searchCar = async (req, res) => {
    try {
        console.log("queryparams", req.query);
        const response = await searchCars(req.query);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).send(err);
    }




};
module.exports = {
    searchCar,
};