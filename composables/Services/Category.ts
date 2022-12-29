import {useHttp} from './Http'
import type {ICategory} from '@/models/category.model'

export const useCategory = async () => {
    const cats = ref([{
        name: 'tehran', id: 1
      }])
    async function get(){
        const res=await  useHttp().get('/category')
        cats.value=res.data
    }
 onMounted( async()=>{
    get()
  })
}

