import styled from 'styled-components'

export const HeaderContent = styled.header`
  background: ${(props) => props.theme['blue-900']};
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  p {
    color: white;
    font-size: '20px'
  }
`

export const HeaderButtonSigout = styled.button`
  height: 50px;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50px;
  cursor: pointer;
  
  &:hover {
    background: ${(props) => props.theme['red-300']};
    transition: background-color 0.2s;
  }
`


