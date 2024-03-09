import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [data, setData] = useState(null);
    const page = location.pathname.split('/')[1];
    const nameProperty = `name_${page}`;
    const descriptionProperty = `description_${page}`;
    const contactProperty = `contact_${page}`;
    let detailProperty;
    let time_kegiatan;

    if (page === 'kegiatan') {
        detailProperty = 'detail_kegiatan';
        time_kegiatan = 'time_kegiatan';
    } else if (page === 'umkm') {
        detailProperty = 'address_umkm';
    }

    useEffect(() => {
        fetch(`http://localhost:8081/${page}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(page);
                const matchedData = data.find(item => item.id.toString() === id);
                setData(matchedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id, page]);

    if (!data) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    const formattedDate = new Date(data?.created_at).toLocaleString('en-GB');
    const formattedDateKegiatan = new Date(data?.date_kegiatan).toLocaleDateString('en-GB');

    return (
        <div className="flex flex-col min-h-screen">
            <main className="container flex-grow px-4 py-8 mx-auto">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                    <div className="relative h-64">
                        <img
                            src="https://picsum.photos/800/400"
                            alt="Event Header"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="mb-2 text-2xl font-bold">{data[nameProperty]}</h2>
                        <p className="mb-2 text-sm text-gray-600">Date: {formattedDate}</p>
                        <div className='flex p-4 my-5 shadow-xl rounded-2x'>
                            <div>
                                <p className="pr-4 mb-4 mr-4 text-gray-700 border-r-2">{data[time_kegiatan]}</p>
                                <p className="text-gray-700">{formattedDateKegiatan}</p>
                            </div>
                            <div>
                                <p className="pr-4 mb-4 mr-4 text-gray-700 border-r-2">{data[detailProperty]}</p>
                                <p className="text-gray-700">Contact: {data[contactProperty]}</p></div>
                        </div>
                        <p className="mb-4 text-gray-700">{data[descriptionProperty]}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PageDetails;