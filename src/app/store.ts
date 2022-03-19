import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authApi } from "../api/auth.api";
import { usersApi } from "../api/users.api";
import counterReducer from "../features/counter/counterSlice";
import auth from "../slices/auth.slice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
