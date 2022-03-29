import {
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  DELETE_EVENT,
  LIST_EVENTS_REQUEST,
  LIST_EVENTS_SUCCESS,
  LIST_EVENTS_FAIL,
  LIST_EVENT_DETAILS_REQUEST,
  LIST_EVENT_DETAILS_SUCCESS,
  LIST_EVENT_DETAILS_FAIL,
} from "../constants/constants";
import { HYDRATE } from "next-redux-wrapper";

export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT_REQUEST:
      return { loading: true };
    case ADD_EVENT_SUCCESS:
      return { loading: false, isLoading: action.payload };
    case ADD_EVENT_FAIL:
      return { loading: false, isLoading: action.payload };
    case LIST_EVENTS_REQUEST:
      return { loading: true };
    case LIST_EVENTS_SUCCESS:
      return { loading: false, isLoading: action.payload };
    case LIST_EVENTS_FAIL:
      return { loading: false, isLoading: action.payload };
    case LIST_EVENT_DETAILS_REQUEST:
      return { loading: true };
    case LIST_EVENT_DETAILS_SUCCESS:
      return { loading: false, isLoading: action.payload };
    case LIST_EVENT_DETAILS_FAIL:
      return { loading: false, isLoading: action.payload };
    case DELETE_EVENT:
      return {};
    default:
      return state;
  }
};
