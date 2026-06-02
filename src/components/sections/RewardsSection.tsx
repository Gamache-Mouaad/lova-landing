// src/components/sections/RewardsSection.tsx
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Star,
  BookOpen,
  Gamepad2,
  Puzzle,
  Mic,
  Medal,
  Lock,
  CheckCircle2,
  Zap,
  Trophy,
} from 'lucide-react';

const brandPurple = '#8B7BFF';
const brandYellow = '#FFD54F';
const brandTextDark = '#1A1A1A';
const brandTextGray = '#6B6B78';

const rewards = [
  {
    id: 1, name: 'قارئ صغير', icon: Star, earned: true, isNew: false,
    color: brandYellow, bg: '#FFF8E7', border: '#FFE5B4',
    desc: 'قرأ 5 قصص',
  },
  {
    id: 2, name: 'راوي قصص', icon: BookOpen, earned: true, isNew: false,
    color: brandPurple, bg: '#F1EEFF', border: '#DDD4FB',
    desc: 'أكمل 10 روايات',
  },
  {
    id: 3, name: 'بطل الذاكرة', icon: Gamepad2, earned: true, isNew: false,
    color: '#FF8C42', bg: '#FFF0E6', border: '#FFD9B8',
    desc: 'فاز 3 مرات',
  },
  {
    id: 4, name: 'لغز ماهر', icon: Puzzle, earned: true, isNew: true,
    color: '#A4E935', bg: '#EEFCE8', border: '#D2F0C4',
    desc: 'حل 8 ألغاز',
  },
  {
    id: 5, name: 'راوي مميز', icon: Mic, earned: true, isNew: true,
    color: '#FF6B6B', bg: '#FFEEEE', border: '#FFD2D2',
    desc: 'روى 5 قصص',
  },
  {
    id: 6, name: 'نجمة الأسبوع', icon: Medal, earned: true, isNew: false,
    color: brandYellow, bg: '#FFF8E7', border: '#FFE5B4',
    desc: 'أفضل أداء',
  },
  {
    id: 7, name: 'سيد الألعاب', icon: Gamepad2, earned: false, isNew: false,
    color: '#CBD5E1', bg: '#F8FAFC', border: '#E2E8F0',
    desc: 'العب 10 ألعاب',
  },
  {
    id: 8, name: 'حكواتي', icon: BookOpen, earned: false, isNew: false,
    color: '#CBD5E1', bg: '#F8FAFC', border: '#E2E8F0',
    desc: 'أكمل 20 قصة',
  },
  {
    id: 9, name: 'بطل القراءة', icon: Trophy, earned: false, isNew: false,
    color: '#CBD5E1', bg: '#F8FAFC', border: '#E2E8F0',
    desc: 'اقرأ 30 كتاباً',
  },
];

const EARNED_COUNT = rewards.filter(r => r.earned).length;
const TOTAL = rewards.length;

interface BadgeCardProps {
  reward: typeof rewards[0];
  index: number;
}

function BadgeCard({ reward, index }: BadgeCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const isEarned = reward.earned;
  const Icon = reward.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isEarned || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[7px] p-5 text-center transition-all duration-300 ${
        isEarned
          ? `bg-white shadow-md hover:shadow-xl border ${reward.border} cursor-pointer`
          : 'bg-[#F9FAFB] border border-[#EEF2F6] opacity-70 grayscale-[0.3]'
      }`}
      style={{
        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(${hovered && isEarned ? -4 : 0}px)`,
      }}
    >
      {isEarned && (
        <motion.div
          animate={hovered ? { x: '200%' } : { x: '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
        />
      )}

      {reward.isNew && (
        <div className="absolute top-3 -right-0 bg-[#FFD54F] text-[#2D2D2D] text-[10px] font-black px-2 py-0.5 rounded-l z-10 shadow-sm">
          جديد ✦
        </div>
      )}

      <div
        className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center shadow-sm ${
          isEarned ? '' : 'bg-gray-200'
        }`}
        style={{ backgroundColor: isEarned ? reward.color : undefined }}
      >
        {isEarned ? <CheckCircle2 size={14} color="#fff" strokeWidth={2.5} /> : <Lock size={12} color="#94A3B8" />}
      </div>

      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-4 relative ${
          isEarned ? `bg-white ${reward.border}` : 'bg-gray-100 border-gray-200'
        }`}
      >
        <Icon size={32} style={{ color: isEarned ? reward.color : '#CBD5E1' }} />
      </div>

      <h3 className={`text-base font-black mb-1 ${isEarned ? 'text-[#1A1A1A]' : 'text-gray-400'}`}>
        {reward.name}
      </h3>

      <p className={`text-[11px] font-semibold mb-3 ${isEarned ? 'text-gray-500' : 'text-gray-300'}`}>
        {reward.desc}
      </p>

      <div
        className={`inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full border ${
          isEarned ? `${reward.bg} ${reward.border}` : 'bg-gray-100 border-gray-200 text-gray-400'
        }`}
        style={{ color: isEarned ? reward.color : undefined }}
      >
        {isEarned && <Zap size={10} fill="currentColor" />}
        {isEarned ? 'مكتسبة' : 'قيد الإنجاز'}
      </div>
    </motion.div>
  );
}

export const RewardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setBarWidth((EARNED_COUNT / TOTAL) * 100), 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section dir="rtl" ref={ref} className="relative bg-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Only the subtle grid pattern remains (no colored blobs) */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, #E5E0FF 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#F1EEFF] text-[#8B7BFF] text-xs font-black px-4 py-1.5 rounded-full mb-4"
          >
            <Zap size={14} fill="#8B7BFF" /> إنجازاتي
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-lalezar text-[#1A1A1A] mb-3"
          >
            جوائزي
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[#6B6B78] max-w-md mx-auto mb-8"
          >
            اجمع النجوم وافتح شارات جديدة من خلال القراءة واللعب
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#F9FAFB] border border-[#E8EDF2] rounded-xl p-4 px-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#6B6B78]">تقدّمك</span>
              <div className="w-40 h-2.5 bg-[#EDE9FF] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#8B7BFF] to-[#FFD54F] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${barWidth}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-bold text-[#6B6B78]">
              <span className="text-[#8B7BFF] text-lg font-black">{EARNED_COUNT}</span>
              <span>/</span>
              <span className="text-gray-400">{TOTAL}</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {rewards.map((reward, idx) => (
            <BadgeCard key={reward.id} reward={reward} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;