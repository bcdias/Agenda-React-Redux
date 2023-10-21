import * as S from './styles'

type Props = {
  nome: string
}

const NomeContato = ({ nome }: Props) => {
  const letra = nome.slice(0, 1)

  return (
    <>
      <S.Letra>
        <span>{letra.toUpperCase()}</span>
      </S.Letra>
      <S.Nome>{nome}</S.Nome>
    </>
  )
}

export default NomeContato
