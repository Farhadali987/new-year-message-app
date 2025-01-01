"use client"
import Head from 'next/head'; 
import { useState } from 'react'; 
import { motion } from 'framer-motion'; 
import Confetti from 'react-confetti'; // Importing the Confetti component

export default function NewYearPage() {
  const [userName, setUserName] = useState<string>(''); // State with TypeScript type
  const [message, setMessage] = useState<string>(''); // State with TypeScript type
  const [showConfetti, setShowConfetti] = useState<boolean>(false); // State with TypeScript type

  // Function to generate random colors
  const getRandomColor = (): string => {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#f7ff33', '#ff33f6'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Handle button click and show message
  const handleCelebrate = (): void => {
    if (userName.trim()) {
      setMessage(`Happy New Year 2025, ${userName}! May your year be filled with success, joy, and endless blessings! 🎉✨`);
      setShowConfetti(true); 
    } else {
      setMessage(`Happy New Year 2025, Farhad Gul! May your year be filled with success, joy, and endless blessings! 🎉✨`);
      setShowConfetti(true); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white px-4 sm:px-8">
      <Head>
        <title>Happy New Year 2025</title> 
      </Head>

      {/* Show confetti when the button is clicked */}
      {showConfetti && <Confetti />}

      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ color: getRandomColor() }} // Random color for the heading
      >
        🎉 Happy New Year 2025 🎉
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Enter your name to receive a heartfelt New Year blessing!
      </motion.p>

      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="px-6 py-3 rounded-xl text-black mb-4 w-full sm:w-96 shadow-xl focus:outline-none"
      />

      <motion.button
        className="px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all w-full sm:w-auto"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCelebrate}
      >
        Celebrate Now
      </motion.button>

      {message && (
        <motion.p
          className="mt-6 text-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ color: getRandomColor() }} // Random color for the message
        >
          {message}
        </motion.p>
      )}

      <footer className="absolute bottom-4 git init
text-gray-200 text-sm">
        Created by Farhad Gul
      </footer>
    </div>
  );
}
