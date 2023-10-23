import { useState } from 'react'
import { Container } from '../../assets/styles'
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
  const contato = filtrarContato()
  const [nome, setNome] = useState(contato.nome)
  const [telefone, setTelefone] = useState(contato.telefone)
  const [email, setEmail] = useState(contato.email)

  function filtrarContato(): IContato {
    const dadosContato = contatos.filter(
      (contato) => contato.id.toString() === id
    )
    return dadosContato[0]
  }

  function cancela() {
    setEstaEditando(!estaEditando)
    setNome(contato.nome)
    setTelefone(contato.telefone)
    setEmail(contato.email)
  }

  return (
    <Container>
      <S.Entrada
        nomeContato={true}
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        disabled={!estaEditando}
      />
      <S.FormaDeContato>
        <S.Legenda htmlFor="telefone">Telefone</S.Legenda>
        <S.Entrada
          nomeContato={false}
          as={InputMask}
          mask="+\5\5\(99)99999-9999"
          maskChar="_"
          type="tel"
          id="telefone"
          name="telefone"
          value={telefone}
          placeholder="+55(00)00000-0000"
          onChange={({ target }) => setTelefone(target.value)}
          disabled={!estaEditando}
        />
      </S.FormaDeContato>
      <S.FormaDeContato>
        <S.Legenda htmlFor="email">E-mail</S.Legenda>
        <S.Entrada
          nomeContato={false}
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="exemplo@email.com"
          onChange={({ target }) => setEmail(target.value)}
          disabled={!estaEditando}
        />
      </S.FormaDeContato>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalver>Salvar</S.BotaoSalver>
            <S.BotaoRemoverCancelar onClick={cancela}>
              Cancelar
            </S.BotaoRemoverCancelar>
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
