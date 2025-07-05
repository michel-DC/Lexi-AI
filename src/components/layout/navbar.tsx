import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative z-50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-[#3337af] to-[#333fea] rounded-lg flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <a href="/">
          <span className="text-xl font-bold text-gray-900">LexiAI</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#fonctionnalites"
          className="text-gray-600 hover:text-[#3337af] transition-colors"
        >
          Fonctionnalités
        </a>
        <a
          href="#comment-ca-marche"
          className="text-gray-600 hover:text-[#3337af] transition-colors"
        >
          Comment ça marche
        </a>
        <a
          href="#temoignages"
          className="text-gray-600 hover:text-[#3337af] transition-colors"
        >
          Témoignages
        </a>
        <a
          href="#tarifs"
          className="text-gray-600 hover:text-[#3337af] transition-colors"
        >
          Tarifs
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-[#3337af] transition-colors"
        >
          Contact
        </a>
      </div>

      <div className="hidden md:block">
        <motion.button
          className="bg-gradient-to-r from-[#3337af] to-[#333fea] hover:from-[#2d2f9e] hover:to-[#2d36d9] text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Essayer Gratuitement</span>
        </motion.button>
      </div>

      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#fonctionnalites"
              className="text-gray-600 hover:text-[#3337af] transition-colors py-2"
              onClick={toggleMenu}
            >
              Fonctionnalités
            </a>
            <a
              href="#comment-ca-marche"
              className="text-gray-600 hover:text-[#3337af] transition-colors py-2"
              onClick={toggleMenu}
            >
              Comment ça marche
            </a>
            <a
              href="#temoignages"
              className="text-gray-600 hover:text-[#3337af] transition-colors py-2"
              onClick={toggleMenu}
            >
              Témoignages
            </a>
            <a
              href="#tarifs"
              className="text-gray-600 hover:text-[#3337af] transition-colors py-2"
              onClick={toggleMenu}
            >
              Tarifs
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#3337af] transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <motion.button
              className="bg-gradient-to-r from-[#3337af] to-[#333fea] hover:from-[#2d2f9e] hover:to-[#2d36d9] text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-lg mt-2"
              whileTap={{ scale: 0.95 }}
            >
              <span>Essayer Gratuitement</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
