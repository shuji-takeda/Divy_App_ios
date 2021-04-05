import {combineReducers, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {Log , Logs} from '../../domain/models';

interface LogsState {
  value:number;
  log: Log.LogModel;
}

const mock:Log.LogValues = {
  title: '1',
  diveNo: 2,
  date:'2021/03/01',
  location:'osaka',
  divePoint:'awaji',
  writeUser:'name',
  entryTime:'09:00',
  exitTime:'10:00',
}

const initialState: LogsState = {
  value:0,
  log: Log.factory(mock),
};

export const logControllerSlice = createSlice({
  name:'logControllerReducer',
  initialState,
  reducers:{}
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: RootState) => state.counter.counterReducer.value;

const margeReducer = combineReducers({
  counterReducer:counterSlice.reducer,
  logControllerReducer:logControllerSlice.reducer
})

export default margeReducer;
