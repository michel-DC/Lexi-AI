"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "LexiAI est-il vraiment gratuit à l'inscription ?",
    answer:
      "Oui, l'inscription est 100% gratuite et sans carte bancaire. Vous bénéficiez d'un essai offert pour découvrir toutes les fonctionnalités.",
  },
  {
    question: "Puis-je utiliser LexiAI pour des contenus professionnels ?",
    answer:
      "Absolument ! LexiAI est conçu pour les créateurs, freelances, entreprises et agences. Les textes générés sont uniques et adaptés à un usage pro.",
  },
  {
    question: "Mes données sont-elles confidentielles ?",
    answer:
      "Oui, la confidentialité est une priorité. Vos données et contenus ne sont jamais partagés ni réutilisés.",
  },
  {
    question: "Combien de langues sont supportées ?",
    answer:
      "LexiAI prend en charge plus de 25 langues, dont le français, l'anglais, l'espagnol, l'allemand, l'italien, et bien d'autres.",
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer:
      "Oui, vous pouvez résilier ou modifier votre abonnement en un clic, sans engagement ni frais cachés.",
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Notre équipe est disponible 24/7 par email et chat pour répondre à toutes vos questions ou besoins d'accompagnement.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (idx: number) => setOpen(open === idx ? null : idx);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#3337af] to-[#333fea] rounded-full opacity-10 blur-xl sm:blur-2xl z-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <div className="relative max-w-2xl sm:max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Foire aux questions
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Toutes les réponses à vos questions sur LexiAI, l'abonnement, la
          sécurité et l'utilisation.
        </motion.p>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl shadow border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none group"
                onClick={() => toggle(idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#3337af] transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: open === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-3 sm:ml-4 flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-xs sm:text-sm md:text-base overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
