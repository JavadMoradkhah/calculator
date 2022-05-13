import Actions from '../utils/Actions';

function evaluate({ currOperand, prevOperand, operation }) {
  const prev = parseFloat(prevOperand);
  const curr = parseFloat(currOperand);
  if (isNaN(prev) || isNaN(curr)) {
    return '';
  }
  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case '-':
      computation = prev - curr;
      break;
    case '×':
      computation = prev * curr;
      break;
    case '÷':
      computation = prev / curr;
      break;
  }

  return computation.toString();
}

export default function reducer(state, { type, payload }) {
  switch (type) {
    case Actions.ADD_DIGIT:
      if (state.overwrite) {
        return { ...state, currOperand: payload.digit, overwrite: false };
      }
      if (payload.digit === '0' && state.currOperand === '0') {
        return state;
      }
      if (payload.digit === '.' && state.currOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currOperand: `${state.currOperand || ''}${payload.digit}`,
      };
    case Actions.CLEAR:
      return {};

    case Actions.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currOperand: null,
        };
      }

      if (state.currOperand == null) {
        return state;
      }

      if (state.currOperand.length === 1) {
        return { ...state, currOperand: null };
      }

      return {
        ...state,
        currOperand: state.currOperand.slice(0, -1),
      };

    case Actions.CHOOSE_OPERATION:
      if (state.currOperand == null && state.prevOperand == null) {
        return state;
      }

      // Change operation before evaluation
      if (state.currOperand == null) {
        return { ...state, operation: payload.operation };
      }

      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null,
        };
      }

      return {
        ...state,
        prevOperand: evaluate(state),
        operation: payload.operation,
        currOperand: null,
      };

    case Actions.EVALUATE:
      if (
        state.operation == null ||
        state.currOperand == null ||
        state.prevOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        prevOperand: null,
        operation: null,
        currOperand: evaluate(state),
      };
  }
}
