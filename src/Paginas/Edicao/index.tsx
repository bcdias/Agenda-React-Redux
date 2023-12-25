import BotaoRedondo from '../../componentes/BotaoRedondo'
import DadosContato from '../../container/DadosContato'

const Edicao = () => {
  return (
    <>
      <DadosContato />
      <BotaoRedondo $voltar={true} />
    </>
  )
}

export default Edicao
