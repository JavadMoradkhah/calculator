import Actions from '../utils/Actions';

export default function OperatorBtn({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: Actions.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
