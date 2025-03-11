import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#e9e1de] shadow-md w-full fixed top-0 left-0 z-50">
      <div className="w-full mx-auto px-4 md:px-14 lg:px-20">
        <div className="flex justify-between gap-5 items-center py-4">
          <Link
            to="/"
            className="hidden md:block text-2xl font-bold text-gray-800"
          >
            ARZKEN
          </Link>

          <div className="relative w-full max-w-xl">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for products..."
              className="w-full h-10 md:h-12 pl-5 pr-24 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none shadow-sm transition-all duration-300 text-gray-800 text-lg"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-5 md:px-6 py-2 md:py-3 rounded-r-full text-sm h-10 md:h-12 font-medium cursor-pointer flex items-center justify-center hover:bg-gray-700 transition shadow-md">
              <Link to="/collections">Search</Link>
            </span>
          </div>

          <Link to="/profile">
            <div
              className="min-w-12 w-12 h-12 md:w-14 md:h-14 rounded-full bg-center bg-cover border-[1.5px] border-gray-600 cursor-pointer p-[1px] hover:shadow-lg transition-shadow"
              style={{ backgroundImage: "url('/profile.webp')" }}
            ></div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
