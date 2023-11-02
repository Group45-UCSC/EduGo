import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaChild, FaSearch, FaPhone } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import {
  AiFillDashboard,
  AiOutlinePaperClip,
  AiOutlineSend,
} from "react-icons/ai";
import chatIcon from "../../images/chatIcon.png";
import Complaint from "./Complaint";
import MinimizableChat from "./MinimizableChat";
function Support() {
  const sideNavBarLinks = [
    {
      title: "Dashboard",
      path: "/parent/dashboard",
      icon: <AiFillDashboard />,
    },
    { title: "Children", path: "/parent/children", icon: <FaChild /> },
    { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
    { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
    {
      title: "Feedback",
      path: "/parent/feedback",
      icon: <MdOutlineRateReview />,
    },
  ];
  const [activeTab, setActiveTab] = useState("chat");

  const [inputValue, setInputValue] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [complaints, setComplaints] = useState([]);
  const userId = localStorage.getItem("userId");

  const handleComplaintSubmit = (newComplaint) => {
    setComplaints([...complaints, newComplaint]); // Assuming complaints is your state array
  };

  useEffect(() => {
    async function viewComplaints() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/support/viewComplaint/${userId}`
        );
        if (!response.ok) {
          throw new Error(" Nework response was not ok");
        }
        const data = await response.json();
        setComplaints(data);
      }catch (error) {
        console.error(" Error fetching driver details" , error);
      }
    }
    viewComplaints(); 
  },[userId]);

  const handleChatItemClick = (chatId) => {
    setSelectedChatId(chatId);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected file:", file);
    }
  };
  // function to handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      //create a new message object with the input value
      const newMessage = {
        sender: "You",
        content: inputValue.trim(),
        chatId: selectedChatId,
      };
      //update the sentMessage  state with the new message
      setSentMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
    }
  };
  const chatItems = [
    {
      id: 1,
      name: "H.A. Priyantha Hettiarachchi",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
      messages: [
        "Hi there!",
        "I need help.",
        "A parent named John Doe has not paid the monthly fee yet.",
      ],
    },
    {
      id: 2,
      name: "Sunil Fernando",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
      messages: ["Hello!", "Can you assist me with something?"],
    },
    {
      id: 3,
      name: "S.N.Ramanayake",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/12.webp",
      messages: ["Hey there!", "I have a question about a student."],
    },
  ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="flex flex-col gap-10 h-[41rem]">
          <div class="inline-flex">
            <button
              className={`${
                activeTab === "chat"
                  ? "bg-orange text-black drop-shadow-md border-2 border-black"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
              onClick={() => setActiveTab("chat")}
            >
              Chat
            </button>
            <button
              className={`${
                activeTab === "complaints"
                  ? "bg-orange text-black drop-shadow-md border"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange  hover:text-black font-bold hover:border-black py-2 px-4 rounded-r`}
              onClick={() => setActiveTab("complaints")}
            >
              Complaints
            </button>
          </div>

          {/* ------------------------------------------------------- */}
          {/* -------------------------chat Tab---------------------- */}
          {activeTab === "chat" && (
            <div className="grid grid-cols-3 col-span-3  bg-orange w-3/4 m-2 p-3 h-[35rem] ">
              {/* -------------------chat list----------------- */}
              <div className="col-span-1  m-1 py-5  flex flex-col gap-8">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 bg-transparent py-2 border rounded-full focus:outline-none focus:border-black focus:border-2 placeholder-black placeholder-opacity-75"
                    placeholder="Search Name..."
                    name="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
                </div>
                <div className=" w-full h-full flex flex-col  gap-3">
                  {chatItems.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        selectedChatId === item.id
                          ? "bg-[#4b5563] shadow-inner text-white"
                          : "bg-orange transform border-b border-transparent hover:scale-[103%] transition duration-300 ease-out"
                      } w-full h-14 rounded-xl border-b border-black flex items-center px-4 hover:border-black `}
                      onClick={() => handleChatItemClick(item.id)}
                    >
                      <img
                        src={item.avatar}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <p className="text-gray-800 font-semibold">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* --------------------------------------------- */}
              {/* ------------------chat view------------------ */}
              <div className="col-span-2 bg-gradient-to-r from-[#e2e8f0] to-[#cbd5e0] overflow-hidden rounded-md m-1 p-5 flex flex-col justify-between">
                {selectedChatId ? (
                  <div className="flex justify-center items-center border-b pb-2 mb-3">
                    <img
                      src={
                        chatItems.find((item) => item.id === selectedChatId)
                          ?.avatar
                      }
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <p className="text-xl font-semibold">
                      {
                        chatItems.find((item) => item.id === selectedChatId)
                          ?.name
                      }
                    </p>
                    <button className="ml-5 cursor-pointer hover:text-orange">
                      <FaPhone />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center mt-8">
                    <img
                      src={chatIcon}
                      alt="Chat"
                      className="w-[9rem] h-[9rem] mb-2"
                    />
                    <div className="flex flex-col justify-center items-center text-2xl font-semibold">
                      <span className="text-center">Click a name</span>
                      <span className="text-center">to open a chat</span>
                    </div>
                  </div>
                )}
                {selectedChatId ? (
                  <div className="overflow-auto">
                    {/* Display the chat view for the selected chat */}
                    {/* Dummy chat messages */}
                    <div className="flex flex-col gap-3 ml-1 mt-8">
                      {chatItems.map((chatItem) => (
                        <div key={chatItem.id}>
                          {selectedChatId === chatItem.id && (
                            <div className="flex flex-col gap-3 ml-1 mt-8">
                              {chatItem.messages.map((message, index) => (
                                <div
                                  key={index}
                                  className={`flex gap-4 items-center p-2 ${
                                    chatItem.id === selectedChatId
                                      ? "justify-start"
                                      : "justify-end"
                                  }`}
                                >
                                  <img
                                    src={chatItem.avatar}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full bg-o"
                                  />
                                  <div
                                    className={`bg-gray px-5 py-2 rounded-xl flex ${
                                      chatItem.id === 1
                                        ? "justify-start"
                                        : "justify-end"
                                    }`}
                                  >
                                    <p>{message}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {chatItems.find((item) => item.id === selectedChatId) &&
                      sentMessages
                        .filter((message) => message.chatId === selectedChatId)
                        .map((message, index) => (
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
                ) : null}

                {selectedChatId && (
                  <div className="flex items-center gap-4 mt-5">
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
                )}
              </div>
              {/* --------------------------------------------- */}
            </div>
          )}
          {/* -------------------------------------------------------  */}

          {/* -------------------------complaint Tab------------------ */}
          {activeTab === "complaints" && (
            <div className="grid grid-cols-5">
              <div className="col-span-3 bg-orange w-3/4 h-[35rem] p-5 ml-5  ">
                <Complaint onComplaintSubmit={handleComplaintSubmit} />
              </div>
              <div className="col-span-2 bg-[#EEEEEE] w-full h-[35rem] p-5 mr-5">
                <h className=" text-3xl font-semibold">All Complaints</h>
                {complaints.map((complaint, index) => (
                  <div key={index} className="ml-3 pt-5">
                    <p>
                      <strong>Complaint Type:</strong> {complaint.complainttype}
                    </p>
                    <p>
                      <strong>Complaint Details:</strong>{" "}
                      {complaint.complaintdetails}
                    </p>
                    <p>
                      <strong>Date of Occurrence:</strong>{" "}
                      {complaint.dateofoccurrence}
                    </p>
                    <p>
                      <strong>Attachments:</strong>{" "}
                      {complaint.attachments.map((file, index) => (
                        <span key={index}>{file.name}, </span>
                      ))}
                    </p>
                    <div className="pt-2 text-lg flex flex-row font-medium">
                      Status:<p className="text-[#16a34a] pl-3">{complaint.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <MinimizableChat />
            </div>
          )}
          {/* -------------------------------------------------------- */}
        </div>
      </MainLayout>
    </div>
  );
}

export default Support;
