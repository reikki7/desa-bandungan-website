import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaTimes, FaPhoneAlt, FaTag } from 'react-icons/fa';
import noImage from '../assets/no-image.webp';

const KegiatanDetails = () => {
    const [data, setData] = useState({});
    const [imageLinks, setImageLinks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const { id } = useParams();
    const idNumber = parseInt(id, 10);
    const modalRef = useRef(null);
    const [otherData1, setOtherData1] = useState([]);
    const [otherData2, setOtherData2] = useState([]);

    const [otherImageLinks, setOtherImageLinks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/kegiatan/")
            .then(response => response.json())
            .then(data => {
                const filteredKegiatan = data.filter(item => item.id !== idNumber);
                let randomIndex1 = Math.floor(Math.random() * filteredKegiatan.length);
                let randomIndex2 = Math.floor(Math.random() * filteredKegiatan.length);
                while (randomIndex2 === randomIndex1) {
                    randomIndex2 = Math.floor(Math.random() * filteredKegiatan.length);
                }
                setOtherData1(filteredKegiatan[randomIndex1]);
                setOtherData2(filteredKegiatan[randomIndex2]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8081/kegiatan/${id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8081/kegiatan_images`)
            .then(response => response.json())
            .then(images => {
                setOtherImageLinks(images);
                const filteredImages = images.filter(image => image.event_id === idNumber);
                setImageLinks(filteredImages);
            })
            .catch(error => console.error('Error fetching images:', error));
    }, [id]);

    const formattedDate = new Date(data.date_kegiatan).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };


    useEffect(() => {
        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    return (
        <div className="min-h-screen px-[8%] bg-gray-100">
            <div className="relative overflow-hidden rounded-b-2xl">
                <img
                    src={`https://visitdesakenteng.id/images/eventIMG/${imageLinks[0]?.name.replace(/\s/g, "%20")}`}
                    className="object-cover w-full h-[800px]"
                    alt={data.name_kegiatan}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black">
                    <h1 className="text-4xl font-bold">{data?.name_kegiatan}</h1>
                    <div className="flex items-center mt-4">
                        <FaTag className="mr-2 text-xl" />
                        <p className="text-xl">{data?.detail_kegiatan}</p>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="text-gray-600">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-lg text-[#004b23]" />
                                <p>{formattedDate}</p>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="mr-2 text-lg text-[#004b23]" />
                                <p>{data?.contact_kegiatan}</p>
                            </div>
                        </div>
                        <div className="mb-4 text-gray-700">
                            <p className="mb-2 bg-[#004b23] text-white p-2 rounded font-bold">{data?.type_kegiatan}</p>
                        </div>
                        <div className="text-gray-600">
                            <p>{data?.description_kegiatan}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Galeri</h2>
                        <div className="grid grid-cols-1 gap-4 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
                            {imageLinks.map((image, index) => (
                                <img
                                    key={image.id}
                                    src={`https://visitdesakenteng.id/images/eventIMG/${image?.name.replace(/\s/g, "%20")}`}
                                    alt={data.name_kegiatan}
                                    className="object-cover w-full h-48 duration-300 rounded-lg shadow-md hover:scale-105"
                                    onClick={() => openModal(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-8 bg-gray-100 max-w-[600px]">
                    <div className="container mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-[#004b23]">Lainnya</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div>
                                {otherData1 && (
                                    <div className="overflow-hidden bg-white rounded-lg shadow-md">
                                        {otherImageLinks.length > 0 &&
                                            otherImageLinks.find((image) => image.event_id === otherData1.id) ? (
                                            <img
                                                src={`https://visitdesakenteng.id/images/eventIMG/${otherImageLinks
                                                    .find((image) => image.event_id === otherData1.id)
                                                    ?.name.replace(/\s/g, "%20")}`}
                                                alt={otherData1.name_kegiatan}
                                                className="object-cover w-full h-48"
                                            />
                                        ) : (
                                            <img
                                                src={noImage}
                                                alt="No Image Available"
                                                className="object-cover w-full h-48"
                                            />
                                        )}
                                        <div className="p-4">
                                            <h3 className="mb-2 text-xl font-bold">{otherData1.name_kegiatan}</h3>
                                            <div className="flex items-center gap-2 mb-2 text-sm text-gray-700">
                                                <FaTag />
                                                <p>{otherData1.type_kegiatan}</p>
                                            </div>
                                            <a
                                                href={`/kegiatan/${otherData1.id}`}
                                                className="text-[#004b23] font-bold hover:underline"
                                            >
                                                Baca Selengkapnya
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                {otherData2 && (
                                    <div className="overflow-hidden bg-white rounded-lg shadow-md">
                                        {otherImageLinks.length > 0 &&
                                            otherImageLinks.find((image) => image.event_id === otherData2.id) ? (
                                            <img
                                                src={`https://visitdesakenteng.id/images/eventIMG/${otherImageLinks
                                                    .find((image) => image.event_id === otherData2.id)
                                                    ?.name.replace(/\s/g, "%20")}`}
                                                alt={otherData2.name_kegiatan}
                                                className="object-cover w-full h-48"
                                            />
                                        ) : (
                                            <img
                                                src={noImage}
                                                alt="No Image Available"
                                                className="object-cover w-full h-48"
                                            />
                                        )}
                                        <div className="p-4">
                                            <h3 className="mb-2 text-xl font-bold">{otherData2.name_kegiatan}</h3>
                                            <div className="flex items-center gap-2 mb-2 text-sm text-gray-700">
                                                <FaTag />
                                                <p>{otherData2.type_kegiatan}</p>
                                            </div>
                                            <a
                                                href={`/kegiatan/${otherData2.id}`}
                                                className="text-[#004b23] font-bold hover:underline"
                                            >
                                                Baca Selengkapnya
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {showModal && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="relative" ref={modalRef}>
                            <FaTimes
                                className="absolute text-white cursor-pointer top-2 right-2"
                                onClick={closeModal}
                            />
                            <img
                                src={`https://visitdesakenteng.id/images/eventIMG/${imageLinks[selectedImageIndex]?.name.replace(/\s/g, "%20")}`}
                                alt={data.name_kegiatan}
                                className="w-full h-auto max-w-[90vw] max-h-[90vh] object-contain"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default KegiatanDetails;