import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai"
import { MdLocationOn, MdPersonAdd, MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  { title: "Feedback", path: "/driver/feedback", icon: <MdOutlineRateReview /> },
];
function Support() {
  const [activeTab, setActiveTab] = useState("chat");

  const [inputValue, setInputValue] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

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
        This is Driver Support Page
      </MainLayout>
    </div>
  );
}

export default Support;
