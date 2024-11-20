import ActionTypes from "./actionTypes";

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload,
  };
};

export const toggleStatus = (payload) => ({
  type: ActionTypes.TOGGLE,
  payload,
});
