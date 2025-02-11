'use client';

import Image from 'next/image';

const categories = [
  { id: 1, title: "Women's Handbags", image: '/woman1.png' },
  { id: 2, title: "Women's Shoes", image: '/woman2.png' },
  { id: 3, title: "Men's Bags", image: '/man3.png' },
  { id: 4, title: "Men's Shoes", image: '/man4.png' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-black">
      <h2 className="text-center text-white text-3xl mb-10">CURATED BY THE HOUSE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div key={category.id} className="group overflow-hidden ">
            <div className="relative w-full h-96 transition-transform duration-500 ease-out group-hover:scale-105">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-center text-white mt-4 text-lg ">{category.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
