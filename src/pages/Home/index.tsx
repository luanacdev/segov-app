import { Header } from '../../components/Header'
import { HeaderTitle, Container } from './styles'


export function Home() {
  return (
    <>
      <Header />
      <Container>
        <HeaderTitle>
          Boas vindas fulano de tal
        </HeaderTitle>
      </Container>
    </>
  )
}
