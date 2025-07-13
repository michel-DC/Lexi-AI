"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Shield,
  Palette,
  Globe,
  BarChart3,
  Sparkles,
  CheckCircle,
  Target,
  Clock,
  Users,
} from "lucide-react";

// Fonctionnalités principales avec illustrations
const features = [
  {
    icon: Brain,
    title: "IA Contextuelle",
    description:
      "Notre IA comprend votre contexte et adapte le contenu à votre style et votre audience.",
    color: "from-[#3337af] to-[#333fea]",
    illustration: (
      <div className="w-full h-12 bg-gradient-to-r from-[#3337af]/20 to-[#333fea]/20 rounded-lg flex items-center justify-center">
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-[#3337af] rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: "Génération Ultra-Rapide",
    description:
      "Créez du contenu de qualité en quelques secondes, pas en heures.",
    color: "from-[#333fea] to-[#8b5cf6]",
    illustration: (
      <div className="w-full h-12 bg-gradient-to-r from-[#333fea]/20 to-[#8b5cf6]/20 rounded-lg flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#333fea] rounded-full" />
          <div className="w-8 h-1 bg-[#333fea] rounded-full" />
          <div className="w-3 h-3 bg-[#8b5cf6] rounded-full" />
        </div>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Contenu Original",
    description:
      "Chaque génération est unique et passe tous les tests de plagiat.",
    color: "from-[#8b5cf6] to-[#3337af]",
    illustration: (
      <div className="w-full h-12 bg-gradient-to-r from-[#8b5cf6]/20 to-[#3337af]/20 rounded-lg flex items-center justify-center">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#8b5cf6]" />
          <span className="text-xs text-gray-600">100% Original</span>
        </div>
      </div>
    ),
  },
  {
    icon: Palette,
    title: "Personnalisation Avancée",
    description: "Adaptez le ton, le style et la longueur selon vos besoins.",
    color: "from-[#3337af] to-[#333fea]",
    illustration: (
      <div className="w-full h-12 bg-gradient-to-r from-[#3337af]/20 to-[#333fea]/20 rounded-lg flex items-center justify-center">
        <div className="flex gap-1">
          {["#3337af", "#333fea", "#8b5cf6"].map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Globe,
    title: "Support Multilingue",
    description: "Générez du contenu dans plus de 25 langues différentes.",
    color: "from-[#333fea] to-[#8b5cf6]",
    illustration: (
      <div className="w-full h-12 bg-gradient-to-r from-[#333fea]/20 to-[#8b5cf6]/20 rounded-lg flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#333fea] rounded-full" />
          <span className="text-xs text-gray-600">25+ langues</span>
          <div className="w-2 h-2 bg-[#8b5cf6] rounded-full" />
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Analytics Intelligents",
    description:
      "Suivez les performances de votre contenu avec des insights détaillés.",
    color: "from-[#8b5cf6] to-[#3337af]",
    illustration: (
      <div className="w-full h-12 bg-gradient-to-r from-[#8b5cf6]/20 to-[#3337af]/20 rounded-lg flex items-center justify-center">
        <div className="flex items-end gap-1 h-6">
          {[2, 4, 3, 5, 4].map((height, i) => (
            <div
              key={i}
              className="w-1 bg-[#8b5cf6] rounded-t"
              style={{ height: `${height * 3}px` }}
            />
          ))}
        </div>
      </div>
    ),
  },
];

// Statistiques clés
const stats = [
  { icon: Target, value: "80%", label: "Temps gagné" },
  { icon: Clock, value: "< 30s", label: "Génération" },
  { icon: Users, value: "5k+", label: "Utilisateurs" },
];

export default function FeaturesSection() {
  return (
    <section
      id="fonctionnalites"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Éléments flottants comme dans hero */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête avec badge flottant comme hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#3337af] to-[#333fea] text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Fonctionnalités Avancées</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent">
              Tout ce dont vous avez besoin
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les outils qui révolutionnent la création de contenu et
            transforment votre productivité.
          </p>
        </motion.div>

        {/* Grille de fonctionnalités comme how-it-works */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-start hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
            >
              <div className="mb-4 w-full">{feature.illustration}</div>
              <div className="flex items-center mb-2">
                <feature.icon className="w-8 h-8 text-[#3337af]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section statistiques */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#3337af] to-[#333fea] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
