import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import lovaLogo from '../../assets/logo/lova.png';

const navLinks = [
  { name: 'الرئيسية', target: 'hero' },
  { name: 'القصص', target: 'stories' },
  { name: 'الألعاب', target: 'games' },
  { name: 'مدونة الأهل', target: 'blog' },
  { name: 'الشخصيات', target: 'characters' },
  { name: 'من نحن', target: 'about' },
  { name: 'جوائزي', target: 'awards' },
  { name: 'خطط الاشتراك', target: 'pricing' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (targetId: string) => {
    if (location.pathname === '/') {
      // Already on homepage – smooth scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage and pass the target section in state
      navigate('/', { state: { scrollTo: targetId } });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-16">
        {/* CTA buttons (navigate to UnderConstruction) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/trial"
            className="rounded-xl bg-[#FFD54F] px-6 py-2.5 text-sm font-bold text-[#2D2D2D] transition-transform hover:scale-105 active:scale-95"
          >
            جرب مجاناً
          </Link>
          <Link
            to="/login"
            className="rounded-xl bg-[#8B7BFF] px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
          >
            تسجيل الدخول
          </Link>
        </div>

        {/* Desktop pill menu */}
        <div className="hidden items-center  p-1.5  lg:flex">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavigation(link.target)}
                className="whitespace-nowrap rounded-full px-2 py-1 text-sm font-medium transition-all duration-200 text-[#6B6B78] hover:text-[#ffffff] hover:bg-[#8B7BFF] ease-in"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="shrink-0 transition-transform hover:scale-105">
          <img
            src={lovaLogo}
            alt="Lova"
            className="h-10 w-auto object-contain"
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="rounded-lg p-2 text-[#6B6B78] focus:outline-none md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-white border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavigation(link.target)}
                  className="block rounded-xl px-4 py-3 text-right text-base font-bold text-[#6B6B78] hover:bg-gray-50 w-full text-right"
                >
                  {link.name}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Link
                  to="/trial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl bg-[#FFD54F] py-3 text-center text-sm font-bold text-[#2D2D2D]"
                >
                  جرب مجاناً
                </Link>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl bg-[#8B7BFF] py-3 text-center text-sm font-bold text-white"
                >
                  تسجيل الدخول
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;