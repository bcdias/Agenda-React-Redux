import { createBrowserRouter } from 'react-router-dom'

import ListaContatos from '../container/ListaContatos'
import DadosContato from '../container/DadosContato'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ListaContatos />
  },
  {
    path: 'contato/:id',
    element: <DadosContato />
  }
])

export default routes
