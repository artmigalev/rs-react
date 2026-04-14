import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IPeople } from 'swapi-ts';

const initialState: IPeople[] = [];

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCardByList: (state, action: PayloadAction<IPeople>) => {
      state.push(action.payload);
    },
    destroyCardByList: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    unselectAll: (state) => {
      state.splice(0, state.length);
    },
  },
});
export const { addCardByList, destroyCardByList, unselectAll } = cardSlice.actions;
export default cardSlice.reducer;
