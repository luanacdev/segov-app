import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { IUser } from '../interfaces/IAccount'
import { signIn } from '../services/account.service'

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
    signIn({email, password}).then((response) => {
      toast.success('Login realizado com sucesso!')
    }).catch((error) => {
      toast.success(error.response.data)

    })
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
