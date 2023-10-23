import { useState } from 'react'
import { Container, Titulo } from '../../assets/styles'
import InputMask from 'react-input-mask'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useParams } from 'react-router-dom'
import { IContato } from '../../types'

const DadosContato = () => {
  const { contatos } = useSelector(
    (state: RootReducer) => state.ListaDeContatos
  )
  const [estaEditando, setEstaEditando] = useState(false)
  const { id } = useParams()

  const filtrarContato = (): IContato => {
    const dadosContato = contatos.filter(
      (contato) => contato.id.toString() === id
    )
    return dadosContato[0]
  }

  const contato = filtrarContato()

  return (
    <Container>
      <Titulo as="h2">{contato.nome}</Titulo>
      <S.Legenda htmlFor="telefone">Telefone</S.Legenda>
      <S.Entrada
        as={InputMask}
        mask="(99)99999-9999"
        maskChar="_"
        type="tel"
        id="telefone"
        name="telefone"
        value={contato.telefone}
        placeholder="(00)00000-0000"
        disabled={!estaEditando}
      />
      <S.Legenda htmlFor="email">E-mail</S.Legenda>
      <S.Entrada
        type="email"
        id="email"
        name="email"
        value={contato.email}
        placeholder="exemplo@email.com"
        disabled={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalver>Salvar</S.BotaoSalver>
            <S.BotaoRemoverCancelar>Cancelar</S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar>Remover</S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </Container>
  )
}

export default DadosContato
