import { BsSearch } from 'react-icons/bs'

import variaveis from '../../assets/styles/variaveis'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { buscar } from '../../store/reducers/pesquisar'

const BarraPesqueisa = () => {
  const dispatch = useDispatch()
  const { contatoPesquisado } = useSelector(
    (state: RootReducer) => state.Pesquisar
  )

  return (
    <S.Pesquisa>
      <S.BarraPesquisa
        type="text"
        placeholder="Buscar contato..."
        value={contatoPesquisado}
        onChange={({ target }) => dispatch(buscar(target.value))}
      />
      <BsSearch color={variaveis.cinzaClaro} size="20" />
    </S.Pesquisa>
  )
}

export default BarraPesqueisa
