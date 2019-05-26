import { TEST_DISPATCH } from "../actions/types";
import authActions from "../actions/authActions";
const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
        return (
            {
                ...state,
                user:action.payload
            }
        )
      break;
    default:
      return state;
  }
}
