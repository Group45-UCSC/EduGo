//db connection
const pool = require("../../dbConnection");

const getChildrenDetails = async (req, res) => {
    try {
        // console.log(req.params);
        const driverId = req.params.driverId;
        const shiftType = req.params.shiftType;

        const childrenData = await pool.query(
            "SELECT ride_request.child_id, ride_request.school_name, ride_request.pickup_location, ride_request.ride_shift_type, children.child_id, children.child_name FROM ride_request INNER JOIN children ON ride_request.child_id = children.child_id WHERE ride_request.driver_id = '" + driverId + "' "
        );

        return res.json(childrenData.rows);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
};

module.exports = {
    getChildrenDetails,
}