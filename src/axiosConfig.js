import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://localhost:44345'
})

axiosConfig.defaults.headers.common['Content-Type'] = 'application/json';

export default axiosConfig;