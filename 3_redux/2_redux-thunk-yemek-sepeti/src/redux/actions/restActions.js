import axios from "axios";
import ActionTypes from "../actionTypes";

// Normal Redux Aksiyonu
export const setRestaurants = async (payload) => {
  return {
    type: ActionTypes.REST_SUCCESS,
    payload,
  };
};

// Redux Thunk - Asenkron Aksiyon
// Fonksiyon içerisinde fonksiyon return ederiz
export const getRestaurants = () => {
  return (dispatch) => {
    // asenkron işlemler yapabilir
    // dispatch ile reducer'a haber gönderebilir
    dispatch({ type: ActionTypes.REST_LOADING });

    axios
      .get("http://localhost:3000/restaurants")
      .then((res) =>
        dispatch({
          type: ActionTypes.REST_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({ type: ActionTypes.REST_ERROR, payload: err })
      );
  };
};
