import Navbar from '@/components/Navbar';
import CategoryBanner from '@/components/CategoryBanner';
import bannerConceptArt from '@/assets/banner-concept-art.jpg';
import bannerIllustration from '@/assets/banner-illustration.jpg';
import bannerSketches from '@/assets/banner-sketches.jpg';
import bannerMisc from '@/assets/banner-misc.jpg';

const categories = [
  { title: 'Concept Art', subtitle: 'Worlds & Environments', image: bannerConceptArt },
  { title: 'Illustration', subtitle: 'Narrative & Editorial', image: bannerIllustration },
  { title: 'Sketches', subtitle: 'Studies & Exploration', image: bannerSketches },
  { title: 'Miscellaneous', subtitle: 'Everything Else', image: bannerMisc },
];

const Index = () => {
  return (
    <div className="grain">
      <Navbar />
      <main>
        {categories.map((cat, i) => (
          <CategoryBanner
            key={cat.title}
            title={cat.title}
            subtitle={cat.subtitle}
            image={cat.image}
            index={i}
          />
        ))}
      </main>
      <footer className="py-12 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>
          © 2026 · Portfolio
        </p>
      </footer>
    </div>
  );
};

export default Index;
