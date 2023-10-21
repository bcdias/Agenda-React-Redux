import { useSelector } from 'react-redux'

import * as S from './styles'
import { RootReducer } from '../../store'
import NomeContato from '../../componentes/NomeContato'
import BarraPesqueisa from '../../componentes/BarraPesquisa/indesx'

const ListaContatos = () => {
  const { ListaDeContatos, Pesquisar } = useSelector(
    (state: RootReducer) => state
  )

  // Colocando contatos em orgem alfabética
  const contatosOrdenados = [...ListaDeContatos.contatos]
  contatosOrdenados.sort((a, b) => {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
  })

  // Função para pesquisar contatos
  const pesquisarContato = () => {
    let contatoPesquisado = contatosOrdenados

    if (Pesquisar.contatoPesquisado != undefined) {
      contatoPesquisado = contatoPesquisado.filter(
        (contato) =>
          contato.nome
            .toLowerCase()
            .search(Pesquisar.contatoPesquisado.toLocaleLowerCase()) >= 0
      )
      return contatoPesquisado
    } else {
      return contatosOrdenados
    }
  }

  // Lista com contatos filtrados
  const contatos = pesquisarContato()

  return (
    <S.ContainerLista>
      <div>
        <S.Titulo>Lista de Contatos</S.Titulo>
        <BarraPesqueisa />
      </div>
      <S.ListaNomes>
        {contatos.map((contato) => (
          <S.Contato key={contato.id}>
            <NomeContato nome={contato.nome} />
          </S.Contato>
        ))}
      </S.ListaNomes>
    </S.ContainerLista>
  )
}

export default ListaContatos
