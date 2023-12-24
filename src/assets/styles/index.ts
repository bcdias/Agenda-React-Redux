import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

type Props = {
  nomeContato: boolean
}

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
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 700px;
    width: 100%;
  }
`
export const Titulo = styled.h1`
  color: ${variaveis.cinzaClaro};
  font-size: 32px;
  text-align: center;
  margin-bottom: 32px;
`

export const EntradaContainer = styled.div`
  width: 55%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: center;
`

export const Legenda = styled.label`
  color: ${variaveis.cinzaMedio};
  display: block;
`
export const Entrada = styled.input<Props>`
  text-align: ${({ nomeContato }) => (nomeContato ? 'center' : 'start')};
  font-size: ${({ nomeContato }) => (nomeContato ? '24px' : '')};
  padding: ${({ nomeContato }) => (nomeContato ? '0' : '8px')};
  margin: ${({ nomeContato }) => (nomeContato ? '0 0 32px' : '8px 0 24px')};
  border: ${({ nomeContato }) => (nomeContato ? 'none' : '')};
  width: 100%;
  background-color: ${({ nomeContato }) =>
    nomeContato ? 'transparent' : variaveis.cinzaClaro};
  color: ${({ nomeContato }) =>
    nomeContato ? variaveis.cinzaClaro : variaveis.cinzaEscuro};
  border-color: ${variaveis.cinzaMedio};
  border-radius: 8px;
  font-weight: bold;
`

export const Botao = styled.button`
  color: ${variaveis.cinzaClaro};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalver = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export default GlobalStyle
