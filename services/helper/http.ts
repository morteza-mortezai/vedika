import axios from 'axios'
// const config = useRuntimeConfig()
// set base url
const http = axios.create({
    baseURL: 'config.public.apiUrl'
})
// set token
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// when token is expired 
http.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status == 498) {
            console.log('invalid token')
            localStorage.removeItem('token')
        }
    }
);
export default http
