import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Kegiatan = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <div className='min-h-screen'>
                <table className="divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Event Name</th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Event Detail</th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">tanggal Event</th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Kegiatan</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {events.map((event) => (
                            <tr key={event.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{event.name_event}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.detail_event}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.date_event}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{event.type_event}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Kegiatan;
