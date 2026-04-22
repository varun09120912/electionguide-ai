// src/pages/Quiz.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/quizData';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { RotateCcw, Trophy } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const [highScore, setHighScore] = useLocalStorage('election-quiz-highscore', 0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setIsAnswered(false);
    setSelectedOption(null);

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)] bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 flex flex-col justify-center items-center">
      
      {!showScore ? (
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="font-poppins font-bold text-gray-700 3xl:text-2xl">
                Question {currentQuestion + 1} / {quizData.length}
              </span>
              <span className="font-inter text-sm 3xl:text-xl text-primary-deep bg-blue-100 px-3 py-1 rounded-full font-semibold">
                High Score: {highScore}
              </span>
            </div>
            <ProgressBar current={currentQuestion + 1} total={quizData.length} />
          </div>

          <AnimatePresence mode="wait">
            <QuizCard
              key={currentQuestion}
              questionData={quizData[currentQuestion]}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
              isAnswered={isAnswered}
            />
          </AnimatePresence>

          {isAnswered && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-primary-blue text-white px-10 py-4 rounded-full font-bold text-lg 3xl:text-3xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
              onClick={handleNextQuestion}
            >
              {currentQuestion === quizData.length - 1 ? 'See Results' : 'Next Question ➡️'}
            </motion.button>
          )}

        </div>
      ) : (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 3xl:p-20 text-center max-w-2xl w-full border-4 border-yellow-400"
        >
          <div className="w-24 h-24 3xl:w-40 3xl:h-40 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
            <Trophy size={48} className="3xl:w-20 3xl:h-20" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl 3xl:text-6xl font-poppins font-bold text-gray-800 mb-4">
            Quiz Completed!
          </h2>
          
          <p className="text-xl 3xl:text-3xl font-inter text-gray-600 mb-8">
            You scored <span className="text-primary-blue font-bold text-3xl 3xl:text-5xl">{score}</span> out of {quizData.length}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={restartQuiz}
              className="px-8 py-3 bg-gradient-to-r from-primary-blue to-indigo-600 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 3xl:text-2xl"
            >
              <RotateCcw size={20} /> Retake Quiz
            </button>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Quiz;
