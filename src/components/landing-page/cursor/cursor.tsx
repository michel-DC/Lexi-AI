const SideCursors = () => {
  return (
    // Conteneur principal avec visibilité responsive
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
      {/* Ligne courbe gauche */}
      <div className="absolute -left-48 sm:-left-44 md:-left-40 lg:-left-36 xl:-left-32 2xl:-left-28 3xl:-left-24 top-32 sm:top-36 md:top-40 lg:top-44 xl:top-48 2xl:top-52 3xl:top-56">
        <svg
          width="800"
          height="400"
          viewBox="0 0 800 400"
          className="w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[300px] lg:w-[700px] lg:h-[350px] xl:w-[800px] xl:h-[400px] 2xl:w-[900px] 2xl:h-[450px] 3xl:w-[1000px] 3xl:h-[500px]"
          style={{
            width: "clamp(400px, 35vw, 1200px)",
            height: "clamp(200px, 17.5vw, 600px)",
          }}
        >
          {/* Définit un marqueur de flèche plus petit pour le curseur gauche */}
          <defs>
            <marker
              id="arrowhead-left"
              markerWidth="6"
              markerHeight="5"
              refX="5.5"
              refY="2.5"
              orient="auto"
            >
              <polygon points="0 0, 6 2.5, 0 5" fill="#3b82f6" />
            </marker>
            {/* Dégradé d'opacité pour la courbe gauche */}
            <linearGradient
              id="gradient-left"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Courbe partant du bord gauche vers le haut */}
          <path
            d="M0 350 Q400 200 720 50"
            stroke="url(#gradient-left)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-left)"
          />
        </svg>
      </div>
      {/* Ligne courbe droite */}
      <div className="absolute -right-32 sm:-right-28 md:-right-24 lg:-right-20 xl:-right-16 2xl:-right-12 3xl:-right-8 top-1/2 sm:top-2/5 md:top-1/3 lg:top-1/2 xl:top-1/2 2xl:top-1/2 3xl:top-1/2">
        <svg
          width="800"
          height="450"
          viewBox="0 -50 800 450"
          className="w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[300px] lg:w-[700px] lg:h-[350px] xl:w-[800px] xl:h-[400px] 2xl:w-[900px] 2xl:h-[450px] 3xl:w-[1000px] 3xl:h-[500px]"
          style={{
            width: "clamp(400px, 35vw, 1200px)",
            height: "clamp(200px, 17.5vw, 600px)",
          }}
        >
          {/* Définit un marqueur de flèche plus petit pour le curseur droit */}
          <defs>
            <marker
              id="arrowhead-right"
              markerWidth="6"
              markerHeight="5"
              refX="5.5"
              refY="2.5"
              orient="auto"
            >
              <polygon points="0 0, 6 2.5, 0 5" fill="#8b5cf6" />
            </marker>
            {/* Dégradé d'opacité pour la courbe droite */}
            <linearGradient
              id="gradient-right"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Courbe partant du bord droit vers le haut */}
          <path
            d="M800 350 Q400 200 80 -50"
            stroke="url(#gradient-right)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-right)"
          />
        </svg>
      </div>
    </div>
  );
};

export default SideCursors;
