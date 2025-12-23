import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StyledLogo } from "./style"

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex justify-center
        ${isScrolled 
          ? "bg-slate-950/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" 
          : "bg-transparent py-8"
        }
      `}
    >
      <div className="flex justify-center items-center">
        <div className="relative group">
          <AnimatePresence mode="wait">
            {isScrolled ? (
              <motion.img
                key="scrolled-logo"
                src='/namePurple1.svg'
                alt="logo"
                className={StyledLogo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key="top-logo"
                src="/nameBlack1.svg" 
                alt="logo"
                className={StyledLogo}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          
          {!isScrolled && (
            <div className="absolute -inset-2 bg-purple-500/20 blur-2xl rounded-full -z-10" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;