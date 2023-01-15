import styled from "@emotion/styled";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import PropTypes from "prop-types";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;


const Total = styled.p`
  padding: 1rem;
  color: #00838f;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({cotizacion}) => {

  return (
    (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> :
      (
        <ResultadoCotizacion>
          <TransitionGroup
            component="span"
            className="resultado">
              <CSSTransition
                classNames="resultado"
                key={cotizacion}
                timeout={{enter: 500, exit: 500}}
              >
                <Total> El total es $ <span> {cotizacion} </span> </Total>
              </CSSTransition>
          </TransitionGroup>
        </ResultadoCotizacion>
      )
  );
};

Resultado.prototype = {
  cotizacion: PropTypes.number.isRequired
}
export default Resultado;
