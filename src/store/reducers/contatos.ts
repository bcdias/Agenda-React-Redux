import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IContato } from '../../types'

type ContatosState = {
  contatos: IContato[]
}

const initialState: ContatosState = {
  contatos: [
    {
      id: '2',
      nome: 'Emergência',
      telefone: '190',
      email: 'emergencia@email.com'
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
    },

    atualizar: (state, action: PayloadAction<IContato>) => {
      // Encontrando indice do contato que vai ser atualizado
      const indiceContato = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )

      // Atualizando contato
      if (indiceContato >= 0) {
        state.contatos[indiceContato] = action.payload
      }
    },

    remover: (state, action: PayloadAction<string>) => {
      state.contatos = [
        ...state.contatos.filter((contato) => contato.id !== action.payload)
      ]
    }
  }
})

export const { adicionar, atualizar, remover } = contatosSlice.actions
export default contatosSlice.reducer
