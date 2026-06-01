// src/components/sections/v/RewardsSection.tsx
import { motion } from 'framer-motion';
import {
  Star,
  BookOpen,
  Gamepad2,
  Puzzle,
  Mic,
  Medal,
  Lock,
  CheckCircle2
} from 'lucide-react';

const rewards = [
  { id: 1, name: 'قارئ صغير', icon: Star, earned: true, color: '#FFD54F' },
  { id: 2, name: 'راوي قصص', icon: BookOpen, earned: true, color: '#8B7BFF' },
  { id: 3, name: 'بطل الذاكرة', icon: Gamepad2, earned: true, color: '#FF8C42' },
  { id: 4, name: 'لغز ماهر', icon: Puzzle, earned: true, color: '#A4E935' },
  { id: 5, name: 'راوي مميز', icon: Mic, earned: true, color: '#FF6B6B' },
  { id: 6, name: 'نجمة الأسبوع', icon: Medal, earned: true, color: '#FFD54F' },
  { id: 7, name: 'سيد الألعاب', icon: Gamepad2, earned: false, color: '#A0A0A0' },
  { id: 8, name: 'حكواتي', icon: BookOpen, earned: false, color: '#A0A0A0' },
  { id: 9, name: 'بطل القراءة', icon: Star, earned: false, color: '#A0A0A0' },
];

export const RewardsSection = () => {
  return (
    <section dir="rtl" className="bg-[#FAF9F6] py-24 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-black text-[#8B7BFF] mb-2"
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

        {/* Grid of badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {rewards.map((reward, idx) => {
            const IconComponent = reward.icon;
            const isEarned = reward.earned;

            return (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`group relative rounded-[40px] p-8 text-center transition-all duration-300 ${
                  isEarned
                    ? 'bg-white shadow-xl hover:-translate-y-2'
                    : 'bg-gray-100/50 grayscale opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Status Indicator */}
                <div className="absolute top-4 right-4">
                  {isEarned ? (
                    <CheckCircle2 size={24} className="text-[#A4E935]" />
                  ) : (
                    <Lock size={20} className="text-gray-400" />
                  )}
                </div>

                {/* Icon Container with Sunburst-like glow */}
                <div className="relative flex justify-center mb-6">
                  {isEarned && (
                    <div
                      className="absolute inset-0 blur-2xl opacity-20 rounded-full animate-pulse"
                      style={{ backgroundColor: reward.color }}
                    />
                  )}
                  <div
                    className={`relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isEarned ? 'bg-white shadow-lg' : 'bg-gray-200'
                    }`}
                  >
                    <IconComponent
                      size={40}
                      className="drop-shadow-sm"
                      style={{ color: isEarned ? reward.color : '#94A3B8' }}
                    />
                  </div>
                </div>

                {/* Badge Info */}
                <h3 className={`text-xl font-black mb-1 ${isEarned ? 'text-[#1A1A1A]' : 'text-gray-500'}`}>
                  {reward.name}
                </h3>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    isEarned ? 'bg-[#8B7BFF]/10 text-[#8B7BFF]' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isEarned ? 'مكتسبة' : 'قيد الإنجاز'}
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
