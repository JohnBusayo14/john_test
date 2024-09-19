
import React from 'react';
import facebook from "../assets/facebook.svg";
import linkdln from "../assets/linkdln.svg";

const Contactsection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-[90%] mx-auto px-4 flex flex-col md:flex-row md:justify-between items-start md:items-center">
        
        {/* Contact Information */}
        <div className="w-full md:w-[20%] mb-8 md:mb-0 flex flex-col justify-between items-start ">
          <h1 className="text-black font-bold text-[20px] leading-[24.4px] mb-2">Bel of mail ons</h1>
          <p className="text-[16px] font-normal leading-[24px]">
            012 - 345 67 89 <br />
            klantenservice@knu
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-[25%] mb-8 md:mb-0 flex flex-col justify-between items-start">
          <h1 className="text-black font-bold text-[20px] leading-[24.4px] mb-2">Openingstijden</h1>
          <p className="text-[16px] font-normal leading-[24px]">
            Maandag t/m donderdag van 8:30 tot 16:30 uur. <br />
            Vrijdag van 8:30 tot 12:00 uur
          </p>
        </div>

        {/* Contact Address */}
        <div className="w-full md:w-[25%] mb-8 md:mb-0 flex flex-col justify-between items-start">
          <h1 className="text-black font-bold text-[20px] leading-[24.4px] mb-2">Kom langs op afspraak</h1>
          <p className="text-[16px] font-normal leading-[24px]">
            Straatweglaan 123 <br />
            1234 AB Dorpstad
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="w-full md:w-[25%] flex flex-col justify-between items-start">
          <h1 className="text-black font-bold text-[20px] leading-[24.4px] mb-2">Volg ons op onze sociale kanalen</h1>
          
         
          <div className="flex items-center space-x-2">
            <img
              className="w-[28px] h-[28px]"
              src={facebook}
              alt="Facebook"
            />
            <img
              className="w-[28px] h-[28px]"
              src={linkdln}
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
