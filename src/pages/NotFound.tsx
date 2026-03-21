import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-foreground/90 mb-8">
        404
      </h1>
      <p className="text-xl text-foreground/50 font-light mb-12">
        The fragment you are looking for does not exist.
      </p>
      <Link 
        to="/" 
        className="text-sm tracking-widest uppercase text-foreground/80 hover:text-white border-b border-foreground/30 pb-1 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
