import { styled } from 'styled-components'
import variaveis from '../../assets/styles/variaveis'

export const Legenda = styled.label`
  color: ${variaveis.cinzaMedio};
`

export const Entrada = styled.input`
  padding: 8px;
  background-color: ${variaveis.cinzaClaro};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinzaEscuro};
  border-color: ${variaveis.cinzaMedio};
  margin: 8px 0 24px;
  width: 100%;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
export const Botao = styled.button`
  color: ${variaveis.cinzaClaro};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalver = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
