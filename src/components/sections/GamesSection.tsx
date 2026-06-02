import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // <-- import useNavigate
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
    description: 'أجب عن أكبر عدد من الأسئلة قبل أن ينتهي الوقت',
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
  const navigate = useNavigate(); // <-- hook for navigation

  return (
    <section dir="rtl" className="w-full bg-white py-12 sm:py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Left aligned */}
        <div className="flex flex-col items-start mb-10 sm:mb-16 text-right">
          <div className="flex flex-col items-start gap-2 sm:gap-3">
            <Gamepad2 size={40} className="text-[#8B7BFF] drop-shadow-md sm:w-12 sm:h-12" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-lalezar text-[#1A1A1A] leading-tight">
              العب، تعلم، واستمتع مع
            </h2>
          </div>

          <div className="flex items-center gap-4 mb-4 sm:mb-6 mt-1 sm:mt-2">
            <img src={logoImg} alt="Lova" className="h-12 sm:h-16 md:h-24 w-auto" />
          </div>

          <p className="text-base sm:text-xl md:text-2xl text-[#6B6B78] font-medium max-w-2xl leading-relaxed">
            ألعاب تعلمية تنمي الذاكرة والتركيز، وتقوي مهارات التفكير وحل المشكلات. كل لعبة تقدم تحديات جديدة ومكافآت مشجعة، تناسب جميع الأعمار من 4 إلى 13 سنة
            <br className="hidden sm:block" />
            اختر لعبتك المفضلة واستمتع بأوقات تعليمية مليئة بالمرح والإثارة.
          </p>

          <div className="flex flex-wrap justify-start gap-2 mt-6 sm:mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-[7px] bg-[#8B7BFF] text-white text-xs sm:text-sm font-bold shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className="relative rounded-[7px] p-4 sm:p-5 pb-5 sm:pb-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden h-full flex flex-col"
                style={{ backgroundColor: game.bgColor }}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-black rounded-full blur-2xl" />
                </div>

                {/* Top-right badge */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 sm:w-9 h-7 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                  <Gamepad2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#8B7BFF]" />
                </div>

                {/* Floating game image */}
                <div className="flex justify-center mb-3 sm:mb-4 mt-1 sm:mt-2">
                  <motion.img
                    src={game.image}
                    alt={game.title}
                    className="w-28 sm:w-32 md:w-36 lg:w-44 h-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                    style={{ filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.15))' }}
                  />
                </div>

                {/* Text content */}
                <div className="text-right flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-0.5 sm:mb-1">
                    {game.title}
                  </h3>
                  <p className="text-white/90 text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed">
                    {game.description}
                  </p>
                </div>

                {/* Button – navigates to Under Construction */}
                <div className="flex justify-end mt-4 sm:mt-5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/trial')} // <-- navigation added
                    className="flex items-center gap-1.5 sm:gap-2 bg-[#FFD54F] text-[#2D2D2D] px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-[7px] text-xs sm:text-sm md:text-base font-black shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Gamepad2 size={14} className="rotate-12 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    <span>ابدأ الآن</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;