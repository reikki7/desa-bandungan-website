import { Link } from 'react-router-dom';
import { AiFillCalendar } from 'react-icons/ai';
import { FaTag } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import noImage from "../assets/no-image.webp";

const InfoCard = ({ id, name, image, link, date, type, description, page }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB');

    const [descriptionLength, setDescriptionLength] = useState(600);

    useEffect(() => {
        const handleResize = () => {
            setDescriptionLength(window.innerWidth <= 768 ? 350 : 600);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    InfoCard.propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired,
    };


    return (
        <div className="p-5 m-6 mx-auto overflow-hidden bg-white border-b-gray-300 border-b max-w-[1200px] hover:scale-[102%] duration-500">
            <Link to={{ pathname: `/${page}/${id}` }}>
                <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className="w-[320px] h-[220px] bg-gray-100 border-b border-gray-200">
                        {image ? (
                            <img src={`https://visitdesakenteng.id/images/${link}IMG/${image.replace(/\s/g, "%20")}`} alt="event" className="object-cover w-full h-full" />
                        ) : (
                            <img src={noImage} alt="default" className="object-cover w-full h-full" />
                        )}
                    </div>
                    <div className="flex flex-col justify-between w-full px-1 py-4 sm:w-3/4 sm:px-6">
                        <div>
                            <h2 className="mb-2 text-xl font-bold">{name}</h2>
                            <div className="flex items-center mb-2 space-x-4 text-sm text-gray-400">
                                <div className='flex items-center gap-2'>
                                    <AiFillCalendar className='mb-0.5' />
                                    <p>{formattedDate}</p>
                                </div>
                                <span>|</span>
                                <div className='flex items-center gap-2'>
                                    <FaTag />
                                    <p>{type}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">
                                {description.length > descriptionLength ? `${description.substring(0, descriptionLength).trim().split(' ').slice(0, -1).join(' ')}...` : description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default InfoCard;
