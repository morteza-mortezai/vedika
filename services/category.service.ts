import type { ICategory } from "~~/models/category.model";
import http from './helper/http'

export default new class CategoryService {
    getAll(): Promise<{ data: ICategory[] }> {
        return http.get(`/category`)
    }
}

