import { GET_ERRORS } from "../actions/types";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, err: action.payload };
    default:
      return state;
  }
}
