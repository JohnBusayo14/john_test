// src/components/HousingSection.js
import React from 'react';
import email from '../assets/email.png'
import attachment2 from "../assets/attachment2.svg"

const Emailsection = () => {
  return (
    <section className="w-full min-h-[500px] bg-white py-12 ">
      <div className="max-w-[80%]  mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
      
     
      {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-[32px] font-[700] text-[#FF6B38] mb-4 font-Overlock">Schrijf je in voor onze nieuwsbrief</h2>
          <p className="text-[#000000] text-[16px] font-[400] leading-[24px] mb-4">
          Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist. 

         
          </p>
          <p className="text-[#000000] text-[16px] font-[400] leading-[24px] mb-4">
          Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
          </p>

          <a
          href="#learnmore"
          className=" mb-5 flex flex-row justify-center items-center text-white text-[16px] w-[131px] h-[40px] rounded-[8px] shadow-md hover:opacity-90 transition duration-300"
          style={{
            background: 'linear-gradient(84.67deg, #FF6B38 0%, #FFD201 100%)',
          }}
          
        >
        Inschrijven
        </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative">

        <img
              src={attachment2} 
              alt="Housing Improvements"
              className="w-[254px] h-[274px] rounded-lg  absolute bottom-[-50px] right-[-80px] z-10 "
            />
  
            <img
              src={email} 
              alt="Housing Improvements"
              className="w-full h-auto rounded-lg  z-[1000] relative"
            />
          </div>
        
      </div>
    </section>
  );
};

export default Emailsection;
