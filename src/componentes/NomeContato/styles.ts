import { styled } from 'styled-components'
import variaveis from '../../assets/styles/variaveis'

export const Letra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variaveis.cinzaClaro};
  color: ${variaveis.cinzaEscuro};
  font-weight: bold;
  font-size: 24px;
  border-radius: 50%;
  margin-right: 12px;
  height: 30px;
  width: 30px;
`
export const Nome = styled.p`
  color: ${variaveis.cinzaClaro};
  font-weight: bold;
`
