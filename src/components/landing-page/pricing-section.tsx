"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essai gratuit",
    price: "0€",
    period: "/mois",
    features: [
      "10 générations offertes",
      "Accès à toutes les fonctionnalités",
      "Support par email",
      "Aucune carte requise",
    ],
    highlight: true,
    cta: "Commencer gratuitement",
  },
  {
    name: "Pro",
    price: "19€",
    period: "/mois",
    features: [
      "Générations illimitées",
      "Personnalisation avancée",
      "Support prioritaire",
      "Mises à jour incluses",
    ],
    highlight: false,
    cta: "Choisir Pro",
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "",
    features: [
      "Solutions sur-mesure",
      "Gestion d'équipe & droits",
      "SLA & accompagnement dédié",
      "Intégration API avancée",
    ],
    highlight: false,
    cta: "Contactez-nous",
  },
];

export default function PricingSection() {
  return (
    <section
      id="tarifs"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Décorations flottantes */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#333fea] to-[#8b5cf6] rounded-full opacity-20 blur-3xl z-0"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-br from-[#3337af] to-[#333fea] rounded-full opacity-10 blur-2xl z-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent">
            Des tarifs simples et transparents
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Choisissez le plan qui correspond à vos besoins. Sans engagement, sans
          surprise.
        </motion.p>

        {/* Grille des plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl shadow-lg border border-gray-100 bg-white px-8 py-10 items-center transition-all duration-300 ${
                plan.highlight ? "ring-2 ring-[#333fea] scale-105 z-10" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3337af] to-[#333fea] text-white text-xs font-semibold px-4 py-1 rounded-full shadow mb-4">
                  Populaire
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {plan.name}
              </h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-[#3337af]">
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-1 mb-1">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3 w-full">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#3337af] to-[#333fea] text-white hover:scale-105"
                    : "bg-gray-100 text-[#3337af] hover:bg-gray-200"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
