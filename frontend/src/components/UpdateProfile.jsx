
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

const UpdateProfile = () => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {

    console.log(data);

    try {
      // fullname, email, phoneNumber, bio , skills
      const formData = new FormData();
      formData.append("fullname", data.fullname);
      formData.append("email", data.email);
      formData.append("skills", data.skills);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("bio", data.bio);
      formData.append("file", data?.resume[0]);

      const response = await axios.put(
        "http://localhost:8000/api/v1/user/profile/update",
        formData,
        {withCredentials: true},
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.user))
        navigate("/profile");
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while registering!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
     
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Profile Update</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full border-gray-300 rounded px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              {...register("fullname")}
            />
          
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              {...register("email")}
            />
          </div>
           {/* skills */}
           <div className="mb-4">
            <label className="block  mb-2 font-semibold" htmlFor="skills">
              skills <span className="text-sm text-gray-500 ">(comma seprated values)</span>
            </label>
            <input
              type="skills"
              id="skills"
              className="w-full border-gray-300 rounded px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              {...register("skills")}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full border-gray-300 rounded px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              {...register("phoneNumber", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone Number must be 10 digits",
                },
              })}
            />
          
          </div>

          {/* bio */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="bio">
              Bio
            </label>
            <textarea 
            placeholder="told about yourself... "
            type="text"
            name="bio"
            id="bio"
            className="w-full border-gray-300 rounded px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            {...register("bio")}
            >
            </textarea>
           
          </div>

          {/* Resume  */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold " htmlFor="resume">
              Resume 
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf"
              className="w-full border-gray-300 rounded px-2 shadow-sm"
              {...register("resume")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
