import { useHttp } from './Http'
import type { ICategory } from '@/models/category.model'

export const useCategory = () => {
  const categories = ref<ICategory[]>([])
  async function get() {
    try {
      const res = await useHttp().get('/category')
      categories.value = res.data
    }
    catch (err) {
      // Do something with the err
    }
  }
  onMounted(() => {
    get()
  })
  return { categories }
}