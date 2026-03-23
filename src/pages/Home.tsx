import { Link } from "react-router-dom";
import { archiveData } from "../data/content";

const Home = () => {
  const categories = Object.values(archiveData);

  return (
    <div className="w-full flex flex-col w-full max-w-full m-0 p-0">
      {categories.map((category) => (
        <Link 
          key={category.id} 
          to={`/${category.id}`}
          className="group relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5 bg-black cursor-pointer"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {category.homeBannerImage ? (
              <img 
                src={category.homeBannerImage} 
                alt={category.pageTitle}
                className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-70 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full bg-neutral-900 opacity-60" />
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none group-hover:bg-black/10 transition-colors duration-1000" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-[1500ms]" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center max-w-4xl px-6 pointer-events-none transform group-hover:translate-y-[-10px] transition-transform duration-[1200ms] ease-out">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-4 md:mb-6 text-white/80 group-hover:text-white drop-shadow-2xl transition-colors duration-700">
              {category.pageTitle}
            </h2>
            <p className="text-lg md:text-xl text-white/50 group-hover:text-white/80 font-light tracking-wide max-w-2xl mx-auto transition-colors duration-700">
              {category.intro}
            </p>
            {/* Minimal interaction cue */}
            <div className="mt-8 md:mt-12 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
              <span className="text-xs tracking-[0.3em] uppercase text-white/60 border-b border-white/20 pb-1">
                Explore Archive
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
