import { cardSlice } from '@/features/slicers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: cardSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
