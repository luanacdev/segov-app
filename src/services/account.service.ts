import { ISignIn, ISignUp } from '../interfaces/IUser'
import { api } from './api'

export const signIn = async (data: ISignIn) => {
  const resonse = await api.post('/signin', {
    email: data.email,
    password: data.password
  })
  return resonse
}

export const signUp = (data: ISignUp) => {
  const resonse = api.post('/signup', {
    name: data.name,
    email: data.email,
    password: data.password
  })
  return resonse
}
