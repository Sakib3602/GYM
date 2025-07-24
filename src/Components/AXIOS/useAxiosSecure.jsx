import axios from "axios";

const axiosSecure = axios.create({
    baseURL : "https://ng-fitness-server.onrender.com"
})
const useAxiosSecure = () => {
    return axiosSecure;
}
export default useAxiosSecure;