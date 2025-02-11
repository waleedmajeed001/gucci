'use client';

import Image from 'next/image';

const Womantag = () => {
  return (
    <section className="relative bg-black w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/womantag1.png" // Change this to your actual image path
          alt="Women's Fashion"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* "WOMEN" Tag - Fixed at Top */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-1 text-sm ">
        WOMEN
      </div>

      {/* Overlay Content (Shifted Down) */}
      <div className="absolute bottom-16 w-full flex flex-col items-center text-white text-center px-6">
        {/* Title & Description */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-sm">
            Distinctive Palette and Silhouettes
          </p>
          <h1 className="text-4xl sm:text-5xl mt-2">Ready-to-Wear</h1>
        </div>

        {/* Button */}
        <button className="mt-6 px-6 py-3 text-black font-semibold border border-black hover:scale-105 hover:bg-gray-200 transition">
             SHOP NOW
        </button>

      </div>
    </section>
  );
};

export default Womantag;
