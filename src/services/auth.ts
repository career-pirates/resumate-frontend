import axiosInstance from '@/utils/axiosInstance'

export const verification = async () => {
  const res = await axiosInstance.get('/auth/me')
  return res.data
}
