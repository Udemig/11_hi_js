import { createStore, combineReducers, applyMiddleware } from 'redux';
import restaurantReducer from './reducers/restaurantReducer';
import cartReducer from './reducers/cartReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  restaurantReducer,
  cartReducer,
});

// apply middleware herhangi arayızılımı redux'a dahil etmeye yarar.
// bi burada thunk'ı dahil etmek için kullanıyoruz
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
