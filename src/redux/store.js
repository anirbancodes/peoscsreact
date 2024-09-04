// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

// Define the persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
