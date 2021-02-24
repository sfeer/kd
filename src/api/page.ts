import axios from '@/core/axios'

export function getPage(pageid: bigint) {
  return axios.get('/page/get', { params: { pageid } })
}
