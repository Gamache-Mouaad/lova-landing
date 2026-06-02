// src/components/sections/FeaturesSection.tsx
import { BookOpen, Gamepad2, Star } from 'lucide-react';

// Main icons
import bookIcon from '../../assets/use/book.png';
import controllerIcon from '../../assets/use/controler.png';
import winIcon from '../../assets/use/win.png';

// Background images
import bookBg from '../../assets/use/book-bg.png';
import controllerBg from '../../assets/use/contrler-bg.png';
import winBg from '../../assets/use/win-bg.png';

const cardsData = [
  {
    id: 1,
    title: 'قصص مسموعة',
    description: 'كل يوم قصة جديدة بصوت واضح وممتع، مع رسوم ملونة وشخصيات محبوبة، تعزز قدرات وخيال طفلك، وتثري مفرادته.',
    mainIcon: bookIcon,
    badgeIcon: <BookOpen size={20} className="text-white" />,
    bgImage: bookBg,
  },
  {
    id: 2,
    title: 'ألعاب تعليمية',
    description: 'ألعاب تعليمية ممتعة تنمي الذاكرة والتفكير، مناسبة للأطفال 4-13 سنة، مع نظام مكافآت وجوائز.',
    mainIcon: controllerIcon,
    badgeIcon: <Gamepad2 size={20} className="text-white" />,
    bgImage: controllerBg,
  },
  {
    id: 3,
    title: 'جوائز ونجوم',
    description: 'كسب شارات ونجوم في كل لعبة، وافتح قصصاً جديدة ومغامرات شيقة. كلما تقدمت، تزداد جوائزك وتتحدى نفسك',
    mainIcon: winIcon,
    badgeIcon: <Star size={20} className="text-white" />,
    bgImage: winBg,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="  py-10 px-10 flex justify-center items-center ">
      <div className="  max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="relative  rounded-[7px] p-2 flex flex-col justify-between shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#8B7BFF',
              }}
            >
              {/* Top row: badge (right) + main image (left) */}
              <div className="flex justify-between items-start relative z-10  w-full">
                <div className="w-10 h-10 bg-[#FFD54F] rounded-full flex items-center justify-center shadow-sm">
                  {card.badgeIcon}
                </div>
                <img
                  src={card.mainIcon}
                  alt={card.title}
                  className="w-60 h-60 object-contain drop-shadow-md"
                />
              </div>

              {/* Text block (anchored to bottom) */}
              <div className="w-full h-40 text-right relative z-10 pt-4">
                <div className="px-2">
                  <h3 className="text-white text-3xl md:text-4xl font-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#2D1A5E] text-base md:font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;