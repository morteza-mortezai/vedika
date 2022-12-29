import type { ICreateUser } from "~~/models/auth.model";
import http from './helper/http'

export default new class UserService {

    create(params:ICreateUser): Promise<{ data: any }> {
        return http.post(`user/create`,params)
    }
}

