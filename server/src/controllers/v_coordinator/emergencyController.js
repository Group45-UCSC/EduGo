const pool = require("../../dbConnection");

//view emergency details 
const emergencyls = async (req, res) => {

    try {
      //db query
      const emergencylist = await pool.query(
        "SELECT * FROM emergency e INNER JOIN registered_users u ON u.user_id = e.user_id INNER JOIN vehicle v on v.vehicle_id = e.vehicle_id;",

      );

    return res.json(emergencylist.rows);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
  };



  //view children in the emergency details cases
  const emchildren = async (req, res) => {
    try {
      //db query
      const emchildren = await pool.query(
        "SELECT * FROM children c INNER JOIN emergency e ON e.user_id = c.driver_id;",
      );

    return res.json(emchildren.rows);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
  };


    // dashboard emergencyCount count
    const emergencyCount = async (req, res) => {

      try{
      //db query
      const emergencyData = await pool.query(
        "SELECT COUNT(*) FROM (SELECT * FROM emergency WHERE status = 'not-complete') AS hapening_emergency_count",
      );
    
      return res.json(emergencyData.rows);
      } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
    };

        // dashboard nowemergencytble
        const emergencynow = async (req, res) => {

          try{
          //db query
          const emergencyData = await pool.query(
            "SELECT * FROM emergency  e INNER JOIN registered_users u ON u.user_id = e.user_id INNER JOIN vehicle v on v.vehicle_id = e.vehicle_id WHERE status = 'not-complete';",
          );
        
          return res.json(emergencyData.rows);
          } catch (err) {
          console.error(err.message);
          return res.status(500).send("Server Error");
        }
        };


        //update emergency comment
        const updatecomment = async (req, res) => {
          try {
            // const userId = req.params.userId;
            const { emergency_id } = req.body;
        
              //update ride request table
              const result1 = await pool.query(
                " UPDATE emergency SET comment = 'done', status = 'complete' WHERE emergency_id = '" + emergency_id + "' "
              );
              // Return a success response to the frontend
              return res.status(200).json({
                message: "successfull",
                results: {
                  result1
                },
              });
              } catch (err) {
                console.error(err.massage);
                return res.status(500).send("Server Error");
              }
          };
        
        
        
  
  module.exports = {updatecomment, emergencyls, emchildren, emergencyCount, emergencynow };
  