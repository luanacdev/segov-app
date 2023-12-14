import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { IUser } from '../interfaces/IAccount'

interface AuthContextType {
  user: IUser[]
  signin: (email: string, password: string) => void
  token: string
  sigout: () => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUsers] = useState<IUser[]>([])

  const signin = (email: string, password: string) => {
    const hasUser = user?.filter((user) => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem('USER_TOKEN', JSON.stringify({ token }))
        localStorage.setItem('USER_INFO', JSON.stringify( hasUser[0] ))

        return (window.location.href = '/home')
      } else {
        toast.error('E-mail ou senha incorretos ')
      }
    }
  }

  const sigout = () => {
    localStorage.removeItem('USER_TOKEN')
    localStorage.removeItem('USER_INFO')
    window.location.href = '/'
  }

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('USER_TOKEN')

    if (token) {
      return token
    }

    return ''
  })

  return (
    <AuthContext.Provider value={{ user, signin, token, sigout }}>
      {children}
    </AuthContext.Provider>
  )
}
