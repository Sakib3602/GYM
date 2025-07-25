import axios from "axios";

const axiosSecure = axios.create({
    // baseURL : "https://ng-fitness-server.onrender.com"
      baseURL : "http://localhost:3000"
})
const useAxiosSecure = () => {
    return axiosSecure;
}
export default useAxiosSecure;