import { Circulo } from './styles'

type Props = {
  editando: boolean
}

const BotaoRedondo = ({ editando }: Props) => {
  const destino = editando ? '/' : 'cadastro'

  return <Circulo to={destino}>+</Circulo>
}
export default BotaoRedondo
