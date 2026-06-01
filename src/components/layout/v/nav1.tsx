import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import lovaLogo from '../../assets/logo/lova.png';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'القصص', path: '/stories' },
  { name: 'الألعاب', path: '/games' },
  { name: 'مدونة الأهل', path: '/blog' },
  { name: 'الشخصيات', path: '/characters' },
  { name: 'من نحن', path: '/about' },
  { name: 'جوائزي', path: '/awards' },
  { name: 'خطط الاشتراك', path: '/pricing' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
     style={{backgroundColor:'var(--color-pill-bg)'}}
    className="fixed top-0 left-0 right-0 z-[9999] w-ful">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-16">

        {/* Left Side Action Buttons (left in RTL) */}
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

        {/* Desktop Pill Menu (Center-Right in RTL) */}
        <div className="hidden items-center rounded-full border border-gray-100 bg-[#F5F5F7] p-1.5 shadow-sm lg:flex">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#8B7BFF] shadow-sm ring-2 ring-[#8B7BFF]/20'
                      : 'text-[#6B6B78] hover:text-[#4A4A55]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Logo (Right in RTL) */}
        <Link to="/" className="shrink-0 transition-transform hover:scale-105">
          <img
            src={lovaLogo}
            alt="Lova"
            className="h-14 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="sr-only">Lova</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="rounded-lg p-2 text-[#6B6B78] focus:outline-none md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-right text-base font-bold transition ${
                      isActive
                        ? 'bg-[#8B7BFF]/10 text-[#8B7BFF]'
                        : 'text-[#6B6B78]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Link
                  to="/login"
                  className="rounded-xl bg-[#8B7BFF] py-3 text-center text-sm font-bold text-white"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/trial"
                  className="rounded-xl bg-[#FFD54F] py-3 text-center text-sm font-bold text-[#2D2D2D]"
                >
                  جرب مجاناً
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
