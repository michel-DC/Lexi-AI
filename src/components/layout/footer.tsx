"use client";

import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#181a23] to-[#23243a] text-white rounded-t-3xl shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        {/* Bloc principal centré */}
        <div className="text-left sm:text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Nous contacter
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-2">
            Vous avez une question, un projet ou autre ?<br />
            Et vous souhaitez me contacter ?
          </p>
          <div className="mt-6 flex sm:justify-center">
            <a
              href="mailto:contact@lexiai.fr"
              className="bg-white text-[#23243a] font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              Ça se passe juste ici
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10 my-8" />

        {/* Bas de page : liens légaux, réseaux, copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          {/* Liens légaux */}
          <div className="flex gap-6 text-gray-400 order-2 sm:order-1">
            <a href="#" className="hover:text-white transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Plan du site
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 order-3 sm:order-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="hover:text-[#8b5cf6] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="hover:text-[#8b5cf6] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="hover:text-[#8b5cf6] transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.gmail.com/"
              target="_blank"
              rel="noopener"
              aria-label="Mail"
              className="hover:text-[#8b5cf6] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-xs">
          Design & Dev With <span className="text-red-400">♥</span> by Michel -
          2025
        </div>
      </div>
    </footer>
  );
}
