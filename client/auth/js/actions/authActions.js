import axios from "axios";
import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
} from "../constants/ActionTypes";
//register user
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/register", formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//login user
export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
