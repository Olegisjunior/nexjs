import { configureStore } from "@reduxjs/toolkit";
// import { postsApi } from "./PostApi";
import postsSliceReducer from "./PostSlice";

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    // [postsApi.reducerPath]: postsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware), // Додаємо middleware для кешування та інших можливостей API
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
