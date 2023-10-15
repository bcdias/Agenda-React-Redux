import { RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container } from './assets/styles'
import routes from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </>
  )
}

export default App
