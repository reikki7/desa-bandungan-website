import React, { useState, useEffect } from 'react';
import InfoCard from '../components/InfoCard';
import { useSearchParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const Kegiatan = () => {
    const [kegiatan, setKegiatan] = useState([]);
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
        fetch('https://api.testing.visitdesakenteng.id/kegiatan')
            .then(response => response.json())
            .then(data => {
                let filtered;
                switch (filter) {
                    case 'Kegiatan Lalu':
                        filtered = data.filter(kegiatan => kegiatan.type_kegiatan === 'Kegiatan Lalu');
                        break;
                    case 'Kegiatan Mendatang':
                        filtered = data.filter(kegiatan => kegiatan.type_kegiatan === 'Kegiatan Mendatang');
                        break;
                    default:
                        filtered = data;
                }
                setFilteredData(filtered);
                setKegiatan(filtered);
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                setDisplayedData(filtered.slice(startIndex, endIndex));
                setLoading(false);
            });
    }, [filter, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    useEffect(() => {
        setLoading(true);
        if (filteredData.length > 0) {
            fetch(`https://api.testing.visitdesakenteng.id/kegiatan_images`)
                .then(response => response.json())
                .then(images => {
                    const filteredImages = images.filter(image => image?.event_id);
                    setImageLinks(filteredImages);
                    setLoading(false);
                })
        }
    }, [filteredData]);

    useEffect(() => {
        const results = kegiatan.filter(kegiatan =>
            kegiatan.name_kegiatan.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
    }, [searchQuery, kegiatan]);

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
                    placeholder="Cari berdasarkan nama kegiatan..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full max-w-5xl px-6 py-2 border border-gray-300 rounded-full text-xlg h-14 focus:outline-none"
                />

                {isMobile ?
                    <div className="flex items-center justify-center mt-4 -mb-4 overflow-hidden bg-white shadow-md rounded-2xl">
                        <button
                            type="button"
                            className="px-4 py-2 text-xs font-bold text-white bg-[#004b23] hover:bg-[#004b23]/80"
                            onClick={() => setFilter("none")}
                        >
                            Semua
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 text-xs font-bold text-white bg-[#004b23] hover:bg-[#004b23]/80"
                            onClick={() => setFilter("Kegiatan Lalu")}
                        >
                            Kegiatan Lalu
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 text-xs font-bold text-white bg-[#004b23] hover:bg-[#004b23]/80"
                            onClick={() => setFilter("Kegiatan Mendatang")}
                        >
                            Kegiatan Mendatang
                        </button>
                    </div>
                    :
                    <div className="relative flex items-center justify-center mt-5 mr-4 space-x-4 content">
                        <div className={`duration-[360ms] transition-all text-[#004b23] font-bold text-nowrap text-center absolute flex justify-center z-10 items-center text-sm bg-white h-12 rounded-full ${filter === 'none' ? 'w-20 mr-[317px]' : (filter === 'Kegiatan Lalu' ? 'w-32 mr-[100px]' : 'w-44 -mr-[254px]')}`}>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'none' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Semua</div>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'Kegiatan Lalu' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Kegiatan Lalu</div>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'Kegiatan Mendatang' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Kegiatan Mendatang</div>
                        </div>
                        <div className='p-2 w-[422px] rounded-full bg-[#004b23] relative'>
                            <button onClick={() => setFilter('none')} className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === 'none' ? 'opacity-0' : 'text-white'}`}>Semua</button>
                            <button onClick={() => setFilter('Kegiatan Lalu')} className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === 'Kegiatan Lalu' ? 'opacity-0' : ' text-white'}`}>Kegiatan Lalu</button>
                            <button onClick={() => setFilter('Kegiatan Mendatang')} className={`px-4 duration-300 font-bold py-2 rounded-full ${filter === 'Kegiatan Mendatang' ? 'opacity-0' : 'text-white'}`}>Kegiatan Mendatang</button>
                        </div>
                    </div>
                }
            </div>

            <div className='min-h-screen mx-8'>
                {loading ? (
                    <div className="flex items-center justify-center mt-8">
                        <ClipLoader color="#004b23" loading={loading} size={50} />
                    </div>
                ) : (
                    (searchQuery.length > 0 ? searchResults : displayedData).map((kegiatan) => {
                        const filteredImages = imageLinks.filter(image => image.event_id === kegiatan.id);
                        const imageUrl = filteredImages.length > 0 ? filteredImages[0].name : null;
                        return (
                            <InfoCard
                                key={kegiatan.id}
                                id={kegiatan.id}
                                name={kegiatan.name_kegiatan}
                                date={kegiatan.date_kegiatan}
                                type={kegiatan.type_kegiatan}
                                description={kegiatan.description_kegiatan}
                                image={imageUrl}
                                link="event"
                                page="kegiatan"
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

export default Kegiatan;