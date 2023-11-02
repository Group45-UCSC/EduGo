import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaSearch } from "react-icons/fa";
import { AiOutlinePaperClip, AiOutlineSend } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import sup_agent from "../../images/sup_agent.png";
import chatIcon from "../../images/chatIcon.png";
// import Chat from "../../components/chat/chat";
const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Chat", path: "/sup_agent/chat", icon: <BsFillChatDotsFill /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaUsers /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBus /> },
];
// const chatItems = [
//   {
//     id: 1,
//     name: "Nethmini Abeykoon",
//     avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
//     messages: [
//       "Hi there!",
//       "I need help.",
//       "A parent named John Doe has not paid the monthly fee yet.",
//     ],
//     category: "driver",
//     unreadCount: 2,
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
//     messages: ["Hello!", "Can you assist me with something?"],
//     category: "parent",
//     unreadCount: 1,
//   },
//   {
//     id: 3,
//     name: "S.N.Ramanayake",
//     avatar: "https://tecdn.b-cdn.net/img/new/avatars/12.webp",
//     messages: ["Hey there!", "I have a question about a student."],
//     category: "driver",
//   },
// ];
function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [chatItemsState, setChatItemsState] = useState([]);
  const [chatItems, setChatItems] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const userId = localStorage.getItem("userId");
  // const [userId, setUserId] = useState("");
  // console.log(userId);

  useEffect(() => {
    async function viewChatItems() {
      try {
        const response = await fetch(
          "http://localhost:5000/edugo/supAgent/chat/viewChat"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setChatItems(data);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    }
    viewChatItems();
  }, []);

  useEffect(() => {
    const receiveMessage = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/supAgent/chat/receiveMessage/${userId}`
        );

        if (response.ok) {
          const data = await response.json();
          setChatMessages(data);

          // Handle new messages and update unread counts
          setChatItemsState((prevChatItems) =>
            prevChatItems.map((chatItem) => {
              if (chatItem.id === data.chatId) {
                return {
                  ...chatItem,
                  unreadCount: chatItem.unreadCount + 1,
                };
              }
              return chatItem;
            })
          );
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    receiveMessage();
  }, [userId]);

  const handleChatItemClick = (chatId) => {
    setSelectedChatId(chatId);

    // Find the chat item with the selected chatId
    const selectedChatItem = chatItemsState.find((item) => item.id === chatId);

    if (selectedChatItem) {
      // Reset the unread count to 0 for the selected chat
      selectedChatItem.unreadCount = 0;
      setChatItemsState([...chatItemsState]);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected file:", file);
      setIsFileSelected(true);

      const newFileMesssage = {
        sender: "You",
        file: file,
        chatId: selectedChatId,
      };
      setSentMessages((prevMessages) => [...prevMessages, newFileMesssage]);
    }
  };
  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  // function to handle sending a message
  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/supAgent/chat/sendMessage/${userId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sender_id: userId,
              receiver_id: selectedChatId,
              message: inputValue.trim(),
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const newMessage = await response.json();

        setSentMessages((prevMessages) => [...prevMessages, newMessage]);
        setInputValue("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const parentChatItems = chatItems.filter(
    (item) => item.user_role === "parent"
  );
  const driverChatItems = chatItems.filter(
    (item) => item.user_role === "driver"
  );

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="grid grid-cols-3 ">
          <div className="col-span-2  bg-orange mt-2 p-3 h-[45rem]  grid grid-cols-3">
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
                <div className="text-black text-xl font-semibold mb-3">
                  Parents
                </div>
                {parentChatItems
                  .filter((item) =>
                    item.user_name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        selectedChatId === item.user_id
                          ? "bg-[#4b5563] shadow-inner text-white"
                          : "bg-orange transform border-b border-transparent hover:scale-[103%] transition duration-300 ease-out"
                      } w-full h-14 rounded-xl border-b border-black flex items-center px-4 hover:border-black `}
                      onClick={() => handleChatItemClick(item.user_id)}
                    >
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <p className="font-semibold">
                        {item.user_name}
                        {item.unreadCount > 0 && (
                          <span className="ml-8 bg-[#435874] text-white  rounded-full px-2 py-1">
                            {item.unreadCount}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                <div className="text-black text-xl font-semibold mb-3">
                  Drivers
                </div>
                {driverChatItems
                  .filter((item) =>
                    item.user_name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        selectedChatId === item.user_id
                          ? "bg-[#4b5563] shadow-inner text-white"
                          : "bg-orange transform border-b border-transparent hover:scale-[103%] transition duration-300 ease-out"
                      } w-full h-14 rounded-xl border-b border-black flex items-center  px-4 hover:border-black `}
                      onClick={() => handleChatItemClick(item.user_id)}
                    >
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <p className="font-semibold">
                        {item.user_name}
                        {item.unreadCount > 0 && (
                          <span className="ml-8 bg-[#435874] text-white  rounded-full px-2 py-1">
                            {item.unreadCount}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            {/* --------------------------------------------- */}
            {/* ------------------chat view------------------ */}
            <div className="col-span-2 bg-gradient-to-r from-[#e2e8f0] to-[#cbd5e0] rounded-md m-1 p-5 flex flex-col justify-between">
              {selectedChatId ? (
                <div className="flex justify-center items-center border-b pb-2 mb-3">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <p className="text-gray-800 font-semibold">
                    {
                      chatItems.find((item) => item.user_id === selectedChatId)
                        ?.user_name
                    }
                  </p>
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
                <div className="">
                  {/* Display the chat view for the selected chat */}
                  {/* Dummy chat messages */}
                  <div className="flex flex-col gap-3 ml-1 mt-8">
                    {chatMessages.map((chatMessage) => (
                      <div key={chatMessage.message_id}>
                        {selectedChatId === chatMessage.sender_id ||
                        selectedChatId === chatMessage.receiver_id ? (
                          <div
                            className={`flex gap-4 items-center p-2 ${
                              userId === chatMessage.sender_id
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <div
                              className={`bg-${
                                userId === chatMessage.sender_id
                                  ? "orange"
                                  : "gray"
                              } px-5 py-2 rounded-xl flex ${
                                userId === chatMessage.sender_id
                                  ? "justify-start"
                                  : "justify-end"
                              }`}
                            >
                              <p>{chatMessage.message}</p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {chatItems.find((item) => item.user_id === selectedChatId) &&
                    sentMessages
                      .filter(
                        (message) => message.receiver_id === selectedChatId
                      )
                      .map((message, index) => (
                        <div
                          key={index}
                          className="flex gap-3 items-center p-2 justify-end"
                        >
                          <div className="bg-orange px-5 py-2 rounded-xl flex">
                            <p>{message.message}</p>
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
                    onClick={() => handleSendMessage(userId, inputValue)} //calll the function t send the message
                  />
                </div>
              )}
            </div>
            {/* --------------------------------------------- */}
          </div>
          <div className="col-span-1 ml-[3rem] mt-[8rem] h-[45rem]  ">
            <img className=" object-cover" src={sup_agent} alt="supAgent"></img>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Chat;
