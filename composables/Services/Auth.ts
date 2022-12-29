import { useHttp } from './Http'
import type { ILoginUser, IRegisterUser, IVerifyUser } from '@/models/auth.model'
import { useAuthStore } from '@/stores/auth.module'
export const useLogin = (data: ILoginUser) => {
    return useHttp().post('/user/login', data)
}
export const useRegister = (data: IRegisterUser) => {
    return useHttp().post('/user/register', data)
}
export const useUserInfo = () => {
    return useHttp().get('/user/info').then(
        response => {
            useAuthStore().user = response?.data?.user
            return Promise.resolve(response);
        },
        error => {
            return Promise.reject(error);
        }
    );
}
export const useVerify = (data: IVerifyUser) => {
    return useHttp().post('/user/verify', data)
}
export const useNewCode = (emailPhone: string) => {
    return useHttp().post('/user/newCode', { emailPhone })
}