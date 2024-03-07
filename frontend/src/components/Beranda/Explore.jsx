import { useState } from "react";
import ExploreCard from "./ExploreCard";
import Maps from "./Maps";
import { AiFillHome } from "react-icons/ai";

import cardImage1 from "../../assets/card-image-1.webp";
import cardImage2 from "../../assets/card-image-2.webp";
import cardImage3 from "../../assets/card-image-3.webp";
import cardImage4 from "../../assets/card-image-4.webp";
import cardImage5 from "../../assets/card-image-5.webp";

import exploreImage0 from "../../assets/explore preview/desa-kenteng.webp";
import exploreImage1 from "../../assets/explore preview/umbul-sidomukti.webp";
import exploreImage2 from "../../assets/explore preview/taman-bunga-celosia.webp";
import exploreImage3 from "../../assets/explore preview/candi-gedong-songo.webp";
import exploreImage4 from "../../assets/explore preview/gedong-pass.webp";
import exploreImage5 from "../../assets/explore preview/sunrise-hill-gedong-songo.webp";

const Explore = () => {
  const descriptions = [
    "Kawasan Wisata Umbul Sidomukti merupakan obyek wisata alam pegunungan yang terletak di Desa Sidomukti Jimbaran, Kecamatan Bandungan, Kabupaten Semarang, Jawa Tengah. Umbul Sidomukti berada di lereng Gunung Ungaran dengan ketinggian 1200 mdpl yang menjadikan hawa dingin dan udara sangat menyegarkan. Ikon wisata ini terletak pada kolam renang dari mata air alami yang airnya dingin dan segar. Aktivitas yang dapat dilakukan diantaranya seperti berenang, wahana pacu adrenaline, outbond sambil menikmati pemandangan alam. Selain itu kawasan wisata ini juga menyediakan penginapan, play ground, camping ground, dan fasilitas gathering di dalam areanya.",
    "Taman Bunga Celosia adalah salah satu tempat wisata yang berada di kawasan Bandungan, Semarang. Taman ini memiliki luas sekitar 1 hektar dan terletak di ketinggian 1.000 meter di atas permukaan laut. Taman Bunga Celosia memiliki keindahan bunga yang sangat menarik dan indah. Bunga celosia yang menjadi ikon taman ini memiliki warna yang beragam mulai dari merah, kuning, pink, ungu, dan masih banyak lagi. Selain itu, taman ini juga memiliki spot foto yang sangat instagramable. Taman Bunga Celosia juga memiliki fasilitas yang lengkap seperti toilet, mushola, dan tempat makan.",
    "Candi Gedong Songo adalah salah satu candi Hindu yang berada di kawasan Bandungan, Semarang. Candi ini memiliki keindahan alam yang sangat menakjubkan. Candi Gedong Songo memiliki 9 candi yang tersebar di kawasan pegunungan. Candi ini memiliki keindahan alam yang sangat menakjubkan. Candi Gedong Songo memiliki 9 candi yang tersebar di kawasan pegunungan.Candi ini memiliki keindahan alam yang sangat menakjubkan. Candi Gedong Songo memiliki 9 candi yang tersebar di kawasan pegunungan.",
    "Gedong Pass adalah salah satu tempat wisata yang berada di kawasan Bandungan, Semarang. Tempat ini memiliki keindahan alam yang sangat menakjubkan.Gedong Pass memiliki ketinggian 1.200 meter di atas permukaan laut. Tempat ini memiliki pemandangan yang sangat indah dan menakjubkan. Tempat ini memiliki pemandangan yang sangat indah dan menakjubkan. Tempat ini memiliki pemandangan yang sangat indah dan menakjubkan.",
    "Sunrise Hill Gedong Songo adalah salah satu tempat wisata yang berada di kawasan Bandungan, Semarang. Tempat ini memiliki keindahan alam yang sangat menakjubkan. Sunrise Hill Gedong Songo memiliki ketinggian 1.200 meter di atas permukaan laut. Tempat ini memiliki pemandangan yang sangat indah dan menakjubkan.Tempat ini memiliki pemandangan yang sangat indah dan menakjubkan.Tempat ini memiliki pemandangan yang sangat indah dan menakjubkan.",
  ];

  const dataDesa = [
    {
      title: "Desan Kenteng",
      description:
        "Desa Kenteng adalah desa yang terletak di Kecamatan Bandungan, Kabupaten Semarang, Jawa Tengah. Desa Kenteng memiliki keindahan alam yang sangat menakjubkan. Desa Kenteng memiliki keindahan alam yang sangat menakjubkan.Desa Kenteng memiliki keindahan alam yang sangat menakjubkan.Desa Kenteng memiliki keindahan alam yang sangat menakjubkan.",
      image: exploreImage0,
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState("");
  const [exploreImage, setExploreImage] = useState(dataDesa[0].image);
  const [exploreDescription, setExploreDescription] = useState(
    dataDesa[0].description
  );
  const [exploreTitle, setExploreTitle] = useState(dataDesa[0].title);

  const cardContent = [
    {
      title: "Umbul Sidomukti",
      description: "Menemukan surga tersembunyi di Bandungan",
      image: cardImage1,
      exploreImage: exploreImage1,
      exploreImageDescription: descriptions[0],
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15833.618429787115!2d110.3733583!3d-7.1945903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70871c6fdc3481%3A0xdb78bfcef26cb6b6!2sUmbul%20Sidomukti!5e0!3m2!1sen!2sid!4v1709654055969!5m2!1sen!2sid",
    },
    {
      title: "Taman Bunga Celosia",
      description: "Keceriaan taman bunga paling indah di Semarang",
      image: cardImage2,
      exploreImage: exploreImage2,
      exploreImageDescription: descriptions[1],
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1476321975765!2d110.34239387499933!3d-7.223996392781966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7080b3163488d7%3A0x190ff6c3684e9814!2sCelosia%20Flower%20Garden!5e0!3m2!1sen!2sid!4v1709654166243!5m2!1sen!2sid",
    },
    {
      title: "Candi Gedong Songo",
      description: "Memperoleh campuran budaya sejarah dan keindahan alam",
      image: cardImage3,
      exploreImage: exploreImage3,
      exploreImageDescription: descriptions[2],
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.26874962715!2d110.33944737499921!3d-7.210151592795511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70874ef3f95a73%3A0x5331ed5ca2e4242a!2sGedong%20Songo%20Temple!5e0!3m2!1sen!2sid!4v1709654237793!5m2!1sen!2sid",
    },
    {
      title: "Gedong Pass",
      description: "Eksplorasi menakjubkan di atas awan",
      image: cardImage4,
      exploreImage: exploreImage4,
      exploreImageDescription: descriptions[3],
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.4439851756865!2d110.4441297!3d-7.4160147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7b99627cad03%3A0xacc0ff39391296c0!2sGedong%20Pass%20(G-Pass)!5e0!3m2!1sen!2sid!4v1709654294140!5m2!1sen!2sid",
    },
    {
      title: "Sunrise Hill Gedong Songo",
      description: "Negeri matahari terbit di Jawa Tengah",
      image: cardImage5,
      exploreImage: exploreImage5,
      exploreImageDescription: descriptions[4],
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.247740657387!2d110.3444924!3d-7.212555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708743a9420591%3A0x3addcade69b472a1!2sWisata%20Sunrise%20Hill%20Gedong%20Songo%20Bandungan!5e0!3m2!1sen!2sid!4v1709654379648!5m2!1sen!2sid",
    },
  ];

  const handleCardClick = (
    location,
    exploreImage,
    exploreDescription,
    title
  ) => {
    setSelectedLocation(location);
    setExploreImage(exploreImage);
    setExploreDescription(exploreDescription);
    setExploreTitle(title);
  };

  return (
    <div className="">
      <div className="bg-[#004b23] flex flex-col items-center px-6 pt-6 py-5">
        <h1 className="text-2xl font-bold text-white">Jelajahi Kenteng</h1>
        <div className="flex justify-center mt-3">
          {cardContent.map((card, index) => (
            <ExploreCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              location={card.location}
              onClick={() =>
                handleCardClick(
                  card.location,
                  card.exploreImage,
                  card.exploreImageDescription,
                  card.title
                )
              }
            />
          ))}
        </div>
      </div>
      <div className="my-10 flex flex-col items-center justify-center p-8 rounded-lg">
        <img
          className="my-10 max-w-4xl rounded-3xl shadow-md"
          src={exploreImage}
          alt="Explore Image"
        />
        <h2 className="text-4xl font-bold text-[#051804] mb-4">
          {exploreTitle}
        </h2>
        <p className="max-w-md text-[#051804] text-center">
          {exploreDescription}
        </p>
        {/* <button className="mt-6 bg-white text-green-700 px-6 py-2 rounded-full hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
          Explore More
        </button> */}
      </div>
      <div className="bg-pb-2 mt-6 bg-[#004b23] py-6">
        <Maps location={selectedLocation} />
      </div>
      <div className="text-center gap-4 flex-col flex items-center justify-center pt-2 pb-8 bg-[#004b23]">
        <button
          className="p-3 transition-all duration-300 bg-white rounded-full hover:scale-110 hover:bg-gray-200"
          onClick={() => {
            setSelectedLocation(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.493641392752!2d110.3979009!3d-7.226762000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708136bdf5c051%3A0x9fe541d662334382!2sKenteng%2C%20Bandungan%2C%20Semarang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1709651687674!5m2!1sen!2sid"
            );
            setExploreDescription(dataDesa[0].description);
            setExploreImage(dataDesa[0].image);
            setExploreTitle(dataDesa[0].title);
          }}
        >
          <AiFillHome size={25} />
        </button>
        <p
          className="text-white font-bold text-lg"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        >
          Kembali ke Desa
        </p>
      </div>
    </div>
  );
};

export default Explore;
