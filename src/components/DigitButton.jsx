import Actions from '../utils/Actions';

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: Actions.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
