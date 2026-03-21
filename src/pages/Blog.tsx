import { blogPosts } from "../data/content";

const Blog = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-40 pb-32 min-h-screen">
      <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-foreground/90 mb-24 text-center">
        Journal
      </h1>
      <div className="flex flex-col gap-32">
        {blogPosts.map((post) => (
          <article key={post.id} className="flex flex-col md:flex-row gap-10 md:gap-16 items-start opacity-90 hover:opacity-100 transition-opacity group">
            <div className="w-full md:w-5/12 aspect-[4/3] bg-neutral-900 overflow-hidden relative">
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              )}
            </div>
            <div className="w-full md:w-7/12 flex flex-col justify-center py-4">
              <time className="text-xs tracking-widest font-mono text-foreground/40 mb-6 uppercase">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-foreground/90">
                {post.title}
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed font-light">
                {post.content}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
