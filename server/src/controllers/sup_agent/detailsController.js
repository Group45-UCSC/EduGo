const pool = require("../../dbConnection");

const viewParentDetails = async (req, res) => {
  try {
    const query = await pool.query(`
      SELECT ru.*, c.child_id, c.child_name, c.school_id, c.driver_id
      FROM registered_users ru
      LEFT JOIN children c ON ru.user_id = c.parent_id
      WHERE ru.user_role = 'parent'
    `);

    // Group parents and their children using a Map
    const parentMap = new Map();

    query.rows.forEach((row) => {
      const {
        user_id,
        user_name,
        nic,
        contact_number,
        address,
        profile_image,
        child_id,
        child_name,
        school_id,
        driver_id,
      } = row;

      if (!user_id) {
        console.error("Missing user_id:", row);
        return; // Skip this row if user_id is missing
      }

      const childData = {
        child_id,
        child_name,
        school_id,
        driver_id,
      };

      if (!parentMap.has(user_id)) {
        parentMap.set(user_id, {
          user_id,
          user_name,
          nic,
          contact_number,
          address,
          profile_image,
          children: [],
        });
      }

      parentMap.get(user_id).children.push(childData);
    });

    const parentsWithChildren = Array.from(parentMap.values());
    console.log("parentsWithChildren:", parentsWithChildren);

    return res.json(parentsWithChildren);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};
const viewChildrenDetails = async (req, res) => {
  try {
    const query = await pool.query(`
    SELECT c.* , ru.user_name, ru.user_email, ru.contact_number, ru.nic 
    FROM children c 
    LEFT JOIN registered_users ru ON c.parent_id = ru.user_id
    ORDER BY c.child_id ASC
    `);

    const childMap = new Map();

    query.rows.forEach((row) => {
      const {
        child_id,
        parent_id,
        child_name,
        school_id,
        driver_id,
        image,
        pickup_location,
        user_name,
        user_email,
        contact_number,
        nic,
      } = row;

      if (!child_id) {
        console.error("Missing child_id", row);
        return;
      }

      if (!childMap.has(child_id)) {
        childMap.set(child_id, {
          child_id,
          parent_id,
          child_name,
          school_id,
          driver_id,
          image,
          pickup_location,
          parent: [],
        });
      }

      const parentData = {
        user_name,
        user_email,
        contact_number,
        nic,
      };

      childMap.get(child_id).parent.push(parentData);
    });

    const childWithParent = Array.from(childMap.values());
    console.log("childWithParent:", childWithParent);

    return res.json(childWithParent);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};

const viewDriverDetails = async (req, res) => {
  try {
    const query = await pool.query(`
      SELECT ru.*, v.vehicle_id, v.vehicle_no, v.vehicle_model, v.registration_no
      FROM registered_users ru
      LEFT JOIN vehicle v ON ru.user_id = v.driver_id
      WHERE ru.user_role = 'driver' 
    `);

    const driverMap = new Map();

    query.rows.forEach((row) => {
      const {
        user_id,
        user_name,
        nic,
        contact_number,
        address,
        profile_image,
        vehicle_id,
        vehicle_no,
        vehicle_model,
        registration_no,
      } = row;

      if (!user_id) {
        console.error(" Missing user_id:", row);
        return;
      }

      const vehicleData = {
        vehicle_id,
        vehicle_no,
        vehicle_model,
        registration_no,
      };

      if (!driverMap.has(user_id)) {
        driverMap.set(user_id, {
          user_id,
          user_name,
          nic,
          contact_number,
          address,
          profile_image,
          vehicle: [],
        });
      }

      driverMap.get(user_id).vehicle.push(vehicleData);
    });

    const driverWithVehicle = Array.from(driverMap.values());
    console.log("driverWithVehicle:", driverWithVehicle);

    return res.json(driverWithVehicle);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: " error",
      message: "Internal sever error",
    });
  }
};

const viewVehicleDetails = async (req, res) => {
  try {
    const query = await pool.query(`
      SELECT v.* ,ru.user_name, ru.user_id, ru.contact_number, ru.nic
      FROM vehicle v
      LEFT JOIN registered_users ru ON v.driver_id = ru.user_id
      ORDER BY v.vehicle_id ASC
    `);

    const vehicleMap = new Map();

    query.rows.forEach((row) => {
      const {
        vehicle_id,
        driver_id,
        vehicle_no,
        vehicle_type,
        vehicle_model,
        num_of_seats,
        registration_no,
        user_name,
        user_id,
        contact_number,
        nic,
      } = row;

      if (!vehicle_id) {
        console.error("Missing vehicle_id", row);
        return;
      }

      if (!vehicleMap.has(vehicle_id)) {
        vehicleMap.set(vehicle_id, {
          vehicle_id,
          driver_id,
          vehicle_no,
          vehicle_type,
          vehicle_model,
          num_of_seats,
          registration_no,
          driver: [],
        });
      }

      const driverData = {
        user_name,
        user_id,
        contact_number,
        nic,
      };

      vehicleMap.get(vehicle_id).driver.push(driverData);
    });

    const vehicleWithDriver = Array.from(vehicleMap.values());
    console.log("vehicleWithDriver:", vehicleWithDriver);

    return res.json(vehicleWithDriver);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};
module.exports = { viewParentDetails, viewChildrenDetails, viewDriverDetails, viewVehicleDetails };
