import styled from 'styled-components'
import variaveis from '../../assets/styles/variaveis'

export const ContainerLista = styled.div`
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

export const ListaNomes = styled.ul`
  height: calc(100vh - 180px);
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 170px);
  }
`

export const Contato = styled.div`
  display: flex;
  align-items: center;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 100px;
  margin-bottom: 4px;
  padding: 8px;
`
