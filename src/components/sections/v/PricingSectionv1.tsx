// src/components/sections/PricingSection.tsx
import { motion } from 'framer-motion';
import { Check, Gift, Calendar, Star } from 'lucide-react';
import lovaLogo from '../../assets/logo/lova.png';

const plans = [
  {
    name: 'تجربة مجانية',
    icon: <Gift size={24} className="inline-block ml-2 text-[#8B7BFF]" />,
    price: '0 DZD',
    period: '',
    features: [
      '7 أيام وصول كامل',
      'جميع القصص والألعاب',
      'لوحة تقدم ولي الأمر',
      'بيئة آمنة',
      'دعم أساسي',
    ],
    buttonText: 'جرب مجاناً',
    buttonColor: 'bg-[#FFD54F] text-[#2D2D2D]',
    popular: false,
  },
  {
    name: 'اشتراك شهري',
    icon: <Calendar size={24} className="inline-block ml-2 text-[#8B7BFF]" />,
    price: '4 500 DZD',
    period: '/ شهر',
    features: [
      'وصول غير محدود',
      'قصص جديدة أسبوعياً',
      'ألعاب حصرية جديدة',
      'لوحة تقدم متقدمة',
      'توصيات ذكية',
      'دعم أولوية',
      'إلغاء في أي وقت',
    ],
    buttonText: 'اشترك شهرياً',
    buttonColor: 'bg-[#8B7BFF] text-white',
    popular: false,
  },
  {
    name: 'اشتراك سنوي',
    icon: <Star size={24} className="inline-block ml-2 text-[#FFD54F]" />,
    price: '5 999 DZD',
    period: '/ سنة',
    features: [
      'كل مزايا الشهري +',
      'وفر 37%',
      'أول 3 أشهر مجاناً',
      'محتوى حصري للعائلة',
      'دعم VIP',
      'إلغاء مع استرداد نسبي',
    ],
    buttonText: 'اشترك سنوياً',
    buttonColor: 'bg-[#FFD54F] text-[#2D2D2D]',
    popular: true,
  },
];

export const PricingSection = () => {
  return (
    <section dir="rtl" className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={lovaLogo} alt="Lova" className="h-12 w-auto object-contain" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#8B7BFF] mb-3">
            خطط الاشتراك
          </h2>
          <p className="text-lg text-[#6B6B78] max-w-2xl mx-auto">
            اختر الخطة التي تناسب عائلتك
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-101  flex flex-col border border-gray-200"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD54F] text-[#2D2D2D] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  الأفضل قيمة
                </div>
              )}
              <div className='w-full  flex justify-start items-center p-3.5'>
              {/* Plan Name with Icon */}
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-2 text-right flex items-center justify-end">
                {plan.icon}
                {plan.name}
              </h3>
               </div>

              {/* Price */}
              <div className="mb-6 text-right">
                <span className="text-4xl font-black text-[#8B7BFF]">{plan.price}</span>
                {plan.period && <span className="text-lg text-[#6B6B78] mr-1">{plan.period}</span>}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-1 text-right">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#4A4A55]">
                    <Check size={18} className="text-[#8B7BFF] flex-shrink-0" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-xl font-bold text-base transition-all hover:scale-105 ${plan.buttonColor}`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;