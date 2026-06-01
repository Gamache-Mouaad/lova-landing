import { motion } from 'framer-motion';
import { Gamepad2, Sparkles } from 'lucide-react';
import logoImg from '../../assets/games/logo.png';
import gameImg1 from '../../assets/games/1.png';
import gameImg2 from '../../assets/games/2.png';
import gameImg3 from '../../assets/games/3.png';
import gameImg4 from '../../assets/games/4.png';

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const games: Game[] = [
  {
    id: 1,
    title: 'سباق الأسئلة',
    description: 'أجب عن أكبر عدد من الأسئلة قبل أن ينتهي المؤقت',
    image: gameImg1,
    bgColor: '#8B7BFF',
  },
  {
    id: 2,
    title: 'تحدي الألغاز',
    description: 'رتب القطع المبعثرة لتكوين الصورة الكاملة',
    image: gameImg2,
    bgColor: '#FF8C42',
  },
  {
    id: 3,
    title: 'مطابقة الظلال',
    description: 'اسحب كل صورة إلى ظلها الصحيح في أسرع وقت',
    image: gameImg3,
    bgColor: '#C4B5FF',
  },
  {
    id: 4,
    title: 'كنز الذاكرة',
    description: 'اقلب البطاقات وطابق بين الصور قبل نفاد الوقت',
    image: gameImg4,
    bgColor: '#A4E935',
  },
];

const tags = ['ألعاب الذاكرة', 'ألعاب التطابق', 'ألعاب الألغاز', 'ألعاب الأسئلة'];

export const GamesSection = () => {
  return (
    <section dir="rtl" className="w-full bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Left aligned */}
        <div className="flex flex-col items-start mb-20 text-right">
          {/* Main headline with controller icon */}
          <div className="flex items-center gap-3">
            <Gamepad2 size={48} className="text-[#8B7BFF] drop-shadow-md" />
            <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-tight">
              العب <span className="text-[#8B7BFF]">تعلم</span> و أضحك
            </h2>
          </div>

          <div className="flex items-center gap-4 mb-6 mt-2">
            <span className="text-4xl md:text-6xl font-black text-[#1A1A1A]">مع</span>
            <img src={logoImg} alt="Lova" className="h-16 md:h-24 w-auto" />
          </div>

          <p className="text-xl md:text-2xl text-[#6B6B78] font-bold max-w-2xl leading-relaxed">
            ألعاب تفاعلية تنمي الذاكرة والتركيز.
            <br />
            اختر لعبتك واستمتع
          </p>

          {/* Category Tags - left aligned */}
          <div className="flex flex-wrap justify-start gap-2 mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full bg-[#8B7BFF] text-white text-xs md:text-sm font-bold shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-[380px]"
            >
              {/* Floating Game Image */}
              <div className="absolute -top-6 -left-4 z-20 w-44 md:w-52 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-auto rounded-[24px] shadow-2xl object-cover"
                />
              </div>

              {/* Card Container */}
              <div
                className="absolute inset-0 top-10 rounded-[32px] p-6 pb-8 flex flex-col justify-end shadow-xl"
                style={{ backgroundColor: game.bgColor }}
              >
                <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Gamepad2 className="w-5 h-5 text-[#8B7BFF]" />
                </div>

                <div className="text-right mb-6">
                  <h3 className="text-2xl font-black text-white mb-1">
                    {game.title}
                  </h3>
                  <p className="text-white/90 text-sm font-bold leading-tight">
                    {game.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start flex items-center gap-1.5 bg-[#FFD54F] hover:bg-white transition-colors text-[#2D2D2D] px-4 py-2 rounded-xl text-xs font-black shadow-lg"
                >
                  <Sparkles size={14} className="rotate-12" />
                  ابدأ الآن
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;