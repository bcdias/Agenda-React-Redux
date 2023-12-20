import { createBrowserRouter } from 'react-router-dom'

import Principal from '../Paginas/Principal'
import Edicao from '../Paginas/Edicao'
import Cadastro from '../Paginas/Cadastro'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Principal />
  },
  {
    path: 'contato/:id',
    element: <Edicao />
  },
  {
    path: 'cadastro',
    element: <Cadastro />
  }
])

export default routes
