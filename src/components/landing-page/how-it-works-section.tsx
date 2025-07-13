"use client";

import { motion } from "framer-motion";
import { Edit3, Share2, Eye, ShieldCheck, Pen, Network } from "lucide-react";

const features = [
  {
    icon: <Network className="w-8 h-8 text-[#3337af]" />,
    title: "Espace interactif",
    description:
      "Un espace dynamique où vos idées prennent vie. Canvas infini, édition riche, vues multiples : capturez des sujets complexes et construisez votre savoir.",
    illustration: (
      <div className="flex gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="w-12 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold text-gray-400 border border-gray-200"
          >
            {n}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: <Share2 className="w-8 h-8 text-[#3337af]" />,
    title: "Pensée connectée",
    description:
      "Des outils visuels pour transformer vos idées en formats expressifs. Cartes mentales, hiérarchies, associations : structurez et reliez vos concepts naturellement.",
    illustration: (
      <div className="w-full flex flex-col items-center">
        <div className="text-xs text-gray-400 mb-1">My note</div>
        <div className="flex flex-col items-center text-gray-300 text-xs">
          <div>Note</div>
          <div className="flex gap-2 mt-1">
            <div>Note</div>
            <div>Note</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <Pen className="w-8 h-8 text-[#3337af]" />,
    title: "Écriture facilitée",
    description:
      "Des outils pour clarifier et structurer vos textes à chaque étape, du brainstorming à la rédaction finale.",
    illustration: (
      <div className="w-full h-12 bg-gray-100 rounded-lg flex items-center px-4 border border-gray-200">
        <span className="text-gray-400">~~~~~</span>
        <Edit3 className="w-4 h-4 ml-2 text-gray-300" />
      </div>
    ),
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#3337af]" />,
    title: "Collaboration sécurisée",
    description:
      "Collaborez en temps réel avec des données protégées. Confidentialité et confiance garanties à chaque étape.",
    illustration: (
      <div className="w-full flex justify-center">
        <ShieldCheck className="w-10 h-10 text-gray-300" />
      </div>
    ),
  },
  {
    icon: <Eye className="w-8 h-8 text-[#3337af]" />,
    title: "Visualisez pour comprendre",
    description:
      "Transformez vos idées en visuels clairs : grilles, cartes, radiales. Rendez l’abstrait plus expressif et impactant.",
    illustration: (
      <div className="w-full flex justify-center">
        <Eye className="w-10 h-10 text-gray-300" />
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="comment-ca-marche"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#3337af]/20 to-[#333fea]/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-[#333fea]/15 to-[#8b5cf6]/15 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-14 bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent">
            Ce que LexiAI fait pour vous
          </span>
        </motion.h1>
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Ligne 1 */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div className="mb-4">{features[0].illustration}</div>
            <div className="flex items-center mb-2">{features[0].icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {features[0].title}
            </h3>
            <p className="text-gray-600 text-sm">{features[0].description}</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="mb-4">{features[1].illustration}</div>
            <div className="flex items-center mb-2">{features[1].icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {features[1].title}
            </h3>
            <p className="text-gray-600 text-sm">{features[1].description}</p>
          </motion.div>
        </div>
        {/* Ligne 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="mb-4">{features[2].illustration}</div>
            <div className="flex items-center mb-2">{features[2].icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {features[2].title}
            </h3>
            <p className="text-gray-600 text-sm">{features[2].description}</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="mb-4">{features[3].illustration}</div>
            <div className="flex items-center mb-2">{features[3].icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {features[3].title}
            </h3>
            <p className="text-gray-600 text-sm">{features[3].description}</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="mb-4">{features[4].illustration}</div>
            <div className="flex items-center mb-2">{features[4].icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {features[4].title}
            </h3>
            <p className="text-gray-600 text-sm">{features[4].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
