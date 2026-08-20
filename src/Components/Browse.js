import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
     if (!formData.name || !formData.mobile || !formData.address) {
    alert("All fields are required ❗");
    return; // ❗ stop execution
  }
    setFormData({
      name: "",
      mobile: "",
      address: "",
    });
    setList([...list, formData]);
  };
  console.log("formData", formData);
  console.log("submit", setFormData);

    const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };
    

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="pt-24 px-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to Browse 🎬</h1>

        <p className="text-gray-400 mb-6">
          Now you can show movies, categories, etc.
        </p>

        {/* Form */}
        <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>

          <div className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Address */}
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="3"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            {/* Button */}
            <button
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/** Display submitted data */}
          <div className="flex-1">
            <h2 className="text-xl mb-4 m-8">Submitted Data</h2>

            {list.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 mb-3 rounded">
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Mobile:</strong> {item.mobile}
                </p>
                <p>
                  <strong>Address:</strong> {item.address}
                </p>

                <div className="flex gap-4 mt-3">
                  <button
                   // onClick={() => handleEdit(index)}
                    className="text-blue-400"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
