import { contactContent } from "../data/content";

const Contact = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-48 pb-32 flex flex-col items-center text-center min-h-[80vh]">
      <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-foreground/90 mb-10">
        {contactContent.title}
      </h1>
      <p className="text-xl md:text-2xl text-foreground/60 font-light mb-16 max-w-2xl leading-relaxed">
        {contactContent.text}
      </p>
      
      <a 
        href={`mailto:${contactContent.email}`}
        className="text-2xl md:text-4xl font-light tracking-tight hover:text-white transition-colors border-b border-foreground/20 pb-2 mb-24"
      >
        {contactContent.email}
      </a>

      <div className="flex flex-wrap justify-center gap-10">
        {contactContent.socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase text-foreground/50 hover:text-white transition-colors"
          >
            {social.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
