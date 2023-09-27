import { CHANGE_IDIOM } from './action.js';

const initialState = {
  idioms: "ES",
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_IDIOM:
      return {
        ...state,
        idioms: payload,
      };

    default:
      return {
        ...state,
      };
  }
}
