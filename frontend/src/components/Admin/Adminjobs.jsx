import axios from "axios";
import { useEffect, useState } from "react";

const AdminJobs = () => {

    const [adminjob ,setAdminJobs] = useState([]);



    useEffect(()=>{

        const getAllAdminJobs = async()=>{
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/job/getadminjobs`,{withCredentials: true});
                // console.log(res.data.jobs);
                setAdminJobs(res.data.jobs);
            } catch (error) {
                console.log(error);   
            }
        }
        getAllAdminJobs()

    },[])

    console.log("adminjob :",adminjob);
    

  // Hardcoded job data
  const jobs = [
    { id: 1, companyName: `${adminjob?.company?.name}`, role: "Software Engineer", date: "2025-01-15" },
    { id: 2, companyName: "Microsoft", role: "Frontend Developer", date: "2025-01-18" },
    { id: 3, companyName: "Amazon", role: "Backend Developer", date: "2025-01-20" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Job Table</h2>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Add Job
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-4 py-2 border">Company Name</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{job.companyName}</td>
                  <td className="px-4 py-2 border">{job.role}</td>
                  <td className="px-4 py-2 border">{job.date}</td>
                  <td className="px-4 py-2 border">
                    <button className="text-blue-600 hover:text-blue-800 mr-4">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
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

export default AdminJobs;
