"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  avatar: string;
  content: string;
  rating: number;
}

// Liste d'avis variés avec ratings différents
const testimonials: Testimonial[] = [
  {
    name: "Jacob Jones",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "LexiAI m'a permis de gagner un temps fou sur mes articles de blog. L'interface est super intuitive !",
    rating: 5,
  },
  {
    name: "Devon Lane",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "J'ai testé beaucoup d'outils IA, mais LexiAI est le seul qui comprend vraiment mon style.",
    rating: 4,
  },
  {
    name: "Guy Hawkins",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    content:
      "La génération de contenu est rapide et la qualité toujours au rendez-vous. Je recommande !",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "L'équipe support est très réactive et l'outil évolue sans cesse. Un vrai plus pour mon activité.",
    rating: 3,
  },
  {
    name: "Dianne Russell",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "J'adore la fonction d'aperçu instantané, ça me rassure avant de publier mes textes.",
    rating: 4,
  },
  {
    name: "Cameron Williamson",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    content:
      "LexiAI m'aide à structurer mes idées et à écrire plus vite, même pour des sujets complexes.",
    rating: 2,
  },
  {
    name: "Kristin Watson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    content:
      "La personnalisation du ton est bluffante. Mes clients ne voient pas la différence !",
    rating: 5,
  },
  {
    name: "Ronald Richards",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    content: "Un outil indispensable pour tout créateur de contenu moderne.",
    rating: 3,
  },
  {
    name: "Courtney Henry",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    content:
      "La sécurité et la confidentialité sont au top, je peux travailler sereinement.",
    rating: 4,
  },
  {
    name: "Eleanor Pena",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    content:
      "L'IA propose toujours des suggestions pertinentes pour améliorer mes textes.",
    rating: 5,
  },
  {
    name: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    content:
      "Le mode collaboratif est génial pour travailler en équipe sur des projets éditoriaux.",
    rating: 2,
  },
  {
    name: "Theresa Webb",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    content: "J'ai gagné en productivité et en sérénité grâce à LexiAI.",
    rating: 5,
  },
  {
    name: "Marvin McKinney",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    content:
      "L'outil s'adapte à tous mes besoins, que ce soit pour des posts LinkedIn ou des newsletters.",
    rating: 3,
  },
  {
    name: "Esther Howard",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "Le design est agréable et l'expérience utilisateur très fluide.",
    rating: 4,
  },
  {
    name: "Jerome Bell",
    avatar: "https://randomuser.me/api/portraits/men/63.jpg",
    content: "Je recommande LexiAI à tous mes collègues rédacteurs !",
    rating: 5,
  },
  {
    name: "Jenny Wilson",
    avatar: "https://randomuser.me/api/portraits/women/73.jpg",
    content: "La fonction d'optimisation SEO m'a permis de booster mon trafic.",
    rating: 4,
  },
  {
    name: "Ralph Edwards",
    avatar: "https://randomuser.me/api/portraits/men/73.jpg",
    content: "Le support client est toujours à l'écoute et efficace.",
    rating: 2,
  },
  {
    name: "Annette Black",
    avatar: "https://randomuser.me/api/portraits/women/83.jpg",
    content:
      "Je peux enfin me concentrer sur la créativité, LexiAI s'occupe du reste !",
    rating: 5,
  },
  {
    name: "Kathryn Murphy",
    avatar: "https://randomuser.me/api/portraits/women/93.jpg",
    content: "Un must-have pour les agences de communication.",
    rating: 3,
  },
  {
    name: "Floyd Miles",
    avatar: "https://randomuser.me/api/portraits/men/93.jpg",
    content: "La prise en main est immédiate, même pour les débutants.",
    rating: 4,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col gap-4 min-w-[340px] max-w-[380px] h-[210px] justify-between transition-all duration-300">
      <div className="flex items-center gap-4 mb-1">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
        />
        <span className="font-semibold text-gray-900 text-base">
          {testimonial.name}
        </span>
      </div>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
        {[...Array(5 - testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gray-200" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let animationFrame: number;
    let start: number | null = null;
    let lastTimestamp = 0;
    let px = 0;
    const speed = 0.5; // pixels par frame

    function step(timestamp: number) {
      if (!slider) return;
      if (start === null) start = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      px += speed * (elapsed / 16.67); // ajustement pour 60fps
      if (!slider) return;
      if (slider.scrollLeft + 1 >= slider.scrollWidth - slider.clientWidth) {
        px = 0;
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft = px;
      }
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Pour l'effet infini, on duplique les avis
  const allTestimonials = [...testimonials, ...testimonials];
  const half = Math.ceil(allTestimonials.length / 2);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl  mb-10 font-bold text-center bg-gradient-to-r from-[#1a1a2e] via-[#3337af] to-[#333fea] bg-clip-text text-transparent">
          Ils nous font confiance
        </h1>
        <div
          ref={sliderRef}
          className="overflow-x-auto scrollbar-hide flex flex-col gap-10"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Ligne 1 */}
          <div className="flex gap-8 mb-2">
            {allTestimonials.slice(0, half).map((t, i) => (
              <TestimonialCard testimonial={t} key={"t1-" + i} />
            ))}
          </div>
          {/* Ligne 2, décalée */}
          <div className="flex gap-8 opacity-80 ml-24 sm:ml-40 md:ml-56 lg:ml-72 xl:ml-80 2xl:ml-[400px]">
            {allTestimonials.slice(half).map((t, i) => (
              <TestimonialCard testimonial={t} key={"t2-" + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
