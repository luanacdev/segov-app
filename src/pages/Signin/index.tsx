import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
import {
  SigninBox,
  SigninButton,
  SigninButtonContainer,
  SigninContainer,
  SigninImageBox,
  SigninLogoBox,
  SigninRightBox
} from './styles'

import { useNavigate } from 'react-router-dom'
import men from '../../assets/men-on-cell-phone.svg'
import Input from '../../components/Form/Input/'
import { MESSAGE } from '../../utils/messages'

interface FieldValues {
  email: string;
  password: string;
}

interface SigninProps {
  onTestSignin?: (params: FieldValues) => void 
}

export function Signin({ onTestSignin }: SigninProps) {
  const {  signin } = useContext(AuthContext)
  const history = useNavigate();  

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

            <h1>Bem vindo de volta</h1>
            <form onSubmit={handleSubmit(onTestSignin || handleLogin)}>
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
                <SigninButton type="submit" onClick={() => {
                  if(onTestSignin){
                    const data = getValues();

                    onTestSignin(data)
                  }
                }}>
                  Entrar
                </SigninButton>
                <SigninButton 
                onClick={() => history('/signup')}
                style={{marginTop: '10px', background: 'gray', border: 'none'}}>
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
