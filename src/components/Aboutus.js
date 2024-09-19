
import React from 'react';
import housing from "../assets/housing.jpg"
import attachment from "../assets/attachment.svg"
const Aboutus = () => {
  return (
    <section className="w-full min-h-[500px] bg-white py-12 ">
      <div className="max-w-[80%]  mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
      
      <div className="md:w-1/2 relative">

      <img
            src={attachment} 
            alt="Housing Improvements"
            className="w-[254px] h-[274px] rounded-lg  absolute top-[-50px] left-[-80px] z-10 "
          />

          <img
            src={housing} 
            alt="Housing Improvements"
            className="w-full h-auto rounded-lg  z-[1000] relative"
          />
        </div>
      {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-[32px] font-[700] text-[#35BCE7] mb-4 font-Overlock">We verbeteren onze woningen</h2>
          <p className="text-[#000000] text-[16px] font-[400] leading-[24px] mb-4">
            Elke woningen worden van tijd tot tijd grondig onderhouden en verbeterd. 
            Dit kan zijn het vernieuwen van keukens, badkamers, kozijnen of het verbeteren van de energiezuinigheid. 
            Wij zorgen ervoor dat onze woningen voldoen aan de nieuwste normen en wensen.
          </p>
          <p className="text-[#000000] text-[16px] font-[400] leading-[24px] mb-4">
            Wilt u meer weten over onze werkzaamheden en projecten?
          </p>

          <a
          href="#learnmore"
          className=" mb-5 flex flex-row justify-center items-center text-white text-[16px] w-[131px] h-[40px] rounded-[8px] shadow-md hover:opacity-90 transition duration-300"
          style={{
            background: 'linear-gradient(84.67deg, #BFE27D 0%, #35BCE7 100%)',
          }}
        >
          Learn More
        </a>
        </div>

        
        
      </div>
    </section>
  );
};

export default Aboutus;
