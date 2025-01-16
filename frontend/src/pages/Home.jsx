
import { useEffect } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LatestJobs from "../components/LatestJobs"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../redux/jobSlice"
import { useNavigate } from "react-router-dom"


const Home = () => {

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(()=>{
    if(user?.profile?.role === 'recruiter'){
      navigate("/admin/companies");
    }
},[navigate, user?.profile?.role]);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/job/get", {
          withCredentials: true, // Include if backend uses cookies or sessions
        });
        // console.log("Jobs fetched successfully:", res.data.jobs);
        dispatch(getJobs(res.data.jobs));
      } catch (error) {
        if (error.response) {
          console.error("Response error:", error.response.data);
        } else if (error.request) {
          console.error("No response from server:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
      }
    };

    fetchJobs();
  }, [dispatch]);


  return (
    <>
     <Hero/>
     <LatestJobs/>
     <Footer/>
    </>
  )
}

export default Home