import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as S from '../../assets/styles'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { IContato } from '../../types'
import { adicionar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'
import { NovoContatoForm } from './styles.ts'

const NovoContato = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const navegate = useNavigate()

  function salvar(nome: string, telefone: string, email: string): void {
    // Removendo caracteres especiais dos telefone
    const telefoneEditado = telefone.replace(/[^0-9]/g, '')

    // criando contato editado
    const idUnico = uuidv4()

    const contatoEditado: IContato = {
      id: idUnico,
      nome: nome,
      telefone: telefoneEditado,
      email: email
    }

    // Atualizando contato
    dispatch(adicionar(contatoEditado))

    // Volta para lista de contatos
    navegate('/')
  }

  return (
    <S.Container>
      <S.Titulo>Novo contato</S.Titulo>
      <NovoContatoForm onSubmit={() => salvar(nome, telefone, email)}>
        <S.EntradaContainer>
          <S.Legenda htmlFor="telefone">Nome *</S.Legenda>
          <S.Entrada
            nomeContato={false}
            type="text"
            placeholder="Insira o nome do novo contato"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            required
          />
        </S.EntradaContainer>
        <S.EntradaContainer>
          <S.Legenda htmlFor="telefone">Telefone *</S.Legenda>
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
            required
          />
        </S.EntradaContainer>
        <S.EntradaContainer>
          <S.Legenda htmlFor="email">E-mail</S.Legenda>
          <S.Entrada
            nomeContato={false}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="exemplo@email.com"
            onChange={({ target }) => setEmail(target.value)}
          />
        </S.EntradaContainer>
        <S.BarraAcoes>
          <S.BotaoSalver type="submit">Salvar</S.BotaoSalver>
        </S.BarraAcoes>
      </NovoContatoForm>
    </S.Container>
  )
}

export default NovoContato
