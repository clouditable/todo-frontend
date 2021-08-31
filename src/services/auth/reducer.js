import {
  LOGIN,
  LOGOUT,
  FETCH_USER,
  SHOW_ERROR,
  CLEAR_ERROR,
  SET_LOADING,
} from "./constants";

export const authInitialState = {
  isAuthenticated: false,
  isLoading: false,
  token: null,
  user: null,
  error: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = authInitialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      const user = localStorage.getItem("qooper-user")
        ? JSON.parse(localStorage.getItem("qooper-user"))
        : null;
      const token = localStorage.getItem("qooper-token")
        ? JSON.parse(localStorage.getItem("qooper-token"))
        : null;

      return {
        ...state,
        isAuthenticated: !!token,
        user: user,
        token: token,
      };
    case LOGIN:
      localStorage.setItem("qooper-user", JSON.stringify(action.payload.user));
      localStorage.setItem("qooper-token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: "",
      };
    default:
      return state;
  }
};
