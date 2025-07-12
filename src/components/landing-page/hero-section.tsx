"use client";

import { motion } from "framer-motion";
import { ChevronRight, CircleChevronRight, Sparkles, Zap } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import SideCursors from "@/components/landing-page/cursor/cursor";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      {/* Navigation Header */}
      <Navbar />

      <SideCursors />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-20 pt-8 sm:pt-12 lg:pt-16 pb-8 text-center">
        {/* Floating Badge - IA Avancée */}
        <motion.div
          className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 bg-gradient-to-r from-[#3337af] to-[#333fea] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hidden sm:flex items-center space-x-1 sm:space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>IA Avancée</span>
        </motion.div>

        {/* Floating Badge - Rapide */}
        <motion.div
          className="absolute top-16 right-4 sm:top-20 sm:right-6 lg:top-32 lg:right-8 bg-gradient-to-r from-[#333fea] to-[#3337af] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hidden sm:flex items-center space-x-1 sm:space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Ultra Rapide</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 relative px-2 sm:px-0 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent relative">
            Écrivez, créez
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 bg-clip-text text-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                delay: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            />
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#3337af] to-[#333fea] bg-clip-text text-transparent relative">
            Avec l'IA
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 bg-clip-text text-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            />
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#333fea] to-[#1a1a2e] bg-clip-text text-transparent relative">
            Brillamment.
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 bg-clip-text text-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                delay: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          LexiAI révolutionne votre façon d'écrire. Générez du contenu de
          qualité professionnelle, optimisé et adapté à votre ton en quelques
          secondes grâce à notre IA de pointe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="w-full sm:w-auto bg-gradient-to-r from-[#3337af] to-[#333fea] hover:from-[#2d2f9e] hover:to-[#2d36d9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-200"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(51, 55, 175, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Commencer Gratuitement</span>
            <CircleChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                M
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                S
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <span className="text-center sm:text-left">
              Rejoint par plus de 50 000 créateurs de contenu
            </span>
          </div>
        </motion.div>
      </div>

      {/* Product Interface Preview */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-violet-100 to-transparent rounded-t-2xl"></div>
          <div className="bg-white rounded-t-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#3337af] to-[#333fea] rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  Interface LexiAI
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-md mx-auto">
                  Une interface intuitive et moderne pour créer du contenu
                  exceptionnel avec l'aide de l'intelligence artificielle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
