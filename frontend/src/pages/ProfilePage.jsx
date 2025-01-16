
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfilePage = () => {

   
    const user = useSelector((state) => state.auth.user);
    // console.log("profile data : ",userdata);
    

//   console.log(user.profile.skills);
  
//  const skillArray =   user?.profile?.skills
//  console.log("skillarray", skillArray);
 

  const userdata = {
    appliedJobs: [
      {
        date: "17-07-2024",
        role: "Frontend Developer",
        company: "Google",
        status: "Selected",
      },
      {
        date: "17-07-2024",
        role: "Frontend Developer",
        company: "Google",
        status: "Selected",
      },
    ],

  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <img
            src={user.profile.profilephoto}
            alt="Profile"
            className="w-20 h-20 rounded-full border"
          />
          <div className="flex-1">
            {/* Name and Bio */}
            <h2 className="text-2xl font-semibold">{user.fullname}</h2>
            <p className="text-gray-600">{user.profile.bio}</p>
          </div>
          {/* Edit Button */}

         <Link to={`/profile/update`}><button
            className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md shadow-sm hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-2.036a2.5 2.5 0 113.536 3.536L6.5 21.5H3v-3.5L16.732 3.232z"
              />
            </svg>
           
          </button>  </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Contact Information</h3>
          <p className="text-gray-600">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> {user.phoneNumber}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.profile?.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Resume</h3>
          <a
            target='blank'
            href={`${user.profile.resume}`}
            className="text-indigo-600 hover:underline"
          >
            {user?.profile?.resumeOriginalName}
          </a>
        </div>

        {/* Applied Jobs */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Applied Jobs</h3>
          <table className="min-w-full bg-white border mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b">
                  Date
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b">
                  Job Role
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b">
                  Company
                </th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {userdata.appliedJobs.map((job, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 text-sm text-gray-600">{job.date}</td>
                  <td className="py-2 px-4 text-sm text-gray-600">{job.role}</td>
                  <td className="py-2 px-4 text-sm text-gray-600">{job.company}</td>
                  <td className="py-2 px-4 text-sm text-indigo-600 font-semibold">
                    {job.status}
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

export default ProfilePage;


