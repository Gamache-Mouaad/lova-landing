// src/components/sections/StoriesSection.tsx
import { Link } from 'react-router-dom';
import itemGrupe from '../../assets/use/itemgrupe.png';
import lovaLogo from '../../assets/logo/lova.png';

const categories = ['مغامرات', 'خيال', 'علوم', 'قصص قبل النوم', 'تربية وقيم'];

export const StoriesSection = () => {
  return (
    <section className="  py-10 px-10 md:px-10 lg:px-16">
      <div className=" w-full h-auto p-10 md:p-45 lg:p-45 ">
        {/* Grid with two columns – image on right, text on left */}
        <div className=" w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* RIGHT COLUMN (text) – first in markup (will appear on left in RTL) – but we want text on left, so place text first */}
          <div className="text-right order-1 lg:order-1">
            <img src={lovaLogo} alt="Lova" className="h-15 w-auto inline-block mb-6" />

            <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-[#1A1A1A] leading-tight">
              مغامرات
              <span className="relative inline-flex items-center gap-2">
                <span className="relative px-4 py-1 rounded-full ">
                  قرائية
                </span>
                <span className="absolute -bottom-2 -right-2 text-[#FFD54F] text-lg">★</span>
              </span>
              <br />
              في كل قصة
            </h2>

            <p className="mt-6 text-2xl  font-medium  text-[#6B6B78] leading-relaxed max-w-lg">
              استمع أو شاهد أو اقرأ اختر طريقك في عالم من الحكايات العربية الممتعة.
              قصص تنمي الخيال وتعلم القيم.
            </p>

            <div className="flex  flex-wrap gap-3 mt-4 justify-start">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-[#8B7BFF] text-white text-sm font-medium px-6 py-2 rounded-[5px] shadow-sm hover:bg-[#7A6BE8] transition-colors cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/stories"
                className="inline-block bg-[#FFD54F] text-[#2D2D2D] text-lg font-bold px-20 py-3 rounded-[5px] hover:text-white  hover:bg-[#8e38ff] transition-all duration-300 ease-in hover:px-25"
              >
                ابدأ الآن
              </Link>
            </div>
          </div>

          {/* LEFT COLUMN (visual image) – second in markup (will appear on right in RTL) – but we want image on right, so place image second */}
          <div className="flex justify-center order-2 lg:order-2">
            <img

              src={itemGrupe}
              alt="Story illustrations"
              className=" w-200 h-auto object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;