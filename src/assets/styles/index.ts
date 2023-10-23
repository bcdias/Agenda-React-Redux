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
export const Principal = styled.main`
  background-color: ${variaveis.azulEscuroAcinzentado};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const Container = styled.div`
  margin-top: 32px;
  max-width: 380px;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const Titulo = styled.h1`
  color: ${variaveis.cinzaClaro};
  font-size: 32px;
  text-align: center;
  margin-bottom: 32px;
`

export default GlobalStyle
