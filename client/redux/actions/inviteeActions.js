import {
  ADD_INVITEE_REQUEST,
  ADD_INVITEE_SUCCESS,
  ADD_INVITEE_FAIL,
  DELETE_INVITEE,
} from "../constants/constants";

import axios from "axios";

export const addInvitee = (inviteeData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_INVITEE_REQUEST,
    });

    // console.log(`http://localhost:8080/api/${inviteeData._id}/invitee`);

    const call = await axios({
      method: "PUT",
      url: `http://localhost:8080/api/events/invitee`,
      data: inviteeData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: ADD_INVITEE_SUCCESS,
      payload: call,
    });
  } catch (error) {
    dispatch({
      type: ADD_INVITEE_FAIL,
      payload: error.response,
    });
  }
};
