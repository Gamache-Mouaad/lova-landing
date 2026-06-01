// src/components/sections/HeroSection.tsx
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

// Background image (full cover)
import starsBg from '../../assets/items/stars.png';

// Floating elements from design
import item1 from '../../assets/items/1.png';
import item2 from '../../assets/items/2.png';
import item3 from '../../assets/items/3.png';
import item4 from '../../assets/items/4.png';
import item5 from '../../assets/items/5.png';
import Seco from '../../assets/items/secol.png';
import lovaSmile from '../../assets/items/lovasmile.png';

// Character & photo images
import kid1 from '../../assets/items/kid-1.png';
import kid2 from '../../assets/items/kid2.png';
import kidsGrupe from '../../assets/items/kidsgrupe.png';
import Dahook from '../../assets/items/da7ook.png';
import Mood from '../../assets/items/mood.png';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[900px] overflow-hidden p-20  mt-30 z-40"
      style={{

        backgroundImage: `url(${starsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="relative max-w-6xl mx-auto">

          {/* Decorative Items – now on top of the text (z-30 > z-20) */}
          <div className="relative">
            {/* Seco – centered above Lova logo */}
            <img
              src={Seco}
              alt=""
              className=" hidden lg:flex  absolute -top-[60px] left-[600px] transform -translate-x-1/2 w-110 md:w-106 z-30"
            />

            {/* Pen (item2) – above the word “سمعية” */}
            <img
              src={item2}
              alt=""
              className=" hidden lg:flex md:flex absolute -top-23 left-230  transform -translate-x-1/2 w-16 md:w-30 z-30"
            />

            {/* Game controller – top-left */}
            <img
              src={item3}
              alt=""
              className=" hidden lg:flex md:flex absolute -top-[-45px] left-[90%] w-45 md:w-60 z-30"
            />

            {/* Rocket – top-right */}
            <img
              src={item4}
              alt=""
              className=" hidden lg:flex md:flex absolute -top-[-105px] right-[65%] w-20 md:w-30 z-30"
            />

            {/* Orange flower – above “ألعاب” */}
            <img
              src={item1}
              alt=""
              className="  lg:flex md:flex sm:flex  absolute top-[-100px] lg:-top-[50px] md:-top-[50px] left-[200px] md:left-[100px] lg:left-[100px]  w-20 md:w-28 z-30"
            />

            {/* Lollipop – bottom-left */}
            <img
              src={item5}
              alt=""
              className=" hidden lg:flex md:flex absolute bottom-[-250px] left-[8%] w-20 md:w-28 z-30"
            />
          </div>

          {/* Side kid images with backdrop shapes (keep lower z-index) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-72 hidden lg:block z-30">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8B7BFF]/20 rounded-full blur-3xl scale-125" />
              <img src={kid1} alt="Boy" className="relative z-10 w-full" />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-72 hidden lg:block z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFD54F]/20 rounded-full blur-3xl scale-125" />
              <img src={kid2} alt="Girl" className="relative z-10 w-full" />
            </div>
          </div>

          {/* Main Typography (z-20, so items above with z-30 will overlay) */}
          <div className="relative z-20">
            <h1 className="flex flex-wrap items-center justify-center gap-4 text-7xl md:text-[120px] font-black text-[#1a1a1a] tracking-tighter leading-none">
              <span>عالم</span>
              <img src={lovaSmile} alt="Lova" className="h-24 md:h-28 w-auto inline-block" />
              <span>ألعاب</span>
            </h1>
            <h2 className="mt-2 text-7xl md:text-[120px] font-black text-[#1a1a1a] tracking-tight flex items-center justify-center gap-4">
              وحكايات <span className="text-[#8B7BFF] relative">سمعية</span>
            </h2>

            {/* Subtext */}
            <div className="mt-6 space-y-1 font-medium">
              <p className="mx-auto max-w-4xl text-xl md:text-[28px] text-[#6B6B78] leading-tight">
                منصة أطفال عربية آمنة تجمع القصص المسموعة، الألعاب
              </p>
              <p className="mx-auto max-w-4xl text-xl md:text-[28px] text-[#6B6B78] leading-tight">
                التعليمية، والمغامرات الصوتية
              </p>
              <p className="text-lg md:text-xl text-[#8B7BFF] mt-2">
                لأعمار 6-13 سنة. ضحوك صديق صغارك في القصص والألعاب
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 font-medium">
              <Link
                to="/trial"
                className="rounded-[7px] bg-[#8B7BFF] px-6 md:px-12 py-2.5 md:py-2 text-base md:text-lg text-white shadow-md"
              >
                جرب مجاناً 15 أيام
              </Link>

              <Link
                to="/about"
                className="rounded-[7px] bg-[#FFD54F] px-6 md:px-12 py-2.5 md:py-2 text-base md:text-lg text-[#2D2D2D] shadow-md flex items-center gap-2"
              >
                <Play size={18} fill="#2D2D2D" className="text-[#2D2D2D]" />
                <span>شاهد الفيديو</span>
              </Link>
            </div>

            {/* Trust Badge with characters */}
            <div className="flex justify-center items-center gap-4 w-full mt-16">
              <div className="flex justify-center items-center gap-6 w-full max-w-4xl">
                <img className=" hidden lg:flex md:flex h-40 md:h-48 w-auto" src={Dahook} alt="Dahook" />
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm md:text-base font-bold text-[#6B6B78]">
                      انضم إلى أكثر من <span className="text-[#8B7BFF]">5000</span> أسرة عربية
                    </p>
                    <img src={kidsGrupe} alt="Kids group" className="h-8 w-auto" />
                  </div>
                </div>
                <img className=" hidden lg:flex md:flex h-40 md:h-48 w-auto" src={Mood} alt="Mood" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;