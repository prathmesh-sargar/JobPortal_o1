import  { useState } from "react";
import { Link } from "react-router-dom";

const Companies = () => {
  // Mock data for companies
  const [companies] = useState([
    {
      id: 1,
      logo: "https://via.placeholder.com/40",
      name: "TechCorp",
      date: "2025-01-01",
      description: "A leading technology solutions provider.",
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/40",
      name: "Innovate Inc",
      date: "2025-01-05",
      description: "Innovative solutions for modern businesses.",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      name: "DataWorks",
      date: "2025-01-10",
      description: "Specializing in data analytics and AI.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter companies based on search term
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Companies</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <Link to={"/company/create"} >Add Company</Link>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by company name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Companies Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-left">Logo</th>
                <th className="border border-gray-300 p-3 text-left">Name</th>
                <th className="border border-gray-300 p-3 text-left">Date</th>
                <th className="border border-gray-300 p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company) => (
                  <tr key={company.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-3">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="border border-gray-300 p-3">{company.name}</td>
                    <td className="border border-gray-300 p-3">{company.date}</td>
                    <td className="border border-gray-300 p-3">{company.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="border border-gray-300 p-3 text-center text-gray-500"
                  >
                    No companies found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Companies;
