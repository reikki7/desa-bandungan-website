import React, { useState, useEffect } from 'react';
import InfoCard from '../components/InfoCard';
import { useSearchParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const Umkm = () => {
    const [umkm, setUmkm] = useState([]);
    const [filter, setFilter] = useState('none');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({ search: '' });
    const [isMobile, setIsMobile] = useState(false);
    const [imageLinks, setImageLinks] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedData, setDisplayedData] = useState([]);

    const itemsPerPage = 5;

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        setSearchParams({ search: value });
    };

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8081/umkm')
            .then(response => response.json())
            .then(data => {
                let filteredData;
                switch (filter) {
                    case 'Pangan':
                        filteredData = data.filter(umkm => umkm.category_umkm === 'Pangan');
                        break;
                    case 'Retail':
                        filteredData = data.filter(umkm => umkm.category_umkm === 'Retail');
                        break;
                    case 'Kerajinan':
                        filteredData = data.filter(umkm => umkm.category_umkm === 'Kerajinan');
                        break;
                    default:
                        filteredData = data;
                }
                setFilteredData(filteredData);
                setUmkm(filteredData);
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                setDisplayedData(filteredData.slice(startIndex, endIndex));
                setLoading(false);
            });
    }, [filter, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    useEffect(() => {
        setLoading(true);
        if (filteredData.length > 0) {
            fetch(`http://localhost:8081/umkm_images`)
                .then(response => response.json())
                .then(images => {
                    const filteredImages = images.filter(image => image?.umkm_id);
                    setImageLinks(filteredImages);
                    setLoading(false);
                })
        }
    }, [filteredData]);

    useEffect(() => {
        const results = umkm.filter(umkm =>
            umkm.name_umkm.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
    }, [searchQuery, umkm]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayedData(filteredData.slice(startIndex, endIndex));
    };

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div>
            <div className="flex flex-col items-center justify-center mx-4 mt-5">
                <input
                    type="text"
                    placeholder="Cari berdasarkan nama UMKM..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full max-w-5xl px-6 py-2 border border-gray-300 rounded-full text-xlg h-14 focus:outline-none"
                />

                {isMobile ?
                    <div className="flex items-center justify-center mt-4 -mb-4 overflow-hidden bg-white shadow-md rounded-2xl">
                        <button
                            type="button"
                            className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === 'none' ? 'bg-[#004b23]/80' : 'bg-[#004b23]'}`}
                            onClick={() => setFilter("none")}
                        >
                            Semua
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === 'Pangan' ? 'bg-[#004b23]/80' : 'bg-[#004b23]'}`}
                            onClick={() => setFilter("Pangan")}
                        >
                            Pangan
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === 'Retail' ? 'bg-[#004b23]/80' : 'bg-[#004b23]'}`}
                            onClick={() => setFilter("Retail")}
                        >
                            Retail
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === 'Kerajinan' ? 'bg-[#004b23]/80' : 'bg-[#004b23]'}`}
                            onClick={() => setFilter("Kerajinan")}
                        >
                            Kerajinan
                        </button>
                    </div>
                    :
                    <div className="relative flex items-center justify-center mt-5 mr-4 space-x-4 content">
                        <div className={`duration-[360ms] transition-all text-[#004b23] font-bold text-nowrap text-center absolute flex justify-center z-10 items-center text-sm bg-white h-12 rounded-full ${filter === 'none' ? 'w-20 mr-[261px]' : (filter === 'Pangan' ? 'w-24 mr-[80px]' : (filter == "Retail" ? 'w-[85px] -mr-[80px]' : 'w-28 -mr-[258px]'))}`}>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'none' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Semua</div>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'Pangan' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Pangan</div>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'Retail' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Retail</div>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'Kerajinan' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Kerajinan</div>
                        </div>
                        <div className='p-2 w-[365px] rounded-full bg-[#004b23] relative'>
                            <button onClick={() => setFilter('none')} className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === 'none' ? 'opacity-0' : 'text-white'}`}>Semua</button>
                            <button onClick={() => setFilter('Pangan')} className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === 'Pangan' ? 'opacity-0' : 'text-white'}`}>Pangan</button>
                            <button onClick={() => setFilter('Retail')} className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === 'Retail' ? 'opacity-0' : ' text-white'}`}>Retail</button>
                            <button onClick={() => setFilter('Kerajinan')} className={`px-4 duration-300 font-bold py-2 rounded-full ${filter === 'Kerajinan' ? 'opacity-0' : 'text-white'}`}>Kerajinan</button>
                        </div>
                    </div>
                }
            </div>

            <div className='min-h-screen mx-8'>
                {loading ? (
                    <div className="flex justify-center mt-10">
                        <ClipLoader color="#004b23" loading={loading} size={50} />
                    </div>
                ) : (
                    (searchQuery.length > 0 ? searchResults : displayedData).map((umkm) => {
                        const filteredImages = imageLinks.filter(image => image.umkm_id === umkm.id);
                        const imageUrl = filteredImages.length > 0 ? filteredImages[0].name : 'https://via.placeholder.com/320x220';
                        return (
                            <InfoCard
                                key={umkm.id}
                                id={umkm.id}
                                name={umkm.name_umkm}
                                date={umkm.date_created_umkm}
                                type={umkm.category_umkm}
                                description={umkm.description_umkm}
                                image={imageUrl}
                                link="umkm"
                                page="umkm"
                            />
                        );
                    }))
                }
            </div>

            <div className="flex justify-center mt-4 mb-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                        key={pageNumber}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === pageNumber ? 'bg-[#004b23] text-white' : 'bg-gray-200'}`}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Umkm;