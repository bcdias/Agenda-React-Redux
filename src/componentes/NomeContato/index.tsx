import * as S from './styles'

type Props = {
  nome: string
  id: number
}

const NomeContato = ({ nome, id }: Props) => {
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
