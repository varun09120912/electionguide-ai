// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, BrainCircuit, UserCheck } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-inter">
      
      {/* Hero Section */}
      <section className="relative animated-gradient-bg py-20 sm:py-28 lg:py-40 4xl:py-60 overflow-hidden flex flex-col items-center justify-center text-center px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-center"
        >
          <div className="text-6xl sm:text-7xl lg:text-8xl 4xl:text-[10rem] floating mb-6 shadow-2xl rounded-full bg-white/10 backdrop-blur-md p-6 sm:p-8">
            🗳️
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-9xl font-poppins font-extrabold text-white tracking-tight mb-4 drop-shadow-xl">
            ElectionGuide AI
          </h1>
          
          <h2 className="text-xl sm:text-2xl 3xl:text-5xl font-poppins text-yellow-300 font-medium mb-10 drop-shadow-md">
            Samajho Election, Banao Fark 🇮🇳
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <Link to="/chat">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-deep font-bold rounded-full shadow-xl hover:shadow-2xl transition-all 3xl:text-3xl 4xl:text-5xl 4xl:px-12 4xl:py-6 border-2 border-white"
              >
                Start Learning 🚀
              </motion.button>
            </Link>
            <Link to="/quiz">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-xl hover:bg-white/10 transition-all 3xl:text-3xl 4xl:text-5xl 4xl:px-12 4xl:py-6"
              >
                Take a Quiz 🧠
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <svg className="absolute bottom-0 w-full h-24 sm:h-32 lg:h-48 4xl:h-64 text-slate-50 fill-current" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,234.7C672,245,768,235,864,197.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl 4xl:max-w-[120rem] mx-auto w-full z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-7xl font-poppins font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">
            Why ElectionGuide AI?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 4xl:gap-16">
          
          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 3xl:w-24 3xl:h-24">
              <MessageSquare size={32} className="3xl:w-12 3xl:h-12" />
            </div>
            <h3 className="text-xl 3xl:text-3xl font-bold font-poppins text-gray-800 mb-3">AI Chat</h3>
            <p className="text-gray-600 3xl:text-xl font-inter">Ask any question about the Indian election process and get smart, neutral answers instantly.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-6 3xl:w-24 3xl:h-24">
              <Calendar size={32} className="3xl:w-12 3xl:h-12" />
            </div>
            <h3 className="text-xl 3xl:text-3xl font-bold font-poppins text-gray-800 mb-3">Timeline</h3>
            <p className="text-gray-600 3xl:text-xl font-inter">Explore the entire election journey from voter registration to the final declaration of results.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6 3xl:w-24 3xl:h-24">
              <BrainCircuit size={32} className="3xl:w-12 3xl:h-12" />
            </div>
            <h3 className="text-xl 3xl:text-3xl font-bold font-poppins text-gray-800 mb-3">Quiz</h3>
            <p className="text-gray-600 3xl:text-xl font-inter">Test your knowledge about the world's largest democracy with our interactive MCQ test.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6 3xl:w-24 3xl:h-24">
              <UserCheck size={32} className="3xl:w-12 3xl:h-12" />
            </div>
            <h3 className="text-xl 3xl:text-3xl font-bold font-poppins text-gray-800 mb-3">Profile</h3>
            <p className="text-gray-600 3xl:text-xl font-inter">Check your voting eligibility and discover interesting election statistics about your home state.</p>
          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-900 to-primary-deep text-white py-16 sm:py-24 mt-auto">
        <div className="max-w-7xl 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-blue-700">
            <div className="p-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl 3xl:text-8xl font-bold font-poppins text-yellow-400 mb-2">900M+</div>
              <div className="text-lg 3xl:text-3xl font-inter text-blue-200 uppercase tracking-wider font-semibold">Registered Voters</div>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl 3xl:text-8xl font-bold font-poppins text-green-400 mb-2">28 + 8</div>
              <div className="text-lg 3xl:text-3xl font-inter text-blue-200 uppercase tracking-wider font-semibold">States & UTs</div>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl 3xl:text-8xl font-bold font-poppins text-orange-400 mb-2">4000+</div>
              <div className="text-lg 3xl:text-3xl font-inter text-blue-200 uppercase tracking-wider font-semibold">Constituencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1b42] text-center py-8">
        <p className="text-gray-400 font-inter 3xl:text-2xl mb-2">Powered by Google Gemini | Built for India 🇮🇳</p>
        <p className="text-gray-500 font-poppins text-sm 3xl:text-xl font-semibold tracking-wide">
          <span className="text-blue-400">#BuildwithAI</span> <span className="text-orange-400">#PromptWarsVirtual</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
