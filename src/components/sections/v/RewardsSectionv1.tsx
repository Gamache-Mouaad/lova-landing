// src/components/sections/RewardsSection.tsx
import { motion } from 'framer-motion';
import {
  Star,
  BookOpen,
  Gamepad2,
  Puzzle,
  Mic,
  Medal,
  Lock,
  CheckCircle2,
} from 'lucide-react';

const rewards = [
  { id: 1, name: 'قارئ صغير', icon: Star, earned: true, color: '#FFD54F' },
  { id: 2, name: 'راوي قصص', icon: BookOpen, earned: true, color: '#FFFFFF' },
  { id: 3, name: 'بطل الذاكرة', icon: Gamepad2, earned: true, color: '#FF8C42' },
  { id: 4, name: 'لغز ماهر', icon: Puzzle, earned: true, color: '#A4E935' },
  { id: 5, name: 'راوي مميز', icon: Mic, earned: true, color: '#FF6B6B' },
  { id: 6, name: 'نجمة الأسبوع', icon: Medal, earned: true, color: '#FFD54F' },
  { id: 7, name: 'سيد الألعاب', icon: Gamepad2, earned: false, color: '#C0C0C0' },
  { id: 8, name: 'حكواتي', icon: BookOpen, earned: false, color: '#C0C0C0' },
  { id: 9, name: 'بطل القراءة', icon: Star, earned: false, color: '#C0C0C0' },
];

export const RewardsSection = () => {
  return (
    <section dir="rtl" className="relative py-24 px-4 md:px-12 overflow-hidden bg-gradient-to-b from-white to-[#F8F6FF]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B7BFF] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD54F] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-[#8B7BFF]/10 text-[#8B7BFF] font-bold text-sm mb-3"
          >
            إنجازاتي
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-[#1A1A1A] mb-6"
          >
            جوائزي
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#6B6B78] max-w-2xl mx-auto leading-relaxed font-medium"
          >
            اجمع النجوم وافتح شارات جديدة من خلال القراءة واللعب
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {rewards.map((reward, idx) => {
            const IconComponent = reward.icon;
            const isEarned = reward.earned;

            return (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`relative group rounded-[7px] transition-all duration-300 ${
                  isEarned
                    ? 'bg-[#8B7BFF] hover:-translate-y-1'
                    : 'bg-[#8B7BFF]/60 grayscale hover:grayscale-0 hover:bg-[#8B7BFF]/80'
                }`}
              >
                <div className="p-8 text-center">
                  <div className="absolute top-4 right-4">
                    {isEarned ? (
                      <CheckCircle2 size={24} className="text-white drop-shadow-sm" />
                    ) : (
                      <Lock size={20} className="text-white/80" />
                    )}
                  </div>

                  <div className="flex justify-center mb-5">
                    <div className="relative">
                      {isEarned && (
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-md scale-110" />
                      )}
                      <IconComponent
                        size={64}
                        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: isEarned ? reward.color : '#D1D5DB' }}
                      />
                    </div>
                  </div>

                  {/* Golden title for earned badges */}
                  <h3
                    className={`text-2xl font-black mb-2 ${
                      isEarned ? 'text-[#FFD54F]' : 'text-gray-200'
                    }`}
                  >
                    {reward.name}
                  </h3>

                  <div
                    className={`inline-block px-4 py-1 rounded-full text-xs font-bold ${
                      isEarned
                        ? 'bg-white/20 text-white backdrop-blur-sm'
                        : 'bg-gray-500/30 text-gray-300'
                    }`}
                  >
                    {isEarned ? 'مكتسبة ✓' : 'قيد الإنجاز 🔒'}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;