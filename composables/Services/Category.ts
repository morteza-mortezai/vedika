import { useHttp } from './Http'
import type { ICategory } from '@/models/category.model'

export const useCategory = () => {
  const categories = ref<ICategory[]>([])
  useHttp().get('/category').then((res) => categories.value = res.data)
  return { categories }
}