import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Contato = {
  id: number
  nome: string
}

type ContatosState = {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: [
    { id: 2, nome: 'Mariana' },
    { id: 1, nome: 'Bruno' },
    { id: 3, nome: 'Monique' },
    { id: 4, nome: 'Elizabeth' }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
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
