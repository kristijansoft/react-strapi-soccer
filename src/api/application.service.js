import { dispatch, receive, mutate } from './api.service'

const base = 'applications'

export const getAllApplications = () => receive(`/${base}/`)
export const getApplicationsForUser = () => receive(`/${base}/user/`)
export const getApplicationSummary = () => receive(`/${base}/summary/`)
export const getApplicationSummaryForUser = () =>
  receive(`/${base}/summary/user/`)
export const getApplicationById = (id, param) =>
  receive(`/${base}/${id}?employment=${param}`)
export const createApplication = (data) => dispatch(data, `/${base}/`)
export const updateApplicationById = (data, id) =>
  mutate(data, `/${base}/${id}`)
