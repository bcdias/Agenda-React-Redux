import styled from 'styled-components'

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
