import axios from "axios";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addCharacter = (character) => {
  const endpoint = "http://localhost:3001/fav";
  console.log("lleuge aca");
  console.log(character);
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      console.log(data);
      return dispatch({
        type: ADD_CHARACTER,
        payload: data,
      });
    });
  };
};

export const removeCharacter = (id) => {
  const endpoint = "http://localhost:3001/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_CHARACTER,
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
