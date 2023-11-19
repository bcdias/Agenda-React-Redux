import { useState } from 'react'
import { Container } from '../../assets/styles'
import InputMask from 'react-input-mask'
import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { useParams, useNavigate } from 'react-router-dom'
import { IContato } from '../../types'
import { atualizar, remover } from '../../store/reducers/contatos'

const DadosContato = () => {
  const { contatos } = useSelector(
    (state: RootReducer) => state.ListaDeContatos
  )
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const { id } = useParams()
  const contato = filtrarContato()
  const [nome, setNome] = useState(contato.nome)
  const [telefone, setTelefone] = useState(contato.telefone)
  const [email, setEmail] = useState(contato.email)
  const navegate = useNavigate()

  function filtrarContato(): IContato {
    const dadosContato = contatos.filter(
      (contato) => contato.id.toString() === id
    )
    return dadosContato[0]
  }

  function salvar(nome: string, telefone: string, email: string): void {
    // Removendo caracteres especiais dos telefone
    const telefoneEditado = telefone.replace(/[^0-9]/g, '')

    // criando contato editado
    const contatoEditado: IContato = {
      id: contato.id,
      nome: nome,
      telefone: telefoneEditado,
      email: email
    }

    // Atualizando contato
    dispatch(atualizar(contatoEditado))

    // Mudando status de edição
    setEstaEditando(!estaEditando)
  }

  function cancelar(): void {
    setEstaEditando(!estaEditando)
    setNome(contato.nome)
    setTelefone(contato.telefone)
    setEmail(contato.email)
  }

  function removerContato(id: number): void {
    dispatch(remover(id))
    navegate('/')
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
          mask="(99)99999-9999"
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
            <S.BotaoSalver onClick={() => salvar(nome, telefone, email)}>
              Salvar
            </S.BotaoSalver>
            <S.BotaoRemoverCancelar onClick={cancelar}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => navegate('/')}>voltar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar onClick={() => removerContato(contato.id)}>
              Remover
            </S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </Container>
  )
}

export default DadosContato
