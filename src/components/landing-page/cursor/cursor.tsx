const SideCursors = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
      {/* Cameron - Left Side */}
      <div className="absolute -left-20 lg:-left-16 xl:-left-20 top-1/4">
        <svg
          width="700"
          height="300"
          viewBox="0 0 700 300"
          className="text-blue-600 w-[500px] h-[214px] lg:w-[600px] lg:h-[257px] xl:w-[700px] xl:h-[300px]"
        >
          <path
            d="M-50 150 Q100 20 350 120 Q500 220 650 150"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-right)"
          />
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

      {/* Jane - Right Side */}
      <div className="absolute -right-20 lg:-right-16 xl:-right-20 top-2/5">
        <svg
          width="700"
          height="300"
          viewBox="0 0 700 300"
          className="text-purple-600 w-[500px] h-[214px] lg:w-[600px] lg:h-[257px] xl:w-[700px] xl:h-[300px]"
        >
          <path
            d="M750 150 Q600 20 350 120 Q200 220 50 150"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-right-jane)"
          />
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
