import { INCREMENT, DECREMENT } from '../actions/counter';

const INITIAL_STATE = {
  counter: 0,
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
