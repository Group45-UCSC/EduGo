//db connection
const pool = require("../../dbConnection");

// Mobile app view children details 
const getChildrenDetails = async (req, res) => {
    try {
        // console.log(req.params);
        const driverId = req.params.driverId;

        const childrenData = await pool.query(
            "SELECT children.child_name, children.school_name, children.pickup_location, children.ride_shift_type FROM children WHERE children.driver_id = '" + driverId + "' "
        );

        return res.json(childrenData.rows);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
};

const getChildrenCount = async (req, res) => {
    try {
        // console.log(req.params);
        const driverId = req.params.driverId;

        const childrenData = await pool.query(
            "SELECT COUNT(*) FROM children WHERE driver_id = '" + driverId + "' "
        );

        return res.json(childrenData.rows);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
};

module.exports = {
    getChildrenDetails,
    getChildrenCount,
}