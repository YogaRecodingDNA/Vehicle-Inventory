import { configureStore } from '@reduxjs/toolkit';
import { carsReducer, changeSearchTerm, addCar, removeCar } from './slices/carsSlice';
import { carFormReducer, changeName, changeCost } from './slices/carFormSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: carFormReducer
  }
});

export {
  store,
  changeName,
  changeCost,
  addCar,
  removeCar,
  changeSearchTerm
};