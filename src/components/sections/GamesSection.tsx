import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
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
    <section dir="rtl" className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Left aligned */}
        <div className="flex flex-col items-start mb-16 text-right">
          <div className="flex flex-col items-start gap-3">
            <Gamepad2 size={48} className="text-[#8B7BFF] drop-shadow-md" />
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-lalezar text-[#1A1A1A] leading-tight">
             العب، تعلم، واستمتع مع 
            </h2>
          </div>

          <div className="flex items-center gap-4 mb-6 mt-2">
            <img src={logoImg} alt="Lova" className="h-16 md:h-24 w-auto" />
          </div>

          <p className="text-xl md:text-2xl text-[#6B6B78] font-medium max-w-2xl leading-relaxed">
           
ألعاب تفاعلية تنمي الذاكرة والتركيز، وتقوي مهارات التفكير وحل المشكلات. كل لعبة تقدم تحديات جديدة ومكافآت مشجعة، تناسب جميع الأعمار من 6 إلى 13 سنة.
            <br />
            اختر لعبتك المفضلة واستمتع بأوقات تعليمية مليئة بالمرح والإثارة.
          </p>

          <div className="flex flex-wrap justify-start gap-2 mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-[7px] bg-[#8B7BFF] text-white text-xs md:text-sm font-bold shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                className="relative rounded-[7px] p-5 pb-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden h-full flex flex-col"
                style={{ backgroundColor: game.bgColor }}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-black rounded-full blur-3xl" />
                </div>

                {/* Top-right badge */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                  <Gamepad2 className="w-5 h-5 text-[#8B7BFF]" />
                </div>

                {/* Floating game image – fixed width for consistency */}
                <div className="flex justify-center mb-4 mt-2">
                  <motion.img
                    src={game.image}
                    alt={game.title}
                    className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                    style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))' }}
                  />
                </div>

                {/* Text content – flex‑grow to push button down */}
                <div className="text-right flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{game.title}</h3>
                  <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
                    {game.description}
                  </p>
                </div>

                {/* Button – aligned to left visually (justify-end in RTL) */}
                <div className="flex justify-end mt-5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#FFD54F] text-[#2D2D2D] px-5 py-2.5 rounded-[7px] text-sm font-black shadow-md hover:shadow-lg transition-all"
                  >
                    <Gamepad2 size={18} className="rotate-12" />
                    ابدأ الآن
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