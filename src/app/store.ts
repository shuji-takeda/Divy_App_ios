import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import margeReducer from '../features/Logs/logsSlice';

export const store = configureStore({
  reducer: {
    counter: margeReducer,
    logControll: margeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;