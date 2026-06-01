// src/components/sections/ParentsBlogSection.tsx
import { motion } from 'framer-motion';
import gridImg from '../../assets/grid/grid.png';
import lovaLogo from '../../assets/logo/lova.png';

export const ParentsBlogSection = () => {
  return (
    <section dir="rtl" className="bg-white py-24 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <img
              src={lovaLogo}
              alt="Lova"
              className="h-12 w-auto object-contain"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4"
          >
            لماذا lova؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#8A8A95] max-w-4xl mx-auto leading-relaxed font-bold"
          >
            اكتشف الميزات التي تجعل لوفا المنصة المفضلة للآباء
            <br className="hidden md:block" />
            لضمان بيئة آمنة وممتعة لأطفالهم.
          </motion.p>
        </div>

        {/* Single composite image (grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src={gridImg}
            alt="Lova features grid"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ParentsBlogSection;