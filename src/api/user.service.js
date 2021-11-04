import { dispatch, receive, mutate } from './api.service'

const base = 'users'

export const getAllUsers = () => receive(`/${base}/`)
export const getUserById = (id) => receive(`/${base}/${id}`)
export const createDevice = (data) => dispatch(data, `/${base}/`)
export const updateUserById = (data, id) => mutate(data, `/${base}/${id}`)
export const deactivateUserById = (id) => dispatch(`/${base}/${id}`)
export const uploadProfileImage = (data, id) =>
  dispatch(data, `/${base}/uploads/${id}`)
