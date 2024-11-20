import Types from "../actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // eğer aksiyonun type'ı add ise
    case Types.ADD:
      // aksiyonun payload'ı ile yeni gelen todoyu eskilerin arasına ekle
      const newTodos = state.todos.concat(action.payload);

      // state'in son halini return et
      return { todos: newTodos };

    case Types.DELETE:
      // diziden payload ile gelen id'li elemanı kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      return { todos: filtred };

    case Types.TOGGLE:
      // is_done değerini tersine çevir
      const updated = { ...action.payload, is_done: !action.payload.is_done };

      // dizideki eski nesnenin yerine yenisini koy
      const updatedTodos = state.todos.map((i) => (i.id === updated.id ? updated : i));

      return { todos: updatedTodos };

    case Types.UPDATE:
      // aksiyonun payload'ı ile gelen güncel elmanı dizide güncelle
      const editedTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { todos: editedTodos };

    case Types.SET:
      return { todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
