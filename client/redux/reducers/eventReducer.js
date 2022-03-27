import {
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  DELETE_EVENT,
} from "../constants/constants";

export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT_REQUEST:
      return { loading: true };
    case ADD_EVENT_SUCCESS:
      return { ...state, loading: false, eventData: action.payload };
    case ADD_EVENT_FAIL:
      return { ...state, loading: false, eventData: action.payload };
    case DELETE_EVENT:
      return {};
    default:
      return state;
  }
};
