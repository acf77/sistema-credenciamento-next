import {
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  DELETE_EVENT,
} from "../constants/constants";

import axios from "axios";

// const data = {
//   _id: "623795054aed623fd752fb01",
//   nome: "Aniversario 15 anos - Alicia",
//   data: "24-06-2022",
//   local: "Espaço Renascença",
//   numConvites: 100,
//   listaConvidados: [
//     {
//       nome: "Joao",
//       celular: "98994567874",
//       email: "joao@exemplo.com",
//       senhas: 3,
//       _id: "623795054aed623fd752fb02",
//       createdAt: "2022-03-20T20:56:37.638Z",
//       updatedAt: "2022-03-20T20:56:37.638Z",
//     },
//     {
//       nome: "Ana",
//       celular: "98994569752",
//       email: "ana@exemplo.com",
//       senhas: 4,
//       _id: "623795054aed623fd752fb03",
//       createdAt: "2022-03-20T20:56:37.639Z",
//       updatedAt: "2022-03-20T20:56:37.639Z",
//     },
//     {
//       nome: "Alberto Santa",
//       celular: "98945869752",
//       email: "alberto@exemplo.com",
//       senhas: 0,
//       _id: "623795054aed623fd752fb04",
//       createdAt: "2022-03-20T20:56:37.639Z",
//       updatedAt: "2022-03-20T20:56:37.639Z",
//     },
//     {
//       nome: "José Christyan",
//       celular: "98994697752",
//       email: "ze@exemplo.com",
//       senhas: 1,
//       _id: "623795054aed623fd752fb05",
//       createdAt: "2022-03-20T20:56:37.640Z",
//       updatedAt: "2022-03-20T20:56:37.640Z",
//     },
//   ],
//   createdAt: "2022-03-20T20:56:37.640Z",
//   updatedAt: "2022-03-20T20:56:37.640Z",
//   __v: 0,
// };

export const addEvent = (eventData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_EVENT_REQUEST,
    });

    const call = await axios({
      method: "POST",
      url: "http://localhost:8080/api/events",
      data: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: ADD_EVENT_SUCCESS,
      payload: call.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_EVENT_FAIL,
      payload: error.response.data,
    });
  }
};
