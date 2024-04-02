import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminKegiatan = () => {
  const navigate = useNavigate();

  const [kegiatanData, setKegiatanData] = useState([]);
  const [filter, setFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    fetch("https://api.testing.visitdesakenteng.id/kegiatan")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data;
        if (filter !== "Semua") {
          filtered = data.filter(
            (kegiatan) => kegiatan.type_kegiatan === filter
          );
        }
        if (searchQuery) {
          filtered = filtered.filter((kegiatan) =>
            kegiatan.name_kegiatan
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
        }
        setKegiatanData(filtered);
      });
  }, [filter, searchQuery]);

  const handleAction = (id, action) => {
    if (action === "delete") {
      fetch(`https://api.testing.visitdesakenteng.id/kegiatan/${id}`, {
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
          setKegiatanData(
            kegiatanData.filter((kegiatan) => kegiatan.id !== id)
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    if (action === "edit") {
      navigate(`/admin/kegiatan/${id}`);
    }
    // Handle other actions here
  };

  return (
    <div className="admin-kegiatan">
      <h2 className="mb-4 text-2xl font-bold">Kegiatan</h2>
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
          {/* Search box */}
          <input
            type="text"
            placeholder="Cari berdasarkan judul..."
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
              <option value="Kegiatan Lalu">Kegiatan Lalu</option>
              <option value="Kegiatan Mendatang">Kegiatan Mendatang</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Judul Kegiatan</th>
                <th className="px-4 py-2 text-left">Tanggal Dibuat</th>
                <th className="px-4 py-2 text-left">Kategori</th>
                <th className="px-4 py-2 text-left">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {kegiatanData.map((kegiatan) => (
                <tr
                  key={kegiatan.id}
                  className="transition-colors duration-200 border-b hover:bg-gray-100"
                >
                  <td className="px-4 py-2 text-left">{kegiatan.id}</td>
                  <td className="px-4 py-2 text-left">
                    {kegiatan.name_kegiatan}
                  </td>
                  <td className="px-4 py-2 text-left">
                    {formatDate(kegiatan.date_kegiatan)}
                  </td>
                  <td className="px-4 py-2 text-left">
                    {kegiatan.type_kegiatan}
                  </td>
                  <td className="px-4 py-2 text-left">
                    <div className="flex items-center justify-center">
                      <button
                        className="mr-2 text-blue-500 transition-colors duration-200 hover:text-blue-700"
                        onClick={() => handleAction(kegiatan.id, "edit")}
                      >
                        <AiOutlineEdit className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-500 transition-colors duration-200 hover:text-red-700"
                        onClick={() => handleAction(kegiatan.id, "delete")}
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
      </div>
    </div>
  );
};

export default AdminKegiatan;
