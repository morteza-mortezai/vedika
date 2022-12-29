import type { IRegisterUser, ILoginUser, IForgetPass, IResetPass, IVerifyUser } from "~~/models/auth.model";
import http from "./helper/http";
export default new class AuthService {
    register(params: IRegisterUser) {
        return http.post(`user/register`, params)
    }
    login(user: ILoginUser) {
        return http.post(`user/login`, user);
    }
    userInfo() {
        return http.get(`user/info`);
    }
    verify(data: IVerifyUser) {
        return http.post(`user/verify`, data);
    }
    forgetPass(params: IForgetPass) {
        return http.post(`user/forgetPass`, params);
    }
    resetPass(params: IResetPass) {
        return http.post(`user/resetPass`, params);
    }
    logout() {
        localStorage.removeItem('user');
    }
}

