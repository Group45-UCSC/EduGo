import React, { useState } from "react";
import { AiOutlinePaperClip, AiOutlineSend } from "react-icons/ai";
import { FaWindowMinimize } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";

function MinimizableChat({ zIndex }) {
  const [isMinimized, setIsMinimized] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const handleToggle = () => {
    setIsMinimized((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      //create a new message object with the input value
      const newMessage = {
        sender: "You",
        content: inputValue.trim(),
        // chatId: selectedChatId,
      };
      //update the sentMessage  state with the new message
      setSentMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="fixed bottom-10 right-14 p-8 transition-all ease-in-out duration-1000"
    style={{ zIndex: zIndex }}>
      <div
        className={`bg-orange flex justify-center items-center gap-10 border-2 py-2 px-5 rounded-lg ${
          isMinimized ? "gap-5" : ""
        }`}
      >
        <button className="text-2xl cursor-pointer" onClick={handleToggle}>
          {isMinimized ? <FiMaximize2 className=" cursor-pointer  transform hover:scale-[105%] transition duration-300 ease-out" /> : <FaWindowMinimize className=" cursor-pointer  transform hover:scale-[105%] transition duration-300 ease-out" />}
        </button>
        <div className="flex items-center space-x-2">
            <img
              src="https://media.istockphoto.com/id/1132874986/photo/theyve-got-the-answers-youre-looking-for.jpg?s=612x612&w=0&k=20&c=nxfQd3uhDr8598BjKiTPZp-RN0HuJU9v3clLE9wO5Sk= "
              // alt={avtar}
              className="h-10 w-10 object-cover border-2 border-[#22c55e] rounded-full"
            />
            <div className="flex flex-row gap-10">
              <h1 className="font-semibold text-lg">John Doe (Sup_agent)</h1>
              <div className="flex items-center text-black">
              <div className="w-3 h-3 bg-[#22c55e] rounded-full"></div>
              </div>
            </div>
          </div>
      </div>
      {!isMinimized && (
        <div className="bg-[#bbbcbd] border-2 rounded-lg h-[400px] w-[400px] overflow-hidden flex flex-col transition-all ease-in-out duration-500">
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages */}
            <div className="mb-4">
              {/* ... Add chat messages here */}
              <div className="flex items-start justify-start mb-2">
                <div className="bg-gray px-5 py-2 rounded-xl flex justify-start">
                  Hi there! How can I help you today?
                </div>
              </div>
              <div className="">
              {sentMessages.map((message, index) => (
                <div key={index} className="flex  gap-3 items-center p-2 justify-end">
                  <div className="bg-orange px-5 py-2 rounded-xl flex">
                    {message.content}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 bg-gray-200 p-2">
            {/* Message input */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <label htmlFor="file-input">
                  <AiOutlinePaperClip
                    className={`h-6 w-6 text-${
                      inputValue.trim() !== "" ? "orange" : "black"
                    } cursor-pointer hover:text-orange`}
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange} // Add a function to handle the file attachment
                />
              </div>
              <input
                type="text"
                className="flex-grow px-4 py-3 border border-black rounded-xl focus:outline-none focus:border-orange focus:border-2 placeholder-black placeholder-opacity-75"
                placeholder="Type your message..."
                value={inputValue} // Set the input value from state
                onChange={(e) => setInputValue(e.target.value)} // Update the input value in state
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <AiOutlineSend
                className={`h-6 w-6 text-${
                  inputValue.trim() !== "" ? "orange" : "black"
                } cursor-pointer hover:text-orange `}
                onClick={handleSendMessage} //calll the function t send the message
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MinimizableChat;
