import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
    LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
} from "../constants/ActionTypes";
const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  isLoading: false,
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };

    default:
      return state;
  }
};
export default authReducer;
