import axios from 'axios'

export const useHttp = () => {
    const config = useRuntimeConfig()
    const instance = axios.create({
        baseURL: config.public.apiUrl,
    })
    // read token from session storage
    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem("token")
        if (token) {
           ( config as any).headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
    instance.interceptors.response.use(
        response => response,
        error => {
            if (error?.response?.status == 498) {
                console.log('invalid token')
                localStorage.removeItem('token')
            }
        }
    );
    return instance
}

