// src/components/ChatBubble.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ChatBubble = ({ message, isUser }) => {
  if (isUser) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex justify-end mb-4"
      >
        <div className="bg-gradient-to-r from-primary-blue to-indigo-500 text-white rounded-2xl rounded-tr-none px-5 py-3 max-w-[85%] lg:max-w-[70%] shadow-md">
          <p className="font-inter text-sm sm:text-base lg:text-lg 3xl:text-2xl 4xl:text-4xl">{message}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex justify-start mb-6"
    >
      <div className="bg-white text-gray-800 rounded-2xl rounded-tl-none p-5 sm:p-6 max-w-[90%] lg:max-w-[80%] shadow-lg border border-gray-100">
        
        {message.explanation && (
          <div className="mb-4">
            <h4 className="flex items-center font-poppins font-semibold text-primary-deep mb-2 text-sm sm:text-base 3xl:text-2xl 4xl:text-4xl">
              <span className="mr-2">📌</span> Explanation
            </h4>
            <p className="font-inter leading-relaxed text-sm sm:text-base 3xl:text-xl 4xl:text-3xl text-gray-700">
              {message.explanation}
            </p>
          </div>
        )}

        {message.steps && message.steps.length > 0 && (
          <div className="mb-4">
            <h4 className="flex items-center font-poppins font-semibold text-primary-deep mb-2 text-sm sm:text-base 3xl:text-2xl 4xl:text-4xl">
              <span className="mr-2">📋</span> Steps
            </h4>
            <ul className="list-none space-y-2">
              {message.steps.map((step, idx) => (
                <li key={idx} className="font-inter text-sm sm:text-base 3xl:text-xl 4xl:text-3xl bg-blue-50/50 p-2 rounded-md border-l-4 border-primary-blue">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}

        {message.timeline && (
          <div className="mb-4">
            <h4 className="flex items-center font-poppins font-semibold text-primary-deep mb-2 text-sm sm:text-base 3xl:text-2xl 4xl:text-4xl">
              <span className="mr-2">📅</span> Timeline
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                <span className="block font-semibold text-green-700 text-xs sm:text-sm 3xl:text-lg 4xl:text-2xl">Before</span>
                <span className="text-sm 3xl:text-lg 4xl:text-xl">{message.timeline.before}</span>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                <span className="block font-semibold text-yellow-700 text-xs sm:text-sm 3xl:text-lg 4xl:text-2xl">During</span>
                <span className="text-sm 3xl:text-lg 4xl:text-xl">{message.timeline.during}</span>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                <span className="block font-semibold text-purple-700 text-xs sm:text-sm 3xl:text-lg 4xl:text-2xl">After</span>
                <span className="text-sm 3xl:text-lg 4xl:text-xl">{message.timeline.after}</span>
              </div>
            </div>
          </div>
        )}

        {message.keyNotes && message.keyNotes.length > 0 && (
          <div className="mb-4">
            <h4 className="flex items-center font-poppins font-semibold text-primary-deep mb-2 text-sm sm:text-base 3xl:text-2xl 4xl:text-4xl">
              <span className="mr-2">🔑</span> Key Notes
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              {message.keyNotes.map((note, idx) => (
                <li key={idx} className="font-inter text-sm sm:text-base 3xl:text-xl 4xl:text-3xl text-gray-700">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        {message.followUp && (
          <div className="mt-5 border-t border-gray-100 pt-4">
            <p className="font-inter italic font-medium text-primary-blue text-sm sm:text-base 3xl:text-xl 4xl:text-3xl flex items-center">
              <span className="mr-2">❓</span> {message.followUp}
            </p>
          </div>
        )}
        
      </div>
    </motion.div>
  );
};

export default ChatBubble;
