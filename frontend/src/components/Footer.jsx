import React from 'react';
import footerIcon from '../assets/footer-logo.webp';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="py-12 bg-[#051804]">
            <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
                <div className="flex flex-col gap-4 mb-4 items-left">
                    <img src={footerIcon} alt="Icon" className="w-56 h-auto mr-4" />
                    <p className='text-white'>Desa Bandungan menjadi desa yang ekonomi, pariwisata dan juga perkembangan yang paling maju di Jawa Tengah.</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <AiFillMail className='p-2 bg-white rounded-full' size={38} />
                            <div>
                                <h2 className='font-bold text-white'>Email</h2>
                                <p className="text-white">contact@logistic.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <AiFillPhone className='p-2 bg-white rounded-full' size={38} />
                            <div>
                                <h2 className='font-bold text-white'>Hubungi Kami</h2>
                                <p className="text-white">(00) 112 365 489</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 text-white justify-center-end">
                    <p className="mb-2 text-xl font-semibold">Halaman</p>
                    <ul>
                        <li className="mb-2"><a href="/beranda" className="hover:text-gray-400">Beranda</a></li>
                        <li className="mb-2"><a href="/kegiatan" className="hover:text-gray-400">Kegiatan</a></li>
                        <li className="mb-2"><a href="/dokumen" className="hover:text-gray-400">Dokumen</a></li>
                        <li className="mb-2"><a href="/umkm" className="hover:text-gray-400">UMKM</a></li>
                        <li><a href="/tentang" className="hover:text-gray-400">Tentang</a></li>
                    </ul>
                </div>
                <div className="text-white">
                    <p className="mb-2 text-xl font-semibold">Langganan</p>
                    <form className='flex flex-col'>
                        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 mt-1 mb-2 text-green-900 rounded-md max-w-48" />
                        <button type="submit" className="w-32 px-4 py-2 mt-1 text-black duration-200 bg-white rounded-lg hover:bg-green-100">Langganan</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;