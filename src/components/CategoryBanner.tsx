import { useEffect, useRef, useState } from 'react';

interface CategoryBannerProps {
  title: string;
  subtitle: string;
  image: string;
  index: number;
}

const CategoryBanner = ({ title, subtitle, image, index }: CategoryBannerProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex items-end min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-all duration-[1.2s] ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full px-8 pb-16 pt-32 sm:px-16 md:px-24 ${visible ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        <p
          className="text-xs font-medium tracking-[0.3em] uppercase mb-3 text-foreground/50"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {subtitle}
        </p>
        <h2
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
        <div className="mt-6 h-px w-24 bg-foreground/20" />
      </div>
    </section>
  );
};

export default CategoryBanner;
