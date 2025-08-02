"use client";

import { motion } from "framer-motion";
import { CircleChevronRight, Sparkles, Zap } from "lucide-react";
import SideCursors from "@/components/landing-page/animations/cursor";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white-500 mt-2 sm:mt-4 md:mt-6 lg:mt-8 px-2 sm:px-0">
      <SideCursors />

      {/* Section principale responsive */}
      <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16 pb-4 sm:pb-6 md:pb-8 lg:pb-10 text-center">
        {/* Floating Badge - IA Avancée */}
        <motion.div
          className="absolute top-2 sm:top-3 md:top-4 lg:top-6 xl:top-8 left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8 bg-gradient-to-r from-[#3337af] to-[#333fea] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hidden sm:flex items-center space-x-1 sm:space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
          <span>IA Avancée</span>
        </motion.div>

        {/* Floating Badge - Rapide */}
        <motion.div
          className="absolute top-12 sm:top-14 md:top-16 lg:top-20 xl:top-32 right-2 sm:right-3 md:right-4 lg:right-6 xl:right-8 bg-gradient-to-r from-[#333fea] to-[#3337af] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hidden sm:flex items-center space-x-1 sm:space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
          <span>Ultra Rapide</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="mt-12 sm:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative px-2 sm:px-0 max-w-xl sm:max-w-2xl mx-auto"
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
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
          className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-3 md:space-y-0 md:space-x-3 lg:space-x-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-3 sm:px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button href="/">
            <span>Commencer Gratuitement</span>
            <CircleChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </Button>
        </motion.div>

        {/* Indicateurs de confiance */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm text-gray-500 px-3 sm:px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
            <div className="flex space-x-0">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tbWV8ZW58MHx8MHx8fDA%3D"
                alt="Homme Unsplash"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 2"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tbWV8ZW58MHx8MHx8fDA%3D"
                alt="Utilisateur 3"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 4"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 2"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tbWV8ZW58MHx8MHx8fDA%3D"
                alt="Utilisateur 3"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=64&h=64&facepad=2"
                alt="Utilisateur 4"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-center sm:text-left">
              Rejoint par plus de <b>50&nbsp;000</b> créateurs de contenu
            </span>
          </div>
        </motion.div>
      </div>

      {/* Aperçu interface produit */}
      <motion.div
        className="relative max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-violet-100 to-transparent rounded-t-xl sm:rounded-t-2xl"></div>
          <div className="bg-white rounded-t-xl sm:rounded-t-2xl shadow-xl sm:shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-200">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 sm:p-4 md:p-6 min-h-[300px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[580px] xl:min-h-[650px] flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#3337af] to-[#333fea] rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                  Interface LexiAI
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
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
