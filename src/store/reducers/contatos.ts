import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IContato } from '../../types'

type ContatosState = {
  contatos: IContato[]
}

const initialState: ContatosState = {
  contatos: [
    {
      id: 2,
      nome: 'Mariana',
      telefone: '21982192763',
      email: 'meuemail@email.com'
    },
    {
      id: 1,
      nome: 'Bruno',
      telefone: '21982192763',
      email: 'meuemail@email.com'
    },
    {
      id: 3,
      nome: 'Monique',
      telefone: '21982192763',
      email: 'meuemail@email.com'
    },
    {
      id: 4,
      nome: 'Elizabeth',
      telefone: '21982192763',
      email: 'meuemail@email.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<IContato>) => {
      const novoContato = action.payload

      if (
        state.contatos.find(
          (contato) =>
            contato.nome.toLowerCase() === novoContato.nome.toLowerCase()
        )
      ) {
        alert('Contato já adicionado')
      } else {
        state.contatos.push(novoContato)
      }
    }
  }
})

export const { adicionar } = contatosSlice.actions
export default contatosSlice.reducer
