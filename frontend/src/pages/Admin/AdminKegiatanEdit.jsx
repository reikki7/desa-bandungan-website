import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdminKegiatanEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name_kegiatan: "",
    detail_kegiatan: "",
    description_kegiatan: "",
    type_kegiatan: "",
    contact_kegiatan: "",
    date_kegiatan: "",
  });

  useEffect(() => {
    if (id) {
      fetchKegiatanData(id);
    }
  }, [id]);

  const fetchKegiatanData = async (id) => {
    try {
      const response = await fetch(
        `https://api.testing.visitdesakenteng.id/kegiatan/${id}`
      );
      const data = await response.json();
      setFormData({
        name_kegiatan: data.name_kegiatan,
        detail_kegiatan: data.detail_kegiatan,
        description_kegiatan: data.description_kegiatan,
        type_kegiatan: data.type_kegiatan,
        contact_kegiatan: data.contact_kegiatan,
        date_kegiatan: data.date_kegiatan,
      });
    } catch (error) {
      console.error("Error fetching kegiatan data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestMethod = id ? "PATCH" : "POST";
    const requestUrl = id
      ? `https://api.testing.visitdesakenteng.id/kegiatan/${id}`
      : "https://api.testing.visitdesakenteng.id/kegiatan";

    try {
      const response = await fetch(requestUrl, {
        method: requestMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/admin/kegiatan");
      } else {
        console.error("Error submitting data:", response.status);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let date_kegiatan = new Date(formData.date_kegiatan);
  let year = date_kegiatan.getFullYear();
  let month = ("0" + (date_kegiatan.getMonth() + 1)).slice(-2); // Months are 0 based index
  let day = ("0" + date_kegiatan.getDate()).slice(-2);

  let formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="max-w-md mx-auto">
      <h2 className="mb-4 text-2xl font-bold">
        {id ? "Edit Kegiatan" : "Tambah Kegiatan"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name_kegiatan"
            className="block text-gray-700 font-bold mb-2"
          >
            Nama Kegiatan
          </label>
          <input
            type="text"
            id="name_kegiatan"
            name="name_kegiatan"
            value={formData.name_kegiatan}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="detail_kegiatan"
            className="block text-gray-700 font-bold mb-2"
          >
            Detail Kegiatan
          </label>
          <textarea
            id="detail_kegiatan"
            name="detail_kegiatan"
            value={formData.detail_kegiatan}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description_kegiatan"
            className="block text-gray-700 font-bold mb-2"
          >
            Deskripsi Kegiatan
          </label>
          <textarea
            id="description_kegiatan"
            name="description_kegiatan"
            value={formData.description_kegiatan}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="type_kegiatan"
            className="block text-gray-700 font-bold mb-2"
          >
            Tipe Kegiatan
          </label>
          <select
            id="type_kegiatan"
            name="type_kegiatan"
            value={formData.type_kegiatan}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Pilih Tipe Kegiatan</option>
            <option value="Kegiatan Lalu">Kegiatan Lalu</option>
            <option value="Kegiatan Mendatang">Kegiatan Mendatang</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="contact_kegiatan"
            className="block text-gray-700 font-bold mb-2"
          >
            Nomor Telepon
          </label>
          <input
            type="text"
            id="contact_kegiatan"
            name="contact_kegiatan"
            value={formData.contact_kegiatan}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date_kegiatan"
            className="block text-gray-700 font-bold mb-2"
          >
            Tanggal Kegiatan
          </label>
          <input
            type="date"
            id="date_kegiatan"
            name="date_kegiatan"
            value={formattedDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {id ? "Update Kegiatan" : "Tambah Kegiatan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminKegiatanEdit;
