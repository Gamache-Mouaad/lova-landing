// src/components/sections/CharactersSection.tsx
import { motion } from 'framer-motion';
import frazaImg from '../../assets/animals/fraza.png';
import modImg from '../../assets/animals/mod.png';
import catImg from '../../assets/animals/cat.png';

export const CharactersSection = () => {
  const characters = [
    { id: 1, img: catImg, name: 'نغم' },      // appears on the right
    { id: 2, img: modImg, name: 'مود' },      // appears in the middle
    { id: 3, img: frazaImg, name: 'فراولة' }, // appears on the left
  ];

  return (
    <section dir="rtl" className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-lalezar text-[#8B7BFF] mb-3">
            الشخصيات
          </h2>
          <p className="text-2xl text-[#6B6B78] max-w-3xl mx-auto font-medium  leading-relaxed">
            تعرف على أصدقاء لوفا. كل شخصية لها موهبتها وشغفها الخاص.
            <br />
            سيكونون رفقاء أطفالكم في رحلة القراءة واللعب.
          </p>
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-15">
          {characters.map((char, idx) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="w-full transition-transform duration-300 hover:scale-101  rounded-3xl"
            >
              <img
                src={char.img}
                alt={char.name}
                className="w-full h-auto object-contain rounded-3xl shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;