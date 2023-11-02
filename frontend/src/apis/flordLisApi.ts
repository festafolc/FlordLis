import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const flordLisApi = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Interceptor configuration
flordLisApi.interceptors.request.use( async (config) => {

    const token = await localStorage.getItem('token');

    if (token != null) {

        // config.headers = {
        //     ...config.headers,
        //     'x-token': token
        // }

        config.headers["x-token"] = token
    }

    return config;
},
    (error) => Promise.reject(error)
);

export default flordLisApi;