import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }
`
export const Container = styled.div`
  background-color: ${variaveis.azulEscuroAcinzentado};
  padding: 32px 0 16px;
  height: 100vh;
`

export default GlobalStyle
