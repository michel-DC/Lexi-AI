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
    <nav className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-1 sm:py-2 md:py-3 bg-white-500 ">
      <div className="border border-gray-300 rounded-full max-w-6xl xl:max-w-7xl w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-1 sm:py-2 flex items-center justify-between gap-x-1 sm:gap-x-3 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 shadow-sm relative z-50 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <a href="/">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
              LEXI&nbsp;AI
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-3 lg:gap-x-6 xl:gap-x-10">
          <a
            href="#features"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-xs lg:text-sm xl:text-base"
          >
            Fonctionnalités
          </a>
          <a
            href="#for-you"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-xs lg:text-sm xl:text-base"
          >
            Pour vous
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-xs lg:text-sm xl:text-base"
          >
            Tarifs
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-xs lg:text-sm xl:text-base"
          >
            FAQ
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-[#3337af] transition-colors font-medium text-xs lg:text-sm xl:text-base"
          >
            Témoignages
          </a>
        </div>

        <div className="hidden md:block">
          <Button
            href="/"
            className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm rounded-xl"
          >
            <span>Essayer Gratuitement</span>
            <CircleChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
          </Button>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>

        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-3 sm:py-4 px-3 sm:px-4 md:hidden w-full z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-4">
              <a
                href="#fonctionnalites"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-1.5 sm:py-2 font-medium text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Fonctionnalités
              </a>
              <a
                href="#comment-ca-marche"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-1.5 sm:py-2 font-medium text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Comment ça marche
              </a>
              <a
                href="#temoignages"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-1.5 sm:py-2 font-medium text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Témoignages
              </a>
              <a
                href="#tarifs"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-1.5 sm:py-2 font-medium text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Tarifs
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#3337af] transition-colors py-1.5 sm:py-2 font-medium text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button
                href="/"
                className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm rounded-xl"
              >
                <span>Essayer Gratuitement</span>
                <CircleChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
