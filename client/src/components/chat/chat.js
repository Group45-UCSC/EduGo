import React,{useState} from 'react'
import ChatView from './ChatView';
const chatData= [
  {
    name:"Nethmini Abeykoon",
    avatar:"https://tecdn.b-cdn.net/img/new/avatars/5.webp",
  },
  {
    name: "John Mayers",
    avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
  },
  {
    name: "Alex Hales",
    avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
  },

];
function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (index) => {
    setSelectedChat(index);
  };
  const handleCloseChat = () => {
    setSelectedChat(null);
  };

  return (
    <div className="flex flex-col gap-3 mt-10">
      {chatData.map((chat, index) => (
        <div
          key={index}
          className="bg-gray rounded-xl w-fill h-16 flex items-stretch gap-5 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
          onClick={() => handleChatClick(index)}
        >
          <div className="p-2">
            <img
              src={chat.avatar}
              className="w-12 rounded-full"
              alt="Avatar"
            />
          </div>
          <div className="pt-5">{chat.name}</div>
        </div>
      ))}
      {selectedChat !== null && <ChatView chat={chatData[selectedChat]}onClose={handleCloseChat}/>}
    </div>
  );
}

export default Chat;
