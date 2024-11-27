import api from "../../api";
import ActionTypes from "../actionTypes";

// api'dan izleme listesindeki filmleri al reducer'a durumu haber vericek asenkron thunk aksiyonu
export const getWatchList = () => (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/19719088/watchlist/movies?language=tr`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) => dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message }));
};

// filmi izleme listesine ekleme/çıkarma isteği atıp başarılı olursa reducera haber vericek
export const toggleList = (movie, isAdd) => (dispatch) => {
  // body içeriğini hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  //api'a istek at
  api
    .post(`/account/19719088/watchlist`, body)
    .then(() => {
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};
