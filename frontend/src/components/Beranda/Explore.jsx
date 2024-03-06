import React, { useState } from 'react';
import ExploreCard from './ExploreCard';
import Maps from './Maps';
import { AiFillHome } from 'react-icons/ai';

import cardImage1 from '../../assets/card-image-1.webp';
import cardImage2 from '../../assets/card-image-2.webp';
import cardImage3 from '../../assets/card-image-3.webp';
import cardImage4 from '../../assets/card-image-4.webp';
import cardImage5 from '../../assets/card-image-5.webp';

const Explore = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const cardContent = [
    {
      title: 'Umbul Sidomukti',
      description: 'Menemukan surga tersembunyi di Bandungan',
      image: cardImage1,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15833.618429787115!2d110.3733583!3d-7.1945903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70871c6fdc3481%3A0xdb78bfcef26cb6b6!2sUmbul%20Sidomukti!5e0!3m2!1sen!2sid!4v1709654055969!5m2!1sen!2sid',
    },
    {
      title: 'Taman Bunga Celosia',
      description: 'Keceriaan taman bunga paling indah di Semarang',
      image: cardImage2,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1476321975765!2d110.34239387499933!3d-7.223996392781966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7080b3163488d7%3A0x190ff6c3684e9814!2sCelosia%20Flower%20Garden!5e0!3m2!1sen!2sid!4v1709654166243!5m2!1sen!2sid',
    },
    {
      title: 'Candi Gedong Songo',
      description: 'Memperoleh campuran budaya sejarah dan keindahan alam',
      image: cardImage3,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.26874962715!2d110.33944737499921!3d-7.210151592795511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70874ef3f95a73%3A0x5331ed5ca2e4242a!2sGedong%20Songo%20Temple!5e0!3m2!1sen!2sid!4v1709654237793!5m2!1sen!2sid',
    },
    {
      title: 'Gedong Pass',
      description: 'Eksplorasi menakjubkan di atas awan',
      image: cardImage4,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.4439851756865!2d110.4441297!3d-7.4160147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7b99627cad03%3A0xacc0ff39391296c0!2sGedong%20Pass%20(G-Pass)!5e0!3m2!1sen!2sid!4v1709654294140!5m2!1sen!2sid',
    },
    {
      title: 'Sunrise Hill Gedong Songo',
      description: 'Negeri matahari terbit di Jawa Tengah',
      image: cardImage5,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.247740657387!2d110.3444924!3d-7.212555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708743a9420591%3A0x3addcade69b472a1!2sWisata%20Sunrise%20Hill%20Gedong%20Songo%20Bandungan!5e0!3m2!1sen!2sid!4v1709654379648!5m2!1sen!2sid',
    },
  ];

  const handleCardClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="bg-[#004b23]">
      <div className="flex flex-col items-center px-6 pt-6">
        <h1 className="text-2xl font-bold text-white">Jelajahi Kenteng</h1>
        <div className="flex justify-center mt-3">
          {cardContent.map((card, index) => (
            <ExploreCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              location={card.location}
              onClick={() => handleCardClick(card.location)}
            />
          ))}
        </div>
      </div>
      <div className="pb-2 mt-6">
        <Maps location={selectedLocation} />
      </div>
      <div className="flex items-center justify-center pt-2 pb-8">
        <button className='p-3 transition-all duration-300 bg-white rounded-full hover:scale-110 hover:bg-gray-200' onClick={() => setSelectedLocation("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.493641392752!2d110.3979009!3d-7.226762000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708136bdf5c051%3A0x9fe541d662334382!2sKenteng%2C%20Bandungan%2C%20Semarang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1709651687674!5m2!1sen!2sid")}>
          <AiFillHome size={25} />
        </button>
      </div>
    </div>
  );
};

export default Explore;
