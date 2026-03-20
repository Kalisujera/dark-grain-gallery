const navItems = ['Home', 'About', 'Contact', 'Blog'];

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-1 px-6 py-5 sm:gap-2">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={item === 'Home' ? scrollToTop : undefined}
          className="px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 rounded-sm bg-foreground/90 text-background hover:bg-foreground active:scale-[0.97]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
