import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../assets/styles/variaveis'
import { IBotaoRedondo } from '../../types'

export const Circulo = styled(Link)<IBotaoRedondo>`
  height: 56px;
  width: 56px;
  background-color: ${variaveis.cinzaClaro};
  color: ${variaveis.azulEscuroAcinzentado};
  position: fixed;
  bottom: 40px;
  ${({ voltar }) => (voltar ? 'left: 40px;' : 'right: 40px;')}
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
