import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setApplicants } from "../../redux/applicants";

const Applicants = () => {

    const applications = useSelector((state)=> state.applications.applicants)
    console.log(applications.length);


    const dispatch = useDispatch();
    const params = useParams();
    const JobId = params.id;

    // console.log( "JOb ID : ",JobId);
    

    useEffect(()=>{
        const  getAllApplicants = async()=>{
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/application/${JobId}/applicants`,
                {withCredentials: true});
                if(res.data.success){
                    // console.log(res.data.job.applications[0].applicant.fullname);
                    console.log(res.data.job.aaplications);
                    dispatch(setApplicants(res.data.job.applications));
                }
                
            
            } catch (error) {
                console.log(error);
                
            }
        }

        getAllApplicants()

    },[JobId, dispatch])

//   // Static applicant data
//   const applicants = [
//     {
//       id: 1,
//       fullName: "John Doe",
//       email: "john.doe@example.com",
//       contact: "123-456-7890",
//       resume: "john_resume.pdf",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       fullName: "Jane Smith",
//       email: "jane.smith@example.com",
//       contact: "987-654-3210",
//       resume: "jane_resume.pdf",
//       status: "Pending",
//     },
//     {
//       id: 3,
//       fullName: "Michael Johnson",
//       email: "michael.johnson@example.com",
//       contact: "456-789-1234",
//       resume: "michael_resume.pdf",
//       status: "Pending",
//     },
//   ];


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Applicants List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Full Name</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Contact</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Resume</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Date</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {
                applications.length < 0 ? (
                  
                  <h1>No one is applied for this job yet....</h1>
                   
                ):(
                    applications.map((user,index) => (  
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 border-b text-sm text-gray-700">{user?.applicant?.fullname}</td>
                          <td className="px-6 py-4 border-b text-sm text-gray-700">{user?.applicant?.email}</td>
                          <td className="px-6 py-4 border-b text-sm text-gray-700">{user?.applicant?.phoneNumber}</td>
                          <td className="px-6 py-4 border-b text-sm text-blue-500 underline">
                            <a href={`${user?.applicant?.profile?.resume}`} target="_blank" rel="noopener noreferrer">
                              {user?.applicant?.profile?.resumeOriginalName}
                            </a>
                          </td>
                          <td className="px-6 py-4 border-b text-sm text-gray-700">{user?.applicant?.updatedAt.toString().split('T')[0]}</td>
                          <td className="px-6 py-4 border-b text-sm text-gray-700">
                            <select
                              defaultValue={user?.status}
                              className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:ring-2 focus:ring-blue-400"
                            >
                              <option value="Accepted">Accepted</option>
                              <option value="Rejected">Rejected</option>
                              <option value="Pending">Pending</option>
                            </select>
                          </td>
                        </tr>
                )
            
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicants;



