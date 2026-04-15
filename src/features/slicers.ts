import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IPeople } from 'swapi-ts';

export type State = {
  checkedCards: IPeople[];
};

const initialState: State = {
  checkedCards: [],
};

export const cardSlice = createSlice({
  name: 'card-list',
  initialState,
  reducers: {
    addCardByList: (state, action: PayloadAction<IPeople>) => {
      const exists = state.checkedCards.some((card) => card.name === action.payload.name);
      if (!exists) {
        state.checkedCards.push(action.payload);
      }
    },
    destroyCardByList: (state, action: PayloadAction<number>) => {
      state.checkedCards.splice(action.payload, 1);
    },
    unselectAll: (state) => {
      state.checkedCards = [];
    },
  },
});
export const { addCardByList, destroyCardByList, unselectAll } = cardSlice.actions;
export default cardSlice.reducer;
