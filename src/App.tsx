import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyle, { Container } from './assets/styles'
import routes from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
