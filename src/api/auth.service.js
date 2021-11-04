import { dispatch } from './api.service'
import jwtService from './jwt.service'

const base = '/auth'

export const register = (data) => dispatch(data, `${base}/signup`)
export const login = (data) => dispatch(data, `${base}/login`)
export const confirmEmail = (data) =>
  dispatch(data, `${base}/email/confirmation`)
export const resendEmail = (data) => dispatch(data, `${base}/email/resend`)
export const logout = () => {
  jwtService.destroyItem('token')
  jwtService.destroyItem('user')
}
