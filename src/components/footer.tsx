import { FaGlobe, FaGg, FaEye } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Signup Section */}
      <div className="text-center border-b border-black pb-6">
        <h3 className="text-sm font-bold tracking-widest">SIGN UP FOR GUCCI UPDATES</h3>
        <p className="mt-3 text-lg">
          Get exclusive updates on the collection's launch, personalized
          communication, and the House's latest news.
        </p>
        <button className="mt-4 border-black px-4 py-2 uppercase text-sm tracking-wider">
          + Subscribe
        </button>
      </div>

      {/* Footer Links & Forms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-10">
        {/* Help Section */}
        <div>
          <h4 className="font-bold text-sm">MAY WE HELP YOU?</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">My Order</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Email Unsubscribe</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-bold text-sm">THE COMPANY</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><a href="#">About Gucci</a></li>
            <li><a href="#">Gucci Equilibrium</a></li>
            <li><a href="#">Code of Ethics</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy & Cookie Policy</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>

        {/* Store Locator & Newsletter */}
        <div>
          <h4 className="font-bold text-sm">STORE LOCATOR</h4>
          <div className="mt-3 border-b pb-2 text-gray-400">Country/Region, City</div>

          <h4 className="font-bold text-sm mt-6">SIGN UP FOR GUCCI UPDATES</h4>
          <p className="text-gray-400 mt-2 text-sm">
            By entering your email, you consent to receiving our newsletter. More details in our 
            <a href="#" className="underline"> Privacy Policy.</a>
          </p>
          <div className="mt-3 border-b pb-2 text-gray-400">Email</div>

          <h4 className="font-bold text-sm mt-6">COUNTRY/REGION</h4>
          <p className="text-white mt-2">UNITED STATES</p>
        </div>
      </div>

      {/* Gucci Services */}
      <div className="text-center mt-10 border-t border-black pt-6">
        <h4 className="font-bold text-sm">GUCCI SERVICES</h4>
        <ul className="mt-3 space-y-2 text-gray-400">
          <li><a href="#" className="font-bold">Discover Our Services</a></li>
          <li><a href="#">Book an Appointment</a></li>
          <li><a href="#">Collect In Store</a></li>
        </ul>
      </div>

      {/* Logos & Copyright */}
      <div className="flex justify-center items-center space-x-6 mt-8">
        <FaGlobe size={24} />
        <FaGg size={24} />
        <FaEye size={24} />
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">
        © 2016 - 2022 Guccio Gucci S.p.A. All rights reserved.
      </p>

      {/* Big Gucci Text */}
      <div className="text-center mt-10 text-6xl font-bold tracking-wider">
        GUCCI
      </div>
    </footer>
  );
}
