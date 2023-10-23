import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyle, { Principal } from './assets/styles'
import routes from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Principal>
        <RouterProvider router={routes} />
      </Principal>
    </Provider>
  )
}

export default App
