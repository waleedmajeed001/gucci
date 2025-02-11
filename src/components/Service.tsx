'use client';

import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="max-w-7xl bg-black mx-auto px-6 py-12 text-center">
      {/* Section Title */}
      <h2 className="text-3xl text-white font-semibold mb-10">GUCCI SERVICES</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service Card */}
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full max-w-[350px] mx-auto transform transition duration-300 hover:scale-105"
          >
            <div className="w-full h-[350px] relative overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition duration-300 hover:scale-110"
              />
            </div>
            <h3 className="mt-6 text-lg text-white font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-400 text-sm max-w-xs">{service.description}</p>
            <a
              href="#"
              className="mt-4 text-sm text-white font-semibold relative inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {service.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Service Data
const services = [
  {
    title: "PERSONALIZATION",
    image: "/vedio1.png",
    description:
      "Emboss select bags, luggage, belts, leather accessories, and items from the pet collection with initials to create a truly unique piece.",
    linkText: "Discover The Collection",
  },
  {
    title: "BOOK AN APPOINTMENT",
    image: "/vedio2.png",
    description:
      "Enjoy priority access to the boutique of your choice at the time and date that suits you. When you arrive, your Client Advisor will guide you through a hand-picked selection of pieces for you to try-on and style.",
    linkText: "Book an In-Store Appointment",
  },
  {
    title: "COLLECT IN STORE",
    image: "/vedio3.png",
    description: "Order online and collect your order from your preferred Gucci boutique.",
    linkText: "Discover How",
  },
];

export default ServicesSection;
