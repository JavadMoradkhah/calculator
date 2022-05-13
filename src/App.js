/* 
  Author: Javad Moradkhah
  Email: javadmoradkhah.dev@gmail.com
  LinkedIn: https://www.linkedin.com/in/javad-moradkhah/
*/

import { useReducer } from 'react';
import Actions from './utils/Actions';
import DigitButton from './components/DigitButton';
import OperatorBtn from './components/OperatorBtn';
import reducer from './reducers/AppReducer';
import formatOperand from './utils/OperandFormatter';

function App() {
  const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator">
      <div className="calculator__display">
        <div className="prev-operand">
          {formatOperand(prevOperand)} {operation}
        </div>
        <div className="curr-operand">{formatOperand(currOperand)}</div>
      </div>

      <button
        className="col-span-2"
        onClick={() => dispatch({ type: Actions.CLEAR })}
      >
        C
      </button>
      <button onClick={() => dispatch({ type: Actions.DELETE_DIGIT })}>
        DEL
      </button>
      <OperatorBtn operation="÷" dispatch={dispatch} />

      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperatorBtn operation="×" dispatch={dispatch} />

      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperatorBtn operation="+" dispatch={dispatch} />

      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperatorBtn operation="-" dispatch={dispatch} />

      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="col-span-2 equal-btn"
        onClick={() => dispatch({ type: Actions.EVALUATE })}
      >
        =
      </button>
    </div>
  );
}

export default App;
