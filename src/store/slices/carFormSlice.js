import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice'; // Listening for this action creator function 

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
  },
  extraReducers(builder) { // To remove text from form fields upon submission
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  }
});

export const { changeName, changeCost } = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;