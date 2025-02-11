'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative  w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image 
          src="/Hero.png" 
          alt="Spring Summer 2025" 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="absolute bottom-10 text-center text-white z-10 w-full">
        <h1 className="text-4xl">Spring Summer 2025</h1>
        <div className="mt-2 flex justify-center gap-2">
          <Link 
            href="#" 
            className="px-6 py-3 bg-white text-black text-xs font-semibold transition-transform duration-300 hover:scale-105 "
          >
            FOR HER
          </Link>
          <Link 
            href="#" 
            className="px-6 py-3 bg-white text-black text-xs font-semibold transition-transform duration-300 hover:scale-105 "
          >
            FOR HIM
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
