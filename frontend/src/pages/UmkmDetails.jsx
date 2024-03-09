import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const UmkmDetails = () => {
    const [data, setData] = useState({});
    const [imageLinks, setImageLinks] = useState([]);
    const { id } = useParams();
    const idNumber = parseInt(id, 10);

    useEffect(() => {
        fetch(`http://localhost:8081/umkm/${id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8081/umkm_images`)
            .then(response => response.json())
            .then(images => {
                const filteredImages = images.filter(image => image.umkm_id === idNumber);
                setImageLinks(filteredImages);
            })
            .catch(error => console.error('Error fetching images:', error));
    }, [id]);

    const formattedDateCreated = new Date(data.date_created_umkm).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedCreatedAt = new Date(data.created_at).toLocaleDateString('id-ID');

    return (
        <div className="min-h-screen px-[8%] bg-gray-100">
            <div className="relative overflow-hidden rounded-b-2xl">
                <img
                    src={`https://visitdesakenteng.id/images/umkmIMG/${imageLinks[0]?.name.replace(/\s/g, "%20")}`}
                    alt={data.name_umkm}
                    className="object-cover w-full h-[800px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black">
                    <h1 className="text-4xl font-bold">{data.name_umkm}</h1>
                    <div className="flex items-center mt-4">
                        <FaMapMarkerAlt className="mr-2 text-xl" />
                        <p className="text-xl">{data.address_umkm}</p>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="text-gray-600">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-lg text-[#004b23]" />
                                <p>{formattedDateCreated}</p>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="mr-2 text-lg text-[#004b23]" />
                                <p>{data.contact_umkm}</p>
                            </div>
                        </div>
                        <div className="mb-4 text-gray-700">
                            <p className="mb-2 bg-[#004b23] text-white p-2 rounded font-bold">{data.category_umkm}</p>
                            <p>{formattedCreatedAt}</p>
                        </div>
                        <div className="text-gray-600">
                            <p>{data.description_umkm}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Galeri</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {imageLinks.map(image => (
                                <img
                                    key={image.id}
                                    src={`https://visitdesakenteng.id/images/umkmIMG/${image?.name.replace(/\s/g, "%20")}`}
                                    alt={data.name_umkm}
                                    className="object-cover w-full h-48 rounded-lg shadow-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UmkmDetails;