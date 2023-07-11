import axios from 'axios'
// const config = useRuntimeConfig()
// set base url
import { useAuthStore } from '~~/stores/auth.module';
const s = useAuthStore()
console.log('s', s)
const http = axios.create({
    baseURL: 'config.public.apiUrl'
})
// set token
http.interceptors.request.use(function (config) {
    console.log('s00', s.user)
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
