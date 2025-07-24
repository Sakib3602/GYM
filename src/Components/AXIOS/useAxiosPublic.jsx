import axios from "axios";

const axiosPublic = axios.create({
    baseURL : "https://ng-fitness-server.onrender.com"
})
const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;