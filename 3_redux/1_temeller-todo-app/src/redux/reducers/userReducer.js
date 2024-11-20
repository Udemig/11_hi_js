/*
 ! reducer
 * state'in nasıl değişeceğine karar veren fonk
 * bu fonksiyon 2 parametre alır:
 * >> state  : reducer'da tutulan verinin son durumu
 * >> action : verilerin nasıl değişeceğini ifade eden nesne
  
 * reducer fonksiyonunda return edilen değer state'in son değeri olur 
 * useReducer'dan farklı olarak redux'ra reducer yazarken state'in ilk değerini veriririz.
*/

const initialState = {
  user: null,
  token: "",
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  // reducer'a gelen aksiyonun tipine göre state'in nasıl değişeceğine karar ver
  switch (action.type) {
    case "LOGIN":
      return state; // burdan return edilen değer doğrudan state'i günceller

    case "SIGNUP":
      return state;

    case "LOGOUT":
      return state;

    // statei olduğu gibi tut
    default:
      return state;
  }
};

export default userReducer;
