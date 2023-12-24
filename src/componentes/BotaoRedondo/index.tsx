import { FaPlus, FaChevronLeft } from 'react-icons/fa'

import { IBotaoRedondo } from '../../types'
import { Circulo } from './styles'

const BotaoRedondo = ({ voltar }: IBotaoRedondo) => {
  const destino = voltar ? '/' : 'cadastro'

  return (
    <div>
      {voltar ? (
        <Circulo voltar to={destino}>
          <FaChevronLeft size="25" />
        </Circulo>
      ) : (
        <Circulo to={destino}>
          <FaPlus size="25" />
        </Circulo>
      )}
    </div>
  )
}
export default BotaoRedondo
