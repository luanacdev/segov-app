import styled from 'styled-components'

export const HeaderTitle = styled.h1`

`

export const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 20%;
  border-radius: 3px;
  border: 1px solid #007dfe;
  background-color: ${(props) => props.theme['blue-400']};
  color: white;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`

