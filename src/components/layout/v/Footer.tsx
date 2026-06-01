import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, Play, Send, Mail, Phone } from 'lucide-react';
import lovaLogo from '../../assets/logo/lova.png';
import starIcon from '../../assets/items/stars.png';
import smileIcon from '../../assets/items/lovasmile.png';

export const Footer = () => {
  return (
    <footer dir="rtl" className="bg-[#FAF9F6] pt-24 pb-12 px-6 md:px-12 mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#8B7BFF] via-[#FFD54F] via-[#FF8C42] to-[#10B981]" />

      {/* Floating decorative icons */}
      <motion.img
        src={starIcon}
        alt=""
        className="absolute top-10 left-[5%] w-12 opacity-20 pointer-events-none"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src={smileIcon}
        alt=""
        className="absolute bottom-10 right-[2%] w-20 opacity-10 pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 text-right">

          {/* Column 1: Brand & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <img src={lovaLogo} alt="Lova" className="h-20 w-auto" />
            </Link>
            <p className="text-xl text-[#6B6B78] leading-relaxed font-bold max-w-sm">
              منصة أطفال عربية آمنة تجمع القصص المسموعة، الألعاب التعليمية، والمغامرات الصوتية الممتعة بطريقة تفاعلية ومبتكرة.
            </p>
            <div className="flex gap-4">
              {[
                { icon: MessageCircle, color: '#1877F2', label: 'فيسبوك' },
                { icon: Camera, color: '#E4405F', label: 'إنستغرام' },
                { icon: Play, color: '#FF0000', label: 'يوتيوب' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  whileHover={{ y: -8, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-[20px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all group"
                >
                  <social.icon size={26} style={{ color: social.color }} className="transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-8 pt-4">
            <h3 className="text-2xl font-black text-[#1A1A1A] relative inline-block">
              اكتشف
              <span className="absolute -bottom-2 right-0 w-8 h-1.5 bg-[#FFD54F] rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'الرئيسية', path: '/' },
                { name: 'القصص', path: '/stories' },
                { name: 'الألعاب', path: '/games' },
                { name: 'الشخصيات', path: '/characters' },
                { name: 'خطط الاشتراك', path: '/pricing' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#6B6B78] hover:text-[#8B7BFF] text-lg font-bold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7BFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support (2 cols) */}
          <div className="lg:col-span-2 space-y-8 pt-4">
            <h3 className="text-2xl font-black text-[#1A1A1A] relative inline-block">
              المساعدة
              <span className="absolute -bottom-2 right-0 w-8 h-1.5 bg-[#FF8C42] rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'من نحن', path: '/about' },
                { name: 'اتصل بنا', path: '/contact' },
                { name: 'سياسة الخصوصية', path: '/privacy' },
                { name: 'الشروط والأحكام', path: '/terms' },
                { name: 'الأسئلة الشائعة', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#6B6B78] hover:text-[#8B7BFF] text-lg font-bold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7BFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-8 pt-4">
            <h3 className="text-2xl font-black text-[#1A1A1A] relative inline-block">
              النشرة البريدية
              <span className="absolute -bottom-2 right-0 w-8 h-1.5 bg-[#8B7BFF] rounded-full" />
            </h3>
            <p className="text-lg text-[#6B6B78] font-bold leading-relaxed">
              اشترك لتصلك آخر القصص والألعاب التعليمية مباشرة إلى بريدك الإلكتروني.
            </p>
            <form className="relative group mt-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full h-16 px-8 pr-8 pl-20 rounded-[28px] bg-white border-2 border-transparent focus:border-[#8B7BFF] shadow-[0_10px_30px_rgba(0,0,0,0.05)] outline-none text-right font-bold transition-all placeholder:text-[#A0A0B0]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-2 top-2 bottom-2 w-14 rounded-[22px] bg-[#8B7BFF] text-white flex items-center justify-center shadow-lg transition-colors hover:bg-[#7C3AED]"
              >
                <Send size={24} className="mr-1 rotate-[210deg]" />
              </motion.button>
            </form>

            <div className="pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[#6B6B78] font-bold text-lg group cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#8B7BFF] group-hover:bg-[#8B7BFF] group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <span>+966 500 000 000</span>
              </div>
              <div className="flex items-center gap-4 text-[#6B6B78] font-bold text-lg group cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#8B7BFF] group-hover:bg-[#8B7BFF] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <span>hello@lova.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-10 border-t-2 border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[#8A8A95] font-bold text-base order-2 md:order-1">
            © {new Date().getFullYear()} Lova. جميع الحقوق محفوظة لشركة داهوك للتعليم والترفيه.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 order-1 md:order-2">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-50">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-black text-[#1A1A1A]">حالة المنصة: متصل</span>
            </div>

            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm font-black text-[#8A8A95] hover:text-[#8B7BFF] transition-colors">سياسة الخصوصية</Link>
              <Link to="/terms" className="text-sm font-black text-[#8A8A95] hover:text-[#8B7BFF] transition-colors">اتفاقية الاستخدام</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
