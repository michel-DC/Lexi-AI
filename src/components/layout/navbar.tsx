import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, CircleChevronRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function Navbar() {
  // État local pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gestionnaire pour basculer l'état du menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-12 py-2 sm:py-3 bg-white-500 ">
      <div className="border border-gray-300 rounded-full max-w-7xl w-full mx-auto px-2 sm:px-6 lg:px-12 py-2 flex items-center justify-between gap-x-2 sm:gap-x-6 lg:gap-x-10 shadow-sm relative z-50 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <a href="/">
            <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              LEXI&nbsp;AI
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-4 lg:gap-x-10">
          <a
            href="#fonctionnalites"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-sm lg:text-base"
          >
            Fonctionnalités
          </a>
          <a
            href="#comment-ca-marche"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-sm lg:text-base"
          >
            Comment ça marche
          </a>
          <a
            href="#temoignages"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-sm lg:text-base"
          >
            Témoignages
          </a>
          <a
            href="#tarifs"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-sm lg:text-base"
          >
            Tarifs
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-sm lg:text-base"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <Button
            href="/"
            className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl"
          >
            <span>Essayer Gratuitement</span>
            <CircleChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-4 sm:px-6 md:hidden w-full z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 sm:space-y-4">
              <a
                href="#fonctionnalites"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-2 font-medium text-base"
                onClick={toggleMenu}
              >
                Fonctionnalités
              </a>
              <a
                href="#comment-ca-marche"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-2 font-medium text-base"
                onClick={toggleMenu}
              >
                Comment ça marche
              </a>
              <a
                href="#temoignages"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-2 font-medium text-base"
                onClick={toggleMenu}
              >
                Témoignages
              </a>
              <a
                href="#tarifs"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-2 font-medium text-base"
                onClick={toggleMenu}
              >
                Tarifs
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-2 font-medium text-base"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button
                href="/"
                className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl"
              >
                <span>Essayer Gratuitement</span>
                <CircleChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
