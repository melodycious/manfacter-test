import React, { useState } from 'react';
import { BsChatRightDotsFill } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import claudIA from '../chatbot/claudIA.png';
import icon from '../sidebar/icon.png';  

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    const userMessage = {
      role: 'user',
      content: inputValue,
    };
    const newMessages = [...messages, userMessage];

    const botMessage = {
      role: 'bot',
      content: getBotResponse(inputValue),
    };
    setMessages([...newMessages, botMessage]);
    setInputValue('');
  };

  const getBotResponse = (message) => {
    const responses = {
      'hello': 'Hello! How can I help you today?',
      'bye': 'Goodbye, thanks for supporting Manfacter',
      'default': 'Sorry I cant help you with this issue, please try another one',
    };

    const normalizedMessage = message.toLowerCase();
    return responses[normalizedMessage] || responses['default'];
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div className="flex flex-col items-end">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="p-4 text-orange-500"
          >
            <BsChatRightDotsFill size={46} />
          </button>
        )}

        {isOpen && (
          <div className="bg-white shadow-lg rounded-lg w-80 border">
            <div
              className="text-white p-2 rounded-t-lg flex justify-between items-center cursor-pointer"
              onClick={toggleChat}
            >
               <img src={claudIA} alt="Chatbot" />
               <span className="text-gray-500 cursor-pointer font-mono text-lg mr-4">X</span>
               
            </div>
            <hr className="border-b border-gray-200" />
            <div className="p-4 h-64 overflow-y-scroll flex flex-col">
            {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 flex items-center rounded-lg ${
                    message.role === 'user'
                      ? 'bg-gray-200 text-black self-end'
                      : 'bg-orange-500 text-white self-start'
                  } `}
                >
                  {message.role === 'bot' && (
                    <img src={icon} alt="Bot Icon" className="w-5 h-4 mr-3" />
                  )}
                  <div>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={handleMessageSubmit}
              className="p-4 flex flex-row gap-2"
            >
              <input
                className="flex-grow p-2 border rounded-lg text-sm"
                type="text"
                placeholder="Write your text here"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="text-orange-500 px-4 py-2"
                type="submit"
              >
                <IoSendSharp size={28} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
