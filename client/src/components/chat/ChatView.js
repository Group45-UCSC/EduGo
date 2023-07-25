import React from 'react'

function ChatView({chat, onClose}) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
      <div className="flex justify-between items-center mb-4">
        <div className='flex items-center gap-3'>
        <img src={chat.avatar} className="w-12 rounded-full" alt="Avatar" />
          <div>{chat.name}</div>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>


        <div className="mt-4">{chat.chatContent}</div>
      </div>
    </div>
  );
}

export default ChatView;