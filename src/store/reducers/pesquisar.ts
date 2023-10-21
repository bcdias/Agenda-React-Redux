import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Busca = {
  contatoPesquisado: string
}

const initialState: Busca = {
  contatoPesquisado: ''
}

const pesquisarSlice = createSlice({
  name: 'pesquisar',
  initialState,
  reducers: {
    buscar: (state, action: PayloadAction<string>) => {
      state.contatoPesquisado = action.payload
    }
  }
})

export const { buscar } = pesquisarSlice.actions
export default pesquisarSlice.reducer
