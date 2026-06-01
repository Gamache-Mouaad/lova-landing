// src/pages/UnderConstruction.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Wrench } from 'lucide-react';
import {
  FaServer,
  FaFileAlt,
  FaShieldAlt,
  FaPaintBrush,
  FaDatabase,
  FaChartLine,
} from 'react-icons/fa';
import serverImg from '../assets/server.png';

const UnderConstruction = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white to-[#F8F6FF] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Top content – text on left, image on right (RTL: first child appears on right, so swap order) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text block – now on the left visually */}
          <div className="text-right md:text-right flex-1">
            <div className="flex items-center gap-2 text-[#8B7BFF] mb-4">
              <Wrench size={32} />
              <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">قيد التطوير</h1>

            </div>
            <p className="text-2xl text-[#6B6B78] mb-2 leading-relaxed">
              نقوم حالياً بتطوير الخوادم والمنصة بالكامل.
            </p>
            <p className="text-2xl text-[#6B6B78] mb-4 leading-relaxed">
              الصفحات الأخرى ستكون جاهزة قريباً.
            </p>
          </div>

          {/* Image block – on the right visually */}
          <div className="flex justify-center flex-1">
            <img
              src={serverImg}
              alt="تحت الإنشاء"
              className="w-64 md:w-80 h-auto object-contain"
            />
          </div>
        </div>

        {/* Cards section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] text-center mb-8">
            ما نعمل عليه حاليًا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaServer,
                title: 'الخوادم',
                desc: 'تجهيز بنية تحتية قوية وسريعة لتشغيل المنصة بسلاسة.',
              },
              {
                icon: FaFileAlt,
                title: 'الصفحات',
                desc: 'تطوير جميع صفحات القصص، الألعاب، الشخصيات، والمدونة.',
              },
              {
                icon: FaShieldAlt,
                title: 'الأمان',
                desc: 'حماية بيانات الأطفال وتشفير الاتصالات لضمان بيئة آمنة.',
              },
              {
                icon: FaPaintBrush,
                title: 'التصميم',
                desc: 'تحسين تجربة المستخدم وواجهة المنصة باستمرار.',
              },
              {
                icon: FaDatabase,
                title: 'بناء علاقات البيانات',
                desc: 'إنشاء روابط ذكية بين الأطفال والمحتوى لتحسين التوصيات وتخصيص تجربة التعلم.',
              },
              {
                icon: FaChartLine,
                title: 'لوحة التحكم',
                desc: 'لوحة تحكم متقدمة لأولياء الأمور لمتابعة تقدم الأطفال.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-2 text-right"
                >
                  <Icon size={36} className="text-[#8B7BFF] mb-4" />
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B6B78] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Home button below cards */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#8B7BFF] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#7A6BE8] transition shadow-md"
          >
            <Home size={20} /> العودة إلى الرئيسية
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;