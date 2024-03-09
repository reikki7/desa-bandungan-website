import { Link } from 'react-router-dom';
import headerLogo from "../assets/header-logo.webp";

const Header = () => {
  return (
    <div className="flex items-center gap-10 p-6 text-xl font-bold text-white bg-[#004b23] md:text-3xl md:p-4 md:px-20 md:gap-24">
      <Link to="/beranda">
        <img src={headerLogo} className="w-12 md:w-14" alt="Header Logo" />
      </Link>
      <h1 className="pr-4">Desa Kenteng, Bandungan, Semarang</h1>
    </div>
  );
};

export default Header;