import { useHttp } from './Http'
import type { IMediaType } from '@/models/mediaType.model'

export const useMediaTypes = async () => {
  const MediaTypes = ref<IMediaType[]>([])
  async function getMediaTypes() {
    const res = await useHttp().get('/mediaType/')
    MediaTypes.value = res.data
  }
  onMounted(async () => {
    getMediaTypes()
  })
}

