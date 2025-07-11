const SideCursors = () => {
  return (
    // Conteneur principal avec visibilité responsive
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
      {/* Cameron - Côté gauche */}
      <div className="absolute -left-8 md:-left-12 lg:-left-16 xl:-left-20 top-1/3 md:top-1/4">
        <svg
          width="700"
          height="300"
          viewBox="0 0 700 300"
          className="text-blue-600 w-[300px] h-[129px] md:w-[400px] md:h-[171px] lg:w-[500px] lg:h-[214px] xl:w-[600px] xl:h-[257px] 2xl:w-[700px] 2xl:h-[300px]"
        >
          {/* Courbe SVG pour Cameron */}
          <path
            d="M-50 150 Q100 20 350 120 Q500 220 650 150"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-right)"
          />
          {/* Définition de la flèche */}
          <defs>
            <marker
              id="arrowhead-right"
              markerWidth="10"
              markerHeight="8"
              refX="9"
              refY="4"
              orient="auto"
            >
              <polygon points="0 0, 10 4, 0 8" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Jane - Côté droit */}
      <div className="absolute -right-8 md:-right-12 lg:-right-16 xl:-right-20 top-1/2 md:top-2/5">
        <svg
          width="700"
          height="300"
          viewBox="0 0 700 300"
          className="text-purple-600 w-[300px] h-[129px] md:w-[400px] md:h-[171px] lg:w-[500px] lg:h-[214px] xl:w-[600px] xl:h-[257px] 2xl:w-[700px] 2xl:h-[300px]"
        >
          {/* Courbe SVG pour Jane */}
          <path
            d="M750 150 Q600 20 350 120 Q200 220 50 150"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-right-jane)"
          />
          {/* Définition de la flèche */}
          <defs>
            <marker
              id="arrowhead-right-jane"
              markerWidth="10"
              markerHeight="8"
              refX="9"
              refY="4"
              orient="auto"
            >
              <polygon points="0 0, 10 4, 0 8" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SideCursors;
