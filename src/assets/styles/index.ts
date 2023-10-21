import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  list-style: none;
  }
`
export const Container = styled.div`
  background-color: ${variaveis.azulEscuroAcinzentado};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export default GlobalStyle
