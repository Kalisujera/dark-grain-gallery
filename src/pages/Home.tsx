import { homeSections } from "../data/content";

const Home = () => {
  return (
    <div className="w-full flex flex-col w-full max-w-full m-0 p-0">
      {homeSections.map((section, index) => (
        <section 
          key={index} 
          className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/5 bg-black"
        >
          {/* Background Image / Placeholder */}
          <div className="absolute inset-0 w-full h-full">
            {section.image ? (
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity hover:mix-blend-normal hover:opacity-70 transition-all duration-1000 ease-in-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full bg-neutral-900 opacity-60" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center max-w-4xl px-6 pointer-events-none">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6 text-white/90 drop-shadow-2xl">
              {section.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide max-w-2xl mx-auto">
              {section.description}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
