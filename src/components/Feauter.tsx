'use client';

import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="flex bg-black flex-col items-center justify-center min-h-[100vh] px-6 max-w-7xl mx-auto">
      {/* Feature Title */}
      <h1 className="mt-20 text-center mb-12">FEATURED COLLECTION</h1>

      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-[700px] relative">
          <Image
            src="/mantag1.png" // Change this to your actual image path
            alt="Feature Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center p-8">
          <h2 className="text-4xl ">WHERE LIGHT FINDS US</h2>
          <p className="mt-6  text-gray-600 max-w-lg">
            Yara Shahidi and George MacKay star in the new Spring <br /> Summer 2025
            campaign, an evocative story of balance <br /> and connection.
          </p>
          <button className="mt-8 px-6 py-3 text-white font-semibold hover:scale-105 hover:text-white transition">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
