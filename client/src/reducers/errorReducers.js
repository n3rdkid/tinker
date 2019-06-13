import { GET_ERRORS } from "../actions/types";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
<<<<<<< Updated upstream
      return action.payload
=======
      return {...state,err:action.payload};
>>>>>>> Stashed changes
    default:
      return state;
  }
}
