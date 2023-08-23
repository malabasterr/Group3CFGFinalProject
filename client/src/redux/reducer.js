// reducer.js
import { SET_USERNAME, LOGOUT } from './actionTypes';

const initialState = {
  username: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case LOGOUT:
      return { ...state, username: null };
    default:
      return state;
  }
}

export default userReducer;