import { AxiosResponse } from 'axios'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
import { getAccount } from '../../services/account.service'
import {
  SigninBox,
  SigninButton,
  SigninButtonContainer,
  SigninContainer,
  SigninImageBox,
  SigninLogoBox,
  SigninRightBox
} from './styles'


import men from '../../assets/men-on-cell-phone.svg'
import Input from '../../components/Form/Input/'
import { MESSAGE } from '../../utils/messages'

interface FieldValues {
  email: string;
  password: string;
  name: string;
}



export function SignUp() {
  const { setUsers, signin } = useContext(AuthContext)

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues
  } = useForm<FieldValues>()

  const handleLogin = async (data: FieldValues) => {
    signin(data.email, data.password)
  }


  return (
    <>
      <SigninContainer>
        <SigninRightBox>
          <SigninBox>
            <SigninLogoBox>
              <h2>SEGOV</h2>
            </SigninLogoBox>

            <h1>Cadastrar usuário</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
            <Input
                label="Nome"
                type="text"
                register={register}
                requiredMessage={MESSAGE.EMPTY_FIELD}
                error={errors.name && errors.name.message}
                name="name"
                placeholder="name"
                width="100%"
                widthContainer='100%'
                padding='5px'
              />

              <Input
                label="Email"
                type="email"
                register={register}
                requiredMessage={MESSAGE.EMPTY_FIELD}
                error={errors.email && errors.email.message}
                name="email"
                placeholder="example@example.com"
                width="100%"
                widthContainer='100%'
                padding='5px'
              />

              <Input
                label="Senha"
                type="password"
                register={register}
                requiredMessage={MESSAGE.EMPTY_FIELD}
                error={errors.password && errors.password.message}
                placeholder="*****"
                name="password"
                width="100%"
                widthContainer='100%'
                padding='5px'
              />
                        
              <SigninButtonContainer>
                
                <SigninButton style={{marginTop: '10px', background: 'gray', border: 'none'}}>
                <a>Cadastrar usuário</a>

                </SigninButton>

              </SigninButtonContainer>
            </form>
          </SigninBox>
        </SigninRightBox>
        <SigninImageBox>
          <img src={men} alt="Homem fazendo pagamento com PayFriends" />
        </SigninImageBox>
      </SigninContainer>
    </>
  )
}
