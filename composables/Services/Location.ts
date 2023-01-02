import { useHttp } from './Http'
import type { ILocation } from '@/models/location.model'

function useLocation() {
  const locations = ref<ILocation[]>([])
  useHttp().get('/location').then((res) => locations.value = res.data)
  return { locations }
}

export { useLocation }