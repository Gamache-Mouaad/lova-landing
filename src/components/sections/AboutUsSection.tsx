// src/components/sections/AboutUsSection.tsx
import { motion } from 'framer-motion';
import starImg from '../../assets/star.png';

export const AboutUsSection = () => {
  return (
    <section dir="rtl" className="  flex justify-center items-center py-24 px-4 md:px-8 overflow-hidden">
      <div className=" w-full md:w-7xl lg:w-7xl mx-auto relative">
        {/* Floating star – overlaps the card */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10 w-24 md:w-28">
          <img
            src={starImg}
            alt="Star"
            className="w-full h-auto drop-shadow-lg"
          />
        </div>

        {/* Purple card with rounded corners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#8B7BFF] rounded-3xl shadow-2xl pt-20 pb-12 px-6 md:px-12 text-center"
          style={{ boxShadow: '0 16px 48px rgba(139, 123, 255, 0.3)' }}
        >
          {/* Title */}
          <h2 className="text-3xl md:text-7xl font-black text-[#FFD54F] mb-6">
            من نحن
          </h2>

          {/* Paragraph */}
          <p className="text-3xl md:text-3xl text-[#2D2D2D] max-w-2xl mx-auto leading-relaxed font-medium">
            نحن لوفا  منصة أطفال عربية تجمع القصص المسموعة، الألعاب التعليمية، والمحتوى المرئي في بيئة آمنة وممتعة.

            نؤمن بأن التعلم يبدأ بابتسامة، ونعمل كل يوم لجعل كل طفل عربي يكتشف متعة القراءة واللعب.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;