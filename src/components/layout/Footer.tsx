// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMusic, FaPaperPlane } from 'react-icons/fa';
import lovaLogo from '../../assets/logo/lova.png';

export const Footer = () => {
  return (
    <footer dir="rtl" className="bg-white border-t border-gray-200 pt-12 pb-6 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-right">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <img src={lovaLogo} alt="Lova" className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed">
              منصة أطفال عربية آمنة تجمع القصص المسموعة والمرئية والألعاب التعليمية.
            </p>
          </div>

          {/* Navigation 1: Platform */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-4">المنصة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">الرئيسية</Link></li>
              <li><Link to="/stories" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">القصص</Link></li>
              <li><Link to="/games" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">الألعاب</Link></li>
              <li><Link to="/characters" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">الشخصيات</Link></li>
              <li><Link to="/awards" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">جوائزي</Link></li>
            </ul>
          </div>

          {/* Navigation 2: Information */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-4">المعلومات</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">مدونة الأهل</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">من نحن</Link></li>
              <li><Link to="/pricing" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">خطط الاشتراك</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">اتصل بنا</Link></li>
              <li><Link to="/privacy" className="text-base text-gray-500 hover:text-[#8B7BFF] transition">سياسة الخصوصية</Link></li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-4">تابعنا</h3>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8B7BFF] hover:text-white transition">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8B7BFF] hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8B7BFF] hover:text-white transition">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8B7BFF] hover:text-white transition">
                <FaMusic size={16} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-4">النشرة البريدية</h3>
            <p className="text-sm text-gray-500 mb-3">اشترك لتصلك آخر القصص والألعاب</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B7BFF] text-sm"
              />
              <button
                type="submit"
                className="bg-[#8B7BFF] text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-[#7A6BE8] transition flex items-center justify-center gap-1"
              >
                <FaPaperPlane size={14} /> اشتراك
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Lova. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;