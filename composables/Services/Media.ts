import { useHttp } from './Http'
import type { ICreateMedia } from '@/models/media.model'
import { onMounted,ref } from 'vue'
// have to change to fetch composable
export const useMediaList =  (page: number = 1, limit: number = 6, cats: number[] = [], locations: number[] = [], vip: boolean = false, title: string = null, sortBy: string = '-createdAt') => {
        return  useHttp().get('media', { params: { limit, page, cats, locations, vip, title, sortBy } })
    // return data.value
    // const { pending, data } = await useFetch('media', { params: { limit, page, cats, locations, vip, title, sortBy } })
}
export const useMediaById = (id: number) => {
    return useHttp().post('media', id)
}
export const create = (data: ICreateMedia) => {
    return useHttp().post('media', data)
}