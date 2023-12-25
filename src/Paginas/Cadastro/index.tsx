import BotaoRedondo from '../../componentes/BotaoRedondo'
import NovoContato from '../../container/NovoContato'

const Cadastro = () => {
  return (
    <>
      <NovoContato />
      <BotaoRedondo $voltar={true} />
    </>
  )
}

export default Cadastro
