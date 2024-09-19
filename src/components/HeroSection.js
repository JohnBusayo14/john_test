
import React from 'react';
import backgroundImage from '../assets/HeroBackground.png';
import hammerIcon from "../assets/HammerIcon.svg"
import handdeposit from "../assets/HandDepositIcon.svg"
import chatcircle from "../assets/ChatsCircle.svg"


const HeroSection = () => {
  return (
    <section className="
   bg-cover bg-center h-[560px] flex flex-col justify-end items-center text-center text-white"
   style={{ backgroundImage: `url(${backgroundImage})` }}>
    
    

      {/* section for the text and buttons */}
      <div className='flex flex-col justify-center md:items-start items-center  '>
      <p className="text-[24px] text md:text-[24px] leading-[36px] pb-5">Kies uit een van de onderstaande opties</p>
      <div className="flex flex-col mb-6 md:flex-row space-y-9 md:space-y-0 md:space-x-4">
      
        <a
          href="#tehuur"
          className="bg-white text-[#39468C] font-[600] w-[288px] h-[64px] gap-2 md:w-[288px] md:h-[64px] flex justify-start pl-4 items-center rounded-lg shadow-md hover:bg-gray-200 ">
          <img src={hammerIcon} alt='hammericon' className='w-[24px] h-[24px] '/>  
Reparatie melden
        </a>
        <a
        href="#tehuur"
        className="bg-white text-[#39468C] font-[600] w-[288px] h-[64px] gap-2 md:w-[288px] md:h-[64px] flex justify-start pl-4 items-center rounded-lg shadow-md hover:bg-gray-200 ">
        <img src={handdeposit} alt='hammericon' className='w-[20px] h-[20px] '/>  
        Huur betalen
      </a>
      <a
      href="#tehuur"
      className="bg-white text-[#39468C] font-[600] w-[288px] h-[64px] gap-2 md:w-[288px] md:h-[64px] flex justify-start pl-4 items-center rounded-lg shadow-md hover:bg-gray-200 ">
      <img src={chatcircle} alt='hammericon' className='w-[20px] h-[20px] '/>  
      Contact
    </a>
      </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
