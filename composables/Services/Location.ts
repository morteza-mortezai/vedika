import { useHttp } from './Http'
import type { ILocation } from '@/models/location.model'

function useLocation() {
  const avl_locs = ref<ILocation[]>([])
  useHttp().get('/location').then((res) => avl_locs.value = res.data)
  return { avl_locs }
}

export { useLocation }