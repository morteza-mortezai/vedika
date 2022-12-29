import type { IChannel, ICreateChannel } from "~/models/media.model";
import http from './helper/http'
import authHeader from './auth-header';
import type { AxiosRequestHeaders } from "axios";


export default new class ChannelService {

    get(): Promise<{ data: IChannel[] }> {
        return http.get('media')
    }

    getUserMedium(): Promise<{ data: IChannel[] }> {
        return http.get('media/byUser', { headers: authHeader() as AxiosRequestHeaders })
    }

    getById(id: string): Promise<{ data: IChannel }> {
        return http.get(`media/${id}`)
    }

    create(newChannel: ICreateChannel): Promise<{ data: IChannel }> {
        return http.post(`media/create`, newChannel, { headers: authHeader() as AxiosRequestHeaders })
    }

}

