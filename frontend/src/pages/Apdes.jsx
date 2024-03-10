import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";


const Apdes = () => {
    const [apdes, setApdes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({ search: '' })

    // useEffect(() => {
    //     const fetchDocuments = async () => {
    //         const response = await fetch('http://localhost:8081/documents');
    //         const data = await response.json();
    //         setDocuments(data);
    //     };

    //     fetchDocuments();

    //     const results = documents.filter(document =>
    //         document.name_document.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //     setSearchResults(results);
    // }, [searchQuery]);

    // const handleDownload = (fileUrl) => {
    //     window.open(`https://visitdesakenteng.id/download/${fileUrl}`, '_blank');
    // };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        setSearchParams({ search: value });
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100">
                <div className="flex justify-center p-5">
                    <input
                        type="text"
                        placeholder="Cari berdasarkan nama dokumen APDES..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full max-w-5xl px-6 py-2 border border-gray-300 rounded-full text-xlg h-14 focus:outline-none"
                    />
                </div>
                <div className="p-4 mx-auto bg-white rounded-lg shadow-md max-w-7xl">
                    <div className="grid items-center justify-between grid-cols-1 mb-4 md:grid-cols-4">
                        <h1 className="hidden col-span-2 px-4 mb-2 font-semibold md:block text-md md:mb-0">Nama</h1>
                        <span className="hidden col-span-2 font-semibold md:block text-md">Tanggal</span>
                    </div>
                    <hr className="mb-4" />
                    <div className="overflow-y-auto max-h-96">
                        {(searchQuery.length > 0 ? searchResults : apdes).map((apdes) => (
                            <div key={apdes.id} className="grid items-center grid-cols-1 p-2 px-2 mb-2 rounded md:grid-cols-4 hover:bg-gray-100">
                                <div className="flex items-center col-span-2 gap-2 mb-2 md:col-span-2 md:mb-0">
                                    <div className="flex items-center justify-center w-8 h-8">
                                        <FaFilePdf className="text-[#023d1d]" size={20} />
                                    </div>
                                    <span>{apdes.name_apdes}</span>
                                </div>
                                <span className="mb-2 text-sm md:col-span-1 md:mb-0">{new Date(apdes.created_at).toLocaleDateString()}</span>
                                <button
                                    className="text-gray-500 px-4 md:mb-0 mb-2 justify-self-end duration-300 hover:text-[#023d1d] md:col-span-1"
                                    onClick={() => handleDownload(apdes.file_apdes)}
                                >
                                    <FaFileDownload size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apdes