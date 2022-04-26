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

import axios from "axios";

export const addEvent = (eventData) => async (dispatch) => {};

//## The actions below are being replaced by getServerSideProps at page render ##

// export const listEvents = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: LIST_EVENTS_REQUEST,
//     });

//     const { data } = await axios.get("http://localhost:8080/api/events/");

//     dispatch({
//       type: LIST_EVENTS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: LIST_EVENTS_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// export const listEventDetails = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: LIST_EVENT_DETAILS_REQUEST,
//       payload: { loading: true },
//     });

//     const data = setTimeout(() => {
//       {
//         return { loading: false };
//       }
//     }, 3000);

//     dispatch({
//       type: LIST_EVENT_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: LIST_EVENT_DETAILS_FAIL,
//       payload: error.response.data,
//     });
//   }
// };
