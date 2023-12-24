import * as S from './styles'
import { IContato } from '../../types/index'

const NomeContato = ({ nome, id }: Pick<IContato, 'id' | 'nome'>) => {
  const letra = nome.slice(0, 1)

  return (
    <S.Contato>
      <S.LinkContato to={`contato/${id}`}>
        <S.Letra>
          <span>{letra.toUpperCase()}</span>
        </S.Letra>
        <S.Nome>{nome}</S.Nome>
      </S.LinkContato>
    </S.Contato>
  )
}

export default NomeContato
