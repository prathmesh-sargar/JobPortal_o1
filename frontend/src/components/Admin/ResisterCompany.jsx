import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getSingleCompany } from "../../redux/companySlice";

const ResisterCompany = () => {

  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        companyName: companyName
      }

      const res = await axios.post(
        "https://job-portal-backend-ruby-ten.vercel.app/register",
        data,
        { withCredentials: true }
      );
      
      dispatch(getSingleCompany(res?.data?.company))
      // Add functionality to save the company

      setCompanyName("");
      navigate(`/company/setup/${res?.data?.company?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="m-4">
        <Link
          className="bg-purple-600 shadow-lg px-3 py-1 rounded-lg"
          to={"/admin/companies"}
        >
          back
        </Link>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Register Company</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter company name"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResisterCompany;
