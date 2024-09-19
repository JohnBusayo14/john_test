
import React from 'react';
import clock from "../assets/clock.jpg"
import factory from "../assets/factory.jpg"
import telephone from "../assets/telephone.jpg"
import arrow from "../assets/arrow.png"


const LatestNewsSection = () => {
  const newsItems = [
    {
      id: 1,
      image: telephone, 
      date:"5 maart 2024",
      title: 'Telefoonstoring',
      description: 'Update: Telefoonstoring verholpen',
      link: '#learnmore',
    },
    {
      id: 2,
      image: clock, 
      date:"17 februari 2024",
      title: 'Energiebesparing - Wat doet KnusWonen?',
      description: 'KnusWonen werkt hard aan het energiezuiniger maken van ...',
      link: '#learnmore',
    },
    {
      id: 3,
      image: factory, 
      date: "30 januari 2024",
      title: 'Energietoeslag: Heeft u er recht op?',
      description: 'Steeds meer mensen hebben moeite om hun energierekening te ...',
      link: '#learnmore',
    },
  ];

  return (
    <section className="bg-[#9AA4D9] py-12">
      <div className="max-w-[80%]  mx-auto px-4 flex flex-col items-start">
        {/* Title */}
        <h2 className="text-3xl font-[700] font-[Overlock] text-center text-[#39468C] mb-8">
          Laatste nieuws
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-gray-100 p-0 rounded-lg shadow-md relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className=' w-full p-6'>
              <span className=' text-[11px] font-[600] text-[#999999]'>{item.date}</span>
              <h3 className="text-[20px] font-[700] mb-2 text-[#39468C] font-[overlock]">{item.title}</h3>
              <p className="text-[14px] font-[400] text-[#39468C] mb-4">{item.description}</p>
              
              <div className='w-[80%] h-[21px] flex flex-row absolute bottom-0  justify-end items-center mb-2 gap-2 '>
              <a
                href={item.link}
                className="text-[#39468C] text-[14px] font-[500] hover:underline"
              >
                Learn More
              </a>
              <img src={arrow} alt='arrow-left' className='w-[12px] h-[10px]'/>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/*The last part with an arrow*/}
        <div className='w-full mt-3 h-[21px] flex flex-row  bottom-0  justify-end items-center mb-2 gap-2 '>
              <a
                href="#go"
                className="text-[#39468C] text-[14px] font-[500] hover:underline"
              >
              Bekijk alle nieuwsberichten
              </a>
              <img src={arrow} alt='arrow-left' className='w-[12px] h-[10px]'/>
              </div>


      </div>
    </section>
  );
};

export default LatestNewsSection;
