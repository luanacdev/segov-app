import {
  HeaderButtonSigout,
  HeaderContent
} from './styles'

import { SignOut } from 'phosphor-react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function Header() {
  const { sigout } = useContext(AuthContext)

  return (
      <HeaderContent>
        <p>SEGOV</p>

          
          <HeaderButtonSigout onClick={sigout}>
            <SignOut size={32} />
          </HeaderButtonSigout>
      </HeaderContent>
  )
}
