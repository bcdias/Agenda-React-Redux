import BotaoRedondo from '../../componentes/BotaoRedondo'
import ListaContatos from '../../container/ListaContatos'

const Principal = () => {
  return (
    <>
      <ListaContatos />
      <BotaoRedondo $voltar={false} />
    </>
  )
}

export default Principal
