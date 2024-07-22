import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSliceClient';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
