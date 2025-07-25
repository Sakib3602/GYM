import axios from "axios";

const axiosPublic = axios.create({
    // baseURL : "https://ng-fitness-server.onrender.com"
    baseURL : "http://localhost:3000"
})
const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;