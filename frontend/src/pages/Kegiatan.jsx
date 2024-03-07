import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/InfoCard';

const Kegiatan = () => {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState('none');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        fetch('http://localhost:8081/events')
            .then(response => response.json())
            .then(data => {
                let filteredData;
                switch (filter) {
                    case 'Kegiatan Lalu':
                        filteredData = data.filter(event => event.type_event === 'Kegiatan Lalu');
                        break;
                    case 'Kegiatan Mendatang':
                        filteredData = data.filter(event => event.type_event === 'Kegiatan Mendatang');
                        break;
                    default:
                        filteredData = data;
                }
                setEvents(filteredData);
            });
    }, [filter]);

    useEffect(() => {
        const results = events.filter(event =>
            event.name_event.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
    }, [searchQuery, events]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <Header />
            <div className="sticky top-0 z-50 w-full bg-green-950">
                <Navbar />
            </div>

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
                        <div className={`duration-[360ms] transition-all text-[#004b23] font-bold text-nowrap text-center absolute flex justify-center z-10 items-center text-sm bg-white h-12 rounded-full ${filter === 'none' ? 'w-20 mr-[305px]' : (filter === 'Kegiatan Lalu' ? 'w-32 mr-[80px]' : 'w-44 -mr-[238px]')}`}>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'none' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Semua</div>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'Kegiatan Lalu' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Kegiatan Lalu</div>
                            <div className={`absolute transition-opacity duration-300 ${filter !== 'Kegiatan Mendatang' ? 'opacity-0' : 'opacity-100'}`} style={{ height: '1.5rem', lineHeight: '1.5rem' }}>Kegiatan Mendatang</div>
                        </div>
                        <div className='p-2 w-[409px] rounded-full bg-[#004b23] relative'>
                            <button onClick={() => setFilter('none')} className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === 'none' ? 'opacity-0' : 'text-white'}`}>Semua</button>
                            <button onClick={() => setFilter('Kegiatan Lalu')} className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === 'Kegiatan Lalu' ? 'opacity-0' : ' text-white'}`}>Kegiatan Lalu</button>
                            <button onClick={() => setFilter('Kegiatan Mendatang')} className={`px-4 duration-300 font-bold py-2 rounded-full ${filter === 'Kegiatan Mendatang' ? 'opacity-0' : 'text-white'}`}>Kegiatan Mendatang</button>
                        </div>
                    </div>
                }
            </div>

            <div className='min-h-screen mx-8'>
                {(searchQuery.length > 0 ? searchResults : events).map((event) => (
                    <EventCard
                        key={event.id}
                        id={event.id}
                        name={event.name_event}
                        date={event.date_event}
                        type={event.type_event}
                        description={event.description_event}
                        page="kegiatan" />
                ))}
            </div>
            <Footer />
        </div >
    );
};

export default Kegiatan;
