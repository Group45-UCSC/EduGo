import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaSearch } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import sup_agent from "../../images/sup_agent.png";
// import Chat from "../../components/chat/chat";
const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaBus /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaUsers /> },
];

function SupAgentDashboardPg() {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  // function to handle sendinga a message
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      //create a new message object with the input value
      const newMessage = {
        sender: "You",
        content: inputValue.trim(),
      };

      //update the sentMessage  state with the new message
      setSentMessages((prevMessages) => [...prevMessages, newMessage]);

      //clear the input value after sending the message
      setInputValue("");
    }
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="grid grid-cols-5 ">
          <div className="col-span-2  m-2 mt-[8rem] h-[45rem]  ">
            <img
              className="w-full object-cover"
              src={sup_agent}
              alt="supAgent"
            ></img>
          </div>
          <div className="col-span-3  bg-orange m-2 p-3 h-[45rem]  grid grid-cols-3">
            {/* -------------------chat list----------------- */}
            <div className="col-span-1  m-1 py-5  flex flex-col gap-8">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 bg-transparent py-2 border rounded-full focus:outline-none focus:border-black focus:border-2 placeholder-black placeholder-opacity-75"
                  placeholder="Search Name..."
                />
                <FaSearch className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
              </div>
              <div className=" w-full h-full flex flex-col  gap-3">
                <div
                  className={`${
                    isClicked
                      ? "bg-[#F6AD55]"
                      : "bg-orange transform hover:scale-110"
                  } w-full h-14 rounded-xl border-b border-black flex items-center px-4 hover:border-black `}
                  onClick={handleClick}
                >
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <p className="text-gray-800 font-semibold">
                    Nethmini Abeykoon
                  </p>
                </div>
                <div
                  className={`${
                    isClicked
                      ? "bg-[#F6AD55]"
                      : "bg-orange transform hover:scale-110"
                  } w-full h-14 rounded-xl border-b border-black flex items-center px-4 hover:border-black `}
                  onClick={handleClick}
                >
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <p className="text-gray-800 font-semibold">John Doe</p>
                </div>
                <div
                  className={`${
                    isClicked
                      ? "bg-[#F6AD55]"
                      : "bg-orange transform hover:scale-110"
                  } w-full h-14 rounded-xl border-b border-black flex items-center px-4 hover:border-black `}
                  onClick={handleClick}
                >
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/12.webp"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <p className="text-gray-800 font-semibold">S.N.Ramanayake</p>
                </div>
              </div>
            </div>
            {/* --------------------------------------------- */}
            {/* ------------------chat view------------------ */}
            <div className="col-span-2 bg-[#FDF6F6] rounded-xl m-1 p-5 flex flex-col justify-between">
              {/* {isClicked && (
                <div></div>
              )} */}
              {isClicked ? (
                <div className="">
                  {/* Display the chat view for the selected chat */}
                  {/* Dummy chat messages */}
                  <div className="flex flex-col gap-3 ml-1 mt-8">
                    <div className="flex gap-4 items-center p-2">
                      <img
                        src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                        alt="Profile"
                        className="w-8 h-8 rounded-full bg-o"
                      />
                      <div className="bg-gray px-5 py-2 rounded-xl flex justify-start">
                        <p>Hi there!</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center p-2">
                      <img
                        src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                        alt="Profile"
                        className="w-8 h-8 rounded-full bg-o"
                      />
                      <div className="bg-gray px-5 py-2 rounded-xl flex justify-start">
                        <p>I need a help</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center p-2">
                      <img
                        src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                        alt="Profile"
                        className="w-8 h-8 rounded-full bg-o"
                      />
                      <div className="bg-gray px-5 py-2 rounded-xl flex justify-start">
                        <p>
                          A parent named John Doe has not paid the monthly fee
                          yet.
                        </p>
                      </div>
                    </div>
                    {/* Add more chat messages here */}
                  </div>
                  {sentMessages.map((message, index) => (
                    <div
                      key={index}
                      className="flex gap-3 items-center p-2 justify-end"
                    >
                      <div className="bg-orange px-5 py-2 rounded-xl flex">
                        <p>{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Click a name to open a chat</p>
              )}

              {isClicked && (
                <div className="flex items-center gap-4 mt-5">
                  <input
                    type="text"
                    className="flex-grow px-4 py-3 border border-gray rounded-xl focus:outline-none focus:border-orange focus:border-2 placeholder-black placeholder-opacity-75"
                    placeholder="Type your message..."
                    value={inputValue} // Set the input value from state
                    onChange={(e) => setInputValue(e.target.value)} // Update the input value in state
                  />
                  <AiOutlineSend
                    className={`h-6 w-6 text-${
                      inputValue.trim() !== "" ? "orange" : "black"
                    } cursor-pointer `}
                    onClick={handleSendMessage} //calll the function t send the message
                  />
                </div>
              )}
            </div>
            {/* --------------------------------------------- */}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default SupAgentDashboardPg;
