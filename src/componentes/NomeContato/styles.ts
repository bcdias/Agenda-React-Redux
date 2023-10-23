import { styled } from 'styled-components'
import variaveis from '../../assets/styles/variaveis'
import { Link } from 'react-router-dom'

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
export const Contato = styled.li`
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 100px;
  margin-bottom: 4px;
`
export const LinkContato = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px;
`

export const Nome = styled.p`
  color: ${variaveis.cinzaClaro};
  font-weight: bold;
`
