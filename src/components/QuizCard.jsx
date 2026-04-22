// src/components/QuizCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const QuizCard = ({ questionData, selectedOption, onOptionSelect, isAnswered }) => {
  const { question, options, answer, explanation } = questionData;

  const handleOptionClick = (opt) => {
    if (!isAnswered) {
      onOptionSelect(opt);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 3xl:p-12 w-full max-w-3xl mx-auto border border-white/40"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl 3xl:text-5xl font-poppins font-bold text-gray-800 mb-6">
        {question}
      </h2>

      <div className="space-y-3 3xl:space-y-6">
        {options.map((opt, idx) => {
          let optionClass = "bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300";
          
          if (isAnswered) {
            if (opt === answer) {
              optionClass = "bg-green-100 border-green-500 text-green-800 font-semibold";
            } else if (opt === selectedOption) {
              optionClass = "bg-red-100 border-red-500 text-red-800";
            } else {
              optionClass = "bg-gray-50 border-gray-200 text-gray-400 opacity-60";
            }
          }

          return (
            <motion.button
              key={idx}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              whileTap={!isAnswered ? { scale: 0.99 } : {}}
              onClick={() => handleOptionClick(opt)}
              disabled={isAnswered}
              className={`w-full text-left p-4 sm:p-5 3xl:p-8 rounded-xl border-2 transition-all duration-300 font-inter 3xl:text-3xl ${optionClass}`}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>

      {isAnswered && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-xl"
        >
          <p className="text-sm sm:text-base 3xl:text-2xl font-inter text-blue-900 leading-relaxed">
            <span className="font-bold mr-2">📌 Explanation:</span>
            {explanation}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizCard;
