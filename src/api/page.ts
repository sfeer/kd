import axios from '@/core/axios'

export function getPage(pageid) {
  return axios.get('/page/get', {params: {pageid}})
}
