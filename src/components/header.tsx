"use client";

import { useState } from "react";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-gray-700 bg-black text-white relative z-[60]">
        {/* Left Section */}
        <div className="hidden md:flex items-center space-x-2 group">
          <span className="text-xl transition-transform duration-300 group-hover:rotate-90">+</span>
          <a href="#" className="text-sm font-medium">Contact Us</a>
        </div>

        {/* Center Section - Clickable Logo */}
        <a href="/" className="text-2xl md:text-4xl font-serif tracking-widest flex-1 text-center">GUCCI</a>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-5 md:space-x-7">
          <ShoppingBag className="w-5 h-5 cursor-pointer hidden md:block" />
          <User className="w-5 h-5 cursor-pointer hidden md:block" />
          <Search className="w-5 h-5 cursor-pointer hidden md:block" />
          <button onClick={() => setIsOpen(true)} className="flex items-center space-x-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-500 ${
          isOpen ? "backdrop-blur-md bg-black/50 pointer-events-auto" : "backdrop-blur-0 bg-transparent pointer-events-none"
        } z-[40]`} // Ensuring it's behind images
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Side Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 md:w-1/2 bg-gray-950 text-white shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-[50] overflow-hidden`} // Added overflow-hidden to prevent layout shifts
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-gray-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="h-full overflow-y-auto px-28 md:px-14 mt-14 pt-10 pb-20">
          {/* Menu Items */}
          <nav className="flex flex-col items-start space-y-4 text-lg font-medium">
            <a href="#" className="hover:text-gray-400">Gifts</a>
            <a href="#" className="hover:text-gray-400">New In</a>
            <a href="#" className="hover:text-gray-400">Handbags</a>
            <a href="#" className="hover:text-gray-400">Travel</a>
            <a href="#" className="hover:text-gray-400">Women</a>
            <a href="#" className="hover:text-gray-400">Men</a>
            <a href="#" className="hover:text-gray-400">Children</a>
            <a href="#" className="hover:text-gray-400">Jewelry & Watches</a>
            <a href="#" className="hover:text-gray-400">Décor & Lifestyle</a>
            <a href="#" className="hover:text-gray-400">Fragrances & Make-Up</a>
            {/* Extra Items to Test Scrolling */}
            <a href="#" className="hover:text-gray-400">Clothing</a>
            <a href="#" className="hover:text-gray-400">Accessories</a>
            <a href="#" className="hover:text-gray-400">Watches</a>
            <a href="#" className="hover:text-gray-400">Eyewear</a>
            <a href="#" className="hover:text-gray-400">Sale</a>
            <a href="#" className="hover:text-gray-400">Exclusives</a>
            <a href="#" className="hover:text-gray-400">Runway</a>
          </nav>
        </div>
      </div>
    </>
  );
}
