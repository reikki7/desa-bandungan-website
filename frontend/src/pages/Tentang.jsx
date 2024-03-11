import React from 'react';
import staffData from '../data/staff.json';
import { HiOfficeBuilding, HiPhone, HiMail } from 'react-icons/hi';
import { HiIdentification } from "react-icons/hi2";
import { FaFax } from "react-icons/fa6";
import { FaUniversity, FaBirthdayCake, FaHome } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";

const Tentang = () => {
    const modifiedStaffData = staffData.map(staff => ({
        ...staff,
        image_path: `/staff/${staff.image_path.split('/').pop()}`
    }));

    return (
        <div className='bg-[#f3f4f6]'>
            <div className="max-w-[1350px] px-4 py-8 mx-auto">

                <div className='flex flex-col gap-4 md:flex-row'>
                    <div className="mb-12">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800">Kepala Desa</h2>
                        <div className="p-8 bg-white rounded-lg shadow-md max-w-7xl">
                            <div className="flex flex-col items-center md:flex-row md:items-start">
                                <div className="flex justify-center mt-8 md:w-1/3">
                                    <img src='/staff/kepaladesa.webp' alt='Nurtiati S.Pd' className='flex w-1/2 rounded-full' />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="mb-4 text-2xl font-semibold text-gray-800">Nurtiati S.Pd</h3>
                                    <div className="flex items-center mb-2">
                                        <div className='flex items-center gap-1'>
                                            <HiIdentification />
                                            <span className="mr-2 text-sm font-semibold text-gray-600">NIP:</span>
                                        </div>
                                        <span className="text-sm text-gray-800">3322206301530002</span>
                                    </div>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Sebagai kepala desa, Ibu Nurtati telah memastikan bahwa seluruh perangkat pemerintah Desa Kenteng, termasuk anggota Badan Permusyawaratan Desa (BPD), telah mendapat jaminan sosial dari BPJS Ketenagakerjaan. Premi mereka dibayar dari alokasi dana desa, menunjukkan komitmennya terhadap kesejahteraan stafnya.
                                        <br />
                                        <br />
                                        Selain itu, Ibu Nurtati juga terlibat dalam penerimaan mahasiswa Kuliah Kerja Nyata (KKN) dari UIN Walisongo Semarang pada tahun 2022, menunjukkan dukungannya terhadap pendidikan dan pengembangan masyarakat.
                                        <br />
                                        <br />
                                        Desa Kenteng sendiri merupakan desa yang berada di daerah pegunungan Ungaran dan memiliki potensi yang terdiri dari pertanian, perkebunan, industri serta wilayahnya yang termasuk strategis di wilayah kecamatan Bandungan. Sebagai kepala desa, Ibu Nurtati memainkan peran penting dalam memanfaatkan dan mengembangkan potensi ini untuk kesejahteraan masyarakatnya.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800">Kantor</h2>
                        <div className="p-8 bg-white rounded-lg shadow-md">
                            <p className="mb-2 text-sm font-bold text-gray-600">Desa Kenteng, Bandungan, Semarang</p>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <div className='flex items-center gap-1 mr-2 text-sm font-semibold text-gray-600'>
                                        <HiOfficeBuilding />
                                        <span>Alamat:</span>
                                    </div>
                                    <p className="text-sm text-gray-800">Jalan Pangeran Diponegoro KM.1, Jetis, Bandungan</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1 mr-2 text-sm font-semibold text-gray-600'>
                                        <HiMail />
                                        <span>Kode Pos:</span>
                                    </div>
                                    <p className="text-sm text-gray-800">50614</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1 mr-2 text-sm font-semibold text-gray-600'>
                                        <HiPhone />
                                        <span>No Telp:</span>
                                    </div>
                                    <p className="text-sm text-gray-800">(0298) 711879</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1 mr-2 text-sm font-semibold text-gray-600'>
                                        <FaFax />
                                        <span>Fax:</span>
                                    </div>
                                    <p className="text-sm text-gray-800">-</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1 mr-2 text-sm font-semibold text-gray-600'>
                                        <HiMail />
                                        <span>Email:</span>
                                    </div>
                                    <p className="text-sm text-gray-800">Kantordesakentengbandungan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-800">Visi &amp; Misi</h2>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-gray-800">Visi</h3>
                            <p className="mb-2 text-sm text-gray-700">Visi kami adalah menjadikan Desa Bandungan sebagai contoh desa yang maju, berkelanjutan, dan harmonis. Kami berkomitmen untuk memberdayakan seluruh masyarakat dengan kesempatan yang adil dan memperhatikan kebutuhan setiap warga.</p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-gray-800">Misi</h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <p className="text-sm text-gray-800">Memajukan sektor pertanian dan ekonomi lokal untuk meningkatkan kesejahteraan masyarakat</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <p className="text-sm text-gray-800">Meningkatkan akses pendidikan dan pelatihan untuk menciptakan generasi masa depan yang terampil dan terdidik.</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <p className="text-sm text-gray-800">Melestarikan dan mempromosikan budaya lokal serta menghargai warisan nenek moyang.</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <p className="text-sm text-gray-800">Menjaga lingkungan alam sekitar dengan melestarikan keanekaragaman hayati dan mengadopsi praktik ramah lingkungan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-800">Struktur Kepemimpinan Desa</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {modifiedStaffData.map((staff, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-md"
                            >
                                <div className="flex flex-col items-center mb-4">
                                    <img
                                        src={staff.image_path}
                                        alt={staff.name}
                                        className="w-24 h-24 mb-2 rounded-full"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
                                    <span className="px-2 py-1 text-xs text-white bg-[#004b23] rounded-full">
                                        {staff.position}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <div className='flex items-center gap-1'>
                                            <HiIdentification />
                                            <span className="mr-2 text-sm font-semibold text-gray-600">NIP:</span>
                                        </div>
                                        <span className="text-sm text-gray-800">{staff.NIP}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='flex items-center gap-1'>
                                            <FaUniversity />
                                            <span className="mr-2 text-sm font-semibold text-gray-600">Pendidikan:</span>
                                        </div>
                                        <span className="text-sm text-gray-800">{staff.education ? staff.education : "-"}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='flex items-center gap-1'>
                                            <FaBirthdayCake />
                                            <span className="mr-2 text-sm font-semibold text-gray-600">Tanggal Lahir:</span>
                                        </div>
                                        <span className="text-sm text-gray-800">{staff.birth_date ? staff.birth_date : "-"}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='flex items-center gap-1'>
                                            <FaHome />
                                            <span className="mr-2 text-sm font-semibold text-gray-600">Tempat Lahir:</span>
                                        </div>
                                        <span className="text-sm text-gray-800">{staff.birth_place ? staff.birth_place : "-"}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='flex items-center gap-1'>
                                            <LuCalendarClock />
                                            <span className="mr-2 text-sm font-semibold text-gray-600">Tamat Menjabat:</span>
                                        </div>
                                        <span className="text-sm text-gray-800">{staff.end_date ? staff.end_date : "-"}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tentang;