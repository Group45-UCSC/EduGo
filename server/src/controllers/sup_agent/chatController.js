const pool = require("../../dbConnection");

//view complaints function
const viewChatItems = async (req, res) => {
  try {
    const query = await pool.query(
      "SELECT user_id, user_role, user_name from registered_users"
    );

    const data = query.rows;
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving data" });
  }
};

const sendMessage = async (req,res) => {
  try {
    const userId = req.params.userId;
    const {receiver_id, message} = req.body;

    const lastMessage = await pool.query(
      "SELECT * FROM chat ORDER BY message_id DESC LIMIT 1"
    );

    const lastMessageId = lastMessage.rows[0]?.message_id || "M000";
    const numericPart = parseInt(lastMessageId.replace("M", ""), 10);
    const newNumericPart = numericPart + 1;
    const newMessageId = `M${newNumericPart.toString().padStart(3, "0")}`;
    const newMessage = await pool.query(
      "INSERT INTO chat (message_id, sender_id, receiver_id, message) VALUES ($1, $2, $3) RETURNING *",
      [newMessageId, userId, receiver_id, message]
    );

    
    res.status(201).json(newMessage.rows[0]);
  } catch (err) {
    console.error("Error sending message:", err);
    res.status(500).json({ error: "Error sending message"});
  }
}

const receiveMessage = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const query = await pool.query (
      "SELECT * FROM chat WHERE receiver_id = 'SUP001'",
      
    );

    const messages = query.rows;
    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({error: "Error fetching messages"});
  }
};
module.exports = { viewChatItems, sendMessage, receiveMessage };

 