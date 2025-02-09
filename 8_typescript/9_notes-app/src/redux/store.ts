import tagsReducer from "./slices/tagsSlice";
import notesReducer from "./slices/notesSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persist mw ayarlarını yap
const persistConfig = {
  key: "root",
  storage,
};

// reducer'ları birleştir
const rootReducer = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
});

// reducer'ları persist' tanıt
const persistedReducers = persistReducer(persistConfig, rootReducer);

// store'u oluştur
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// useSelector ve useDispatch için gerekli tip tanımları
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
