import { styled } from 'styled-components'
import variaveis from '../../assets/styles/variaveis'

export const Pesquisa = styled.div`
  display: flex;
  align-items: center;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 50px;
  padding: 0 12px;
  width: 100%;
  border: none;
  margin-bottom: 32px;
  max-width: 400px;
`
export const BarraPesquisa = styled.input`
  color: ${variaveis.cinzaClaro};
  background-color: transparent;
  outline: none;
  font-weight: bold;
  border: none;
  margin: 4px 0;
  width: 100%;

  &::-webkit-input-placeholder {
    color: ${variaveis.cinzaMedio};
  }
  &::-ms-input-placeholder {
    color: ${variaveis.cinzaMedio};
  }
`
