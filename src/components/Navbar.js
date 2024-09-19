import React, { useState } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import profile from "../assets/profile.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // This function is used to handle closing the modal when the user clicks outside of the modal
  const handleCloseModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-[80%] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <img className="h-8 w-auto" src={logo} alt="KnusWonen" />
          </div>

          {/* Navigation menu items */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#tehuur"
              className="text-[#39468C] font-[600] leading-[24px] hover:text-[#9d4edd] text-[16px] font-[poppins]"
            >
              Te Huur
            </a>
            <a
              href="#tekoop"
              className="text-[#39468C] font-[600] leading-[24px] hover:text-[#9d4edd] text-[16px] font-[poppins]"
            >
              Te Koop
            </a>
            <a
              href="#overons"
              className="text-[#39468C] font-[600] leading-[24px] hover:text-[#9d4edd] text-[16px] font-[poppins]"
            >
              Over Ons
            </a>
            <a
              href="#projecten"
              className="text-[#39468C] font-[600] leading-[24px] hover:text-[#9d4edd] text-[16px] font-[poppins]"
            >
              Projecten
            </a>
            <a
              href="#contact"
              className="text-[#39468C] font-[600] leading-[24px] hover:text-[#9d4edd] text-[16px] font-[poppins]"
            >
              Contact
            </a>
          </div>

          {/* Search and Profile Icons at the */}
          <div className="hidden md:flex items-center space-x-4">
            <img className="w-[28px] h-[28px]" src={search} alt="KnusWonen" />
            <img className="w-[28px] h-[28px]" src={profile} alt="KnusWonen" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-[#9d4edd] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 md:hidden"
          onClick={handleCloseModal}
        >
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-lg w-[80%] max-w-[400px] text-center space-y-4">
            <a
              href="#tehuur"
              className="block text-[#39468C] font-[600] leading-[24px] hover:text-purple-600 text-[16px] font-[poppins] py-2"
              onClick={() => setIsOpen(false)}
            >
              Te Huur
            </a>
            <a
              href="#tekoop"
              className="block text-[#39468C] font-[600] leading-[24px] hover:text-purple-600 text-[16px] font-[poppins] py-2"
              onClick={() => setIsOpen(false)}
            >
              Te Koop
            </a>
            <a
              href="#overons"
              className="block text-[#39468C] font-[600] leading-[24px] hover:text-purple-600 text-[16px] font-[poppins] py-2"
              onClick={() => setIsOpen(false)}
            >
              Over Ons
            </a>
            <a
              href="#projecten"
              className="block text-[#39468C] font-[600] leading-[24px] hover:text-purple-600 text-[16px] font-[poppins] py-2"
              onClick={() => setIsOpen(false)}
            >
              Projecten
            </a>
            <a
              href="#contact"
              className="block text-[#39468C] font-[600] leading-[24px] hover:text-purple-600 text-[16px] font-[poppins] py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
