import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsAPI } from "./features/services/product";
import { authAPI } from "./features/services/auth";
import { categoriesAPI } from "./features/services/categories";
import { subCategoriesAPI } from "./features/services/subcategories";
import { vouchersAPI } from "./features/services/voucher";
import { cartAPI } from "./features/services/cart";
import { servicesAPI } from "./features/services/services";
import { bookingsAPI } from "./features/services/booking";
import { orderAPI } from "./features/services/order";
import { userAPI } from "./features/services/user";
import cartSlice from "./features/cart/cart";
import userSlice from "./features/user/user";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

// Create an encryption transform
const encryptor = encryptTransform({
  secretKey: "your-secret-key", // Use a strong secret key here
  onError: (error) => {
    console.error("Encryption error:", error);
  },
});

// Combine all slice reducers and API reducers into a single rootReducer
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  user: userSlice.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [subCategoriesAPI.reducerPath]: subCategoriesAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [vouchersAPI.reducerPath]: vouchersAPI.reducer,
  [cartAPI.reducerPath]: cartAPI.reducer,
  [servicesAPI.reducerPath]: servicesAPI.reducer,
  [bookingsAPI.reducerPath]: bookingsAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

// Configuration for redux-persist with encryption
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"], // Only persist cart and user state
  transforms: [encryptor], // Add encryption transform
};

// Enhance rootReducer with persist capabilities and encryption
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Initialize the store with the persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(
      productsAPI.middleware,
      categoriesAPI.middleware,
      subCategoriesAPI.middleware,
      authAPI.middleware,
      vouchersAPI.middleware,
      cartAPI.middleware,
      servicesAPI.middleware,
      bookingsAPI.middleware,
      orderAPI.middleware,
      userAPI.middleware,
    ),
});

export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
