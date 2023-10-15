import { createBrowserRouter } from 'react-router-dom'

import ListaContatos from '../container/ListaContatos'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ListaContatos />
  }
])

export default routes
