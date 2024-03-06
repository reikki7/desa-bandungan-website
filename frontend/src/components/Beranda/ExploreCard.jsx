import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'

const ExploreCard = ({ title, description, image, onClick }) => {

  ExploreCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    setPosition({ x, y });
  };

  const [fontSize, setFontSize] = useState('0.8em');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFontSize('0.6em');
      } else if (window.innerWidth < 768) {
        setFontSize('0.7em');
      } else if (window.innerWidth < 1024) {
        setFontSize('0.8em');
      } else {
        setFontSize('1em');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <button
      className="relative m-[2.5px] sm:m-[5px] md:m-[7px] lg:m-[9px] transition-all hover:scale-105"
      onMouseMove={handleMouseMove}
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' && onClick()} // make it respond to "Enter" key
      style={{
        boxShadow: "8px 8px px #0c3e1f",
        borderRadius: "14px",
        overflow: "hidden",
        border: "none",
        padding: 0,
        backgroundColor: "transparent",
      }}
    >
      <div
        className="relative w-[68px] h-24 overflow-hidden transition-all duration-300 rounded-lg shadow-2xl cursor-pointer xl:w-56 xl:h-80 sm:w-28 sm:h-40 md:w-32 md:h-48 lg:w-44 lg:h-64 hover:shadow-2xl hover:scale-105"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        style={{ pointerEvents: "none", border: "none", background: "none" }}
      >
        <img
          alt="Explore"
          className="absolute inset-0 object-cover w-full h-full"
          style={{
            transform: `translate(${position.x * 20}px, ${position.y * 20}px) scale(1.4)`,
            pointerEvents: "auto",
          }}
          src={image}
        />
        <div
          className={`absolute inset-0 ${hovered
            ? "bg-gradient-to-t from-black to-transparent"
            : "bg-gradient-to-t from-black to-transparent opacity-75"
            } transition-opacity duration-300`}
        ></div>
      </div>
      <div className="absolute bottom-0 z-10 flex flex-col gap-1 p-3 text-white text-start"
        style={{ pointerEvents: "none" }}>
        <h2
          className="font-bold"
          style={{ fontSize: fontSize }}
        >
          {title}
        </h2>
        <p className={`hidden text-sm opacity-75 ${hovered ? "lg:block" : "lg:hidden"}`} style={{ textAlign: "left" }}>
          {description}
        </p>
      </div>
    </button >
  );
};

export default ExploreCard;
