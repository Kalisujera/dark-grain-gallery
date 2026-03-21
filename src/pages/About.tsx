import { aboutContent } from "../data/content";

const About = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-48 flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start min-h-screen">
      <div className="w-full md:w-5/12 aspect-[3/4] bg-neutral-900 overflow-hidden relative">
        {aboutContent.profileImage && (
          <img 
            src={aboutContent.profileImage} 
            alt={aboutContent.title}
            className="w-full h-full object-cover object-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}
      </div>
      <div className="w-full md:w-7/12 flex flex-col justify-center space-y-8 md:pt-10">
        <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-foreground/90">
          {aboutContent.title}
        </h1>
        <div className="space-y-6 text-foreground/70 text-lg md:text-xl leading-relaxed font-light">
          {aboutContent.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
