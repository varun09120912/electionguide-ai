// src/pages/Chat.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Send, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ChatBubble from '../components/ChatBubble';
import LoadingDots from '../components/LoadingDots';
import { getResponse, defaultResponse } from '../data/responses';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { sanitizeInput } from '../utils/sanitize';

const initialMessages = [
  {
    id: 1,
    isUser: false,
    content: defaultResponse
  }
];

const suggestions = [
  "How do I register?",
  "What is EVM?",
  "Am I eligible?",
  "When are elections?"
];

const Chat = () => {
  const [messages, setMessages] = useLocalStorage('election-chat-history', initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const sanitized = sanitizeInput(text || inputValue);
    if (!sanitized.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      isUser: true,
      content: sanitized
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const generateAIResponse = async () => {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (apiKey && apiKey.length > 10) {
          const genAI = new GoogleGenerativeAI(apiKey);
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
          
          const prompt = `You are a helpful expert on the Indian Election process. Answer the following question simply, factually, and concisely for a general audience. Question: ${sanitized}`;
          const result = await model.generateContent(prompt);
          const responseText = result.response.text();
          
          return {
            title: "✨ Google Gemini AI",
            explanation: responseText,
            steps: [],
            footer: "Powered by Google Gemini 1.5 Flash"
          };
        } else {
          // No API key, fallback to offline keyword engine
          return getResponse(sanitized);
        }
      } catch (error) {
        console.error("Gemini API Error:", error);
        return getResponse(sanitized); // Fallback on error
      }
    };

    generateAIResponse().then((responseContent) => {
      const aiMsg = {
        id: Date.now() + 1,
        isUser: false,
        content: responseContent
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const clearChat = () => {
    if(window.confirm("Are you sure you want to clear the chat history?")) {
      setMessages(initialMessages);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] 4xl:h-[calc(100vh-8rem)] bg-[#f8fafc]">
      
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center z-10">
        <div>
          <h1 className="text-xl sm:text-2xl 3xl:text-4xl font-poppins font-bold text-gray-800">
            Election Assistant
          </h1>
          <p className="text-xs sm:text-sm 3xl:text-xl text-gray-500 font-inter">
            Ask me anything about Indian elections
          </p>
        </div>
        <button 
          onClick={clearChat}
          className="p-2 sm:px-4 sm:py-2 text-red-500 hover:bg-red-50 rounded-lg flex items-center transition-colors 3xl:text-2xl"
          title="Clear Chat"
        >
          <Trash2 size={20} className="sm:mr-2 3xl:w-8 3xl:h-8" />
          <span className="hidden sm:inline font-medium">Clear</span>
        </button>
      </div>

      {/* Suggestion Chips (only if empty or just 1 default message) */}
      {messages.length <= 1 && (
        <div className="px-4 py-4 sm:px-8 mt-4 flex flex-wrap gap-2 max-w-2xl lg:max-w-4xl 3xl:max-w-7xl mx-auto w-full">
          {suggestions.map((suggestion, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSend(suggestion)}
              className="bg-white border border-blue-200 text-primary-deep text-sm sm:text-base 3xl:text-2xl px-4 py-2 rounded-full shadow-sm hover:shadow hover:bg-blue-50 transition-all font-inter"
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 w-full max-w-2xl lg:max-w-4xl 3xl:max-w-7xl mx-auto">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            isUser={msg.isUser}
            message={msg.isUser ? msg.content : msg.content}
          />
        ))}
        {isTyping && (
          <div className="mb-6">
            <LoadingDots />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4 sm:p-6 w-full mt-auto sticky bottom-0">
        <div className="max-w-2xl lg:max-w-4xl 3xl:max-w-7xl mx-auto relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.slice(0, 500))}
            onKeyDown={handleKeyDown}
            placeholder="Type your question here..."
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base 3xl:text-2xl rounded-full px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all shadow-inner pr-16"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim()}
            className={`absolute right-2 p-2 sm:p-3 rounded-full transition-all flex items-center justify-center ${
              inputValue.trim() 
                ? 'bg-primary-blue text-white shadow-md hover:bg-blue-700 hover:scale-105' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send size={20} className="ml-1 3xl:w-8 3xl:h-8" />
          </button>
        </div>
        <div className="w-full max-w-2xl lg:max-w-4xl 3xl:max-w-7xl mx-auto text-right mt-1 px-4 text-xs font-inter text-gray-400 3xl:text-lg">
          {inputValue.length}/500
        </div>
      </div>
    </div>
  );
};

export default Chat;
