import { createSlice } from '@reduxjs/toolkit';

const carFormSlice = createSlice({
  name: 'car-form',
  initialState: {
    name: '',
    cost: 0
  },
  reducers:{
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeCost: (state, action) => {
      state.cost = action.payload;
    }
  }
});

export const { changeName, changeCost } = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;