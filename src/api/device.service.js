import { dispatch, receive, mutate, remove } from './api.service'

const base = 'devices'

export const getAllDevice = (queryUrl) =>
  queryUrl ? receive(`/${base}/${queryUrl}`) : receive(`/${base}/`)
export const getDeviceById = (id) => receive(`/${base}/${id}`)
export const createDevice = (data) => dispatch(data, `/${base}/`)
export const updateDeviceById = (data, id) => mutate(data, `/${base}/${id}`)
export const deleteDeviceById = (id) => remove(`/${base}/${id}`)
export const getSimilarDevice = (id) => receive(`/${base}/similar/${id}`)
export const uploadDeviceImage = (data, id) =>
  dispatch(data, `/${base}/uploads/${id}`)
