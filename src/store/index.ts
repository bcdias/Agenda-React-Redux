import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import pesquisarReducer from './reducers/pesquisar'

export const store = configureStore({
  reducer: {
    ListaDeContatos: contatosReducer,
    Pesquisar: pesquisarReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
