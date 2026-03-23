import { useParams, Navigate } from "react-router-dom";
import { archiveData } from "../data/content";

const Category = () => {
  const { categoryId } = useParams();

  // If the category doesn't exist in our content.ts, send to 404
  if (!categoryId || !archiveData[categoryId]) {
    return <Navigate to="/404" />;
  }

  const category = archiveData[categoryId];

  return (
    <div className="w-full min-h-screen flex flex-col pt-32 pb-32">
      {/* CATEGORY HEADER */}
      <header className="w-full max-w-5xl mx-auto px-6 mb-24 md:mb-40 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-foreground/90 mb-8">
          {category.pageTitle}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/60 font-light max-w-3xl leading-relaxed">
          {category.intro}
        </p>
      </header>

      {/* PROJECT BLOCKS CONTAINER */}
      <div className="w-full flex flex-col gap-32 md:gap-48">
        {category.projects.map((project: any) => (
          <article 
            key={project.id} 
            className="w-full max-w-6xl mx-auto px-6 flex flex-col border-t border-white/5 pt-16 md:pt-32"
          >
            {/* PROJECT METADATA */}
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 mb-16 md:mb-24">
              <div className="w-full md:w-1/3 flex flex-col order-2 md:order-1">
                <span className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4 block font-mono">
                  {project.subtitle}
                </span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground/90 mb-6">
                  {project.title}
                </h2>
                <p className="text-lg text-foreground/60 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* COVER IMAGE */}
              <div className="w-full md:w-2/3 aspect-[16/9] md:aspect-[21/9] bg-neutral-900 overflow-hidden relative order-1 md:order-2">
                {project.coverImage && (
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
              </div>
            </div>

            {/* INTERNAL PROJECT GALLERY */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">
                {project.gallery.map((imgObj: any, idx: number) => (
                  <figure key={idx} className="w-full flex flex-col">
                    <div className="w-full bg-neutral-900/50 mb-6 overflow-hidden">
                      {imgObj.url && (
                        <img 
                          src={imgObj.url} 
                          alt={imgObj.caption || "Project image"}
                          className="w-full h-auto object-contain bg-black/20"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      )}
                    </div>
                    {(imgObj.caption || imgObj.description) && (
                      <figcaption className="w-full max-w-2xl text-left border-l border-white/10 pl-6 py-2">
                        {imgObj.caption && (
                          <span className="block text-sm md:text-base text-foreground/80 font-medium tracking-wide mb-2">
                            {imgObj.caption}
                          </span>
                        )}
                        {imgObj.description && (
                          <span className="block text-sm text-foreground/50 font-light leading-relaxed">
                            {imgObj.description}
                          </span>
                        )}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </article>
        ))}

        {category.projects.length === 0 && (
          <div className="text-center text-foreground/40 font-light italic py-20 border-t border-white/5 max-w-5xl mx-auto w-full px-6">
            The archive for this category is currently empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
