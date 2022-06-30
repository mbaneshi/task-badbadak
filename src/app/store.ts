import { configureStore } from "@reduxjs/toolkit";
import { restoreSlice } from "../feature/Restore/restoreSlice";
//const middlewareEnhancer = applyMiddleware(Middleware);

// const listenerMiddleware = createListenerMiddleware();
// listenerMiddleware.startListening({actionCreator:restoreSlice.actions});

export const store = configureStore({
  reducer: {
    restore: restoreSlice.reducer,
  },
  // middleware: middlewareEnhancer();,
  //   middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
