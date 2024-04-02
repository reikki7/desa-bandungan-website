import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const AdminUmkm = () => {
  const navigate = useNavigate();

  const [umkmData, setUmkmData] = useState([]);
  const [filter, setFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.testing.visitdesakenteng.id/umkm")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data;
        if (filter !== "Semua") {
          filtered = data.filter((umkm) => umkm.category_umkm === filter);
        }
        if (searchQuery) {
          filtered = filtered.filter((umkm) =>
            umkm.name_umkm.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        setUmkmData(filtered);
        setIsLoading(false);
      });
  }, [filter, searchQuery]);

  const handleAction = (id, action) => {
    if (action === "delete") {
      const confirmDelete = window.confirm(
        "Apakah Anda yakin ingin menghapus data ini?"
      );
      if (confirmDelete) {
        fetch(`https://api.testing.visitdesakenteng.id/umkm/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setUmkmData(umkmData.filter((umkm) => umkm.id !== id));
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }

    if (action === "edit") {
      navigate(`/admin/umkm/${id}`);
    }
    // Handle other actions here
  };

  const handleTambahUmkm = () => {
    navigate("/admin/umkm/baru");
  };

  return (
    <div className="admin-umkm">
      <div className="flex justify-between p-2">
        <h2 className="mb-4 text-2xl font-bold">UMKM</h2>
        <button
          className="px-4 py-2 ml-4 text-white bg-[#1d4a27] duration-300 rounded-lg hover:bg-[#091806] focus:outline-none"
          onClick={handleTambahUmkm}
        >
          Tambah UMKM
        </button>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
          {/* Search box */}
          <input
            type="text"
            placeholder="Cari berdasarkan nama..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-full focus:outline-none"
          />

          {/* Filter dropdown */}
          <div className="relative inline-flex">
            <svg
              className="absolute top-0 right-0 w-2 h-2 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.762-9.763 25.591 0 35.354l181 181c9.763 9.763 25.592 9.763 35.355 0l181-181c9.763-9.763 9.763-25.591 0-35.354-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-10 pl-5 pr-10 text-gray-600 bg-white border border-gray-300 rounded-full appearance-none hover:border-gray-400 focus:outline-none"
            >
              <option value="Semua">Semua</option>
              <option value="Pangan">Pangan</option>
              <option value="Retail">Retail</option>
              <option value="Kerajinan">Kerajinan</option>
              <option value="Edukasi">Edukasi</option>
              <option value="Kesenian">Kesenian</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center">
            <ClipLoader color="#004b23" />
          </div>
        ) : umkmData.length === 0 ? (
          <p className="text-center">Tidak ada data UMKM</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Nama UMKM</th>
                  <th className="px-4 py-2 text-left">Pemilik</th>
                  <th className="px-4 py-2 text-left">Kategori</th>
                  <th className="px-4 py-2 text-left">Alamat</th>
                  <th className="px-4 py-2 text-left">Tanggal Dibuat</th>
                  <th className="px-4 py-2 text-left">Tindakan</th>
                </tr>
              </thead>
              <tbody>
                {umkmData.map((umkm) => (
                  <tr
                    key={umkm.id}
                    className="transition-colors duration-200 border-b hover:bg-gray-100"
                  >
                    <td className="px-4 py-2 text-left">{umkm.id}</td>
                    <td className="px-4 py-2 text-left">{umkm.name_umkm}</td>
                    <td className="px-4 py-2 text-left">{umkm.owner_umkm}</td>
                    <td className="px-4 py-2 text-left">
                      {umkm.category_umkm}
                    </td>
                    <td className="px-4 py-2 text-left">{umkm.address_umkm}</td>
                    <td className="px-4 py-2 text-left">
                      {formatDate(umkm.date_created_umkm)}
                    </td>
                    <td className="px-4 py-2 text-left">
                      <div className="flex items-center justify-center">
                        <button
                          className="mr-2 text-blue-500 transition-colors duration-200 hover:text-blue-700"
                          onClick={() => handleAction(umkm.id, "edit")}
                        >
                          <AiOutlineEdit className="w-5 h-5" />
                        </button>
                        <button
                          className="text-red-500 transition-colors duration-200 hover:text-red-700"
                          onClick={() => handleAction(umkm.id, "delete")}
                        >
                          <AiOutlineDelete className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUmkm;
