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
} from "lucide-react";

// Données des fonctionnalités principales
const mainFeatures = [
  {
    icon: Brain,
    title: "IA Contextuelle",
    description:
      "Notre IA comprend votre contexte et adapte le contenu à votre style et votre audience.",
    color: "from-[#3337af] to-[#333fea]",
    delay: 0.1,
  },
  {
    icon: Zap,
    title: "Génération Ultra-Rapide",
    description:
      "Créez du contenu de qualité en quelques secondes, pas en heures.",
    color: "from-[#333fea] to-[#8b5cf6]",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Contenu Original",
    description:
      "Chaque génération est unique et passe tous les tests de plagiat.",
    color: "from-[#8b5cf6] to-[#3337af]",
    delay: 0.3,
  },
];

// Données des fonctionnalités secondaires
const secondaryFeatures = [
  {
    icon: Palette,
    title: "Personnalisation Avancée",
    description: "Adaptez le ton, le style et la longueur selon vos besoins.",
  },
  {
    icon: Globe,
    title: "Support Multilingue",
    description: "Générez du contenu dans plus de 25 langues différentes.",
  },
  {
    icon: BarChart3,
    title: "Analytics Intelligents",
    description:
      "Suivez les performances de votre contenu avec des insights détaillés.",
  },
];

// Données des avantages
const benefits = [
  "Gain de temps de 80% sur la création de contenu",
  "Qualité professionnelle garantie",
  "Pas de limite de génération",
  "Support client 24/7",
  "Intégration API disponible",
  "Mise à jour gratuite des modèles",
];

export default function FeaturesSection() {
  return (
    <section
      id="fonctionnalites"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
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

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent">
              Tout ce dont vous avez besoin
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les outils qui révolutionnent la création de contenu et
            transforment votre productivité.
          </p>
        </motion.div>

        {/* Grille principale des fonctionnalités */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3337af] to-[#333fea] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#3337af] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section avec layout asymétrique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Colonne gauche - Fonctionnalités secondaires */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Et bien plus encore...
            </h3>

            {secondaryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#3337af] to-[#333fea] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#3337af] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Colonne droite - Liste des avantages */}
          <motion.div
            className="bg-gradient-to-br from-[#3337af] to-[#333fea] rounded-2xl p-8 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Pourquoi choisir LexiAI ?
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre productivité ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez des milliers de créateurs qui utilisent déjà LexiAI pour
              créer du contenu exceptionnel.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#3337af] to-[#333fea] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commencer Maintenant
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
