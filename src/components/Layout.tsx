import { Outlet, Link, useLocation } from "react-router-dom";
import { siteConfig, navigation } from "../data/content";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-6 px-8 md:px-12 mix-blend-difference text-white">
        <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          {siteConfig.name}
        </Link>
        <nav className="flex gap-6 md:gap-8">
          {navigation.map((item) => (
            <Link 
              key={item.href} 
              to={item.href}
              className={`text-sm tracking-wide transition-opacity ${
                location.pathname === item.href 
                  ? "opacity-100 font-medium" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center justify-start">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <footer className="py-12 px-8 md:px-12 border-t border-white/5 text-xs text-foreground/40 text-center w-full bg-background/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
