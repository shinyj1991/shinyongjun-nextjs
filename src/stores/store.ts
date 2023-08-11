import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coreReducer from './features/core';
import diaryReducer from './features/diary';

const reducer = combineReducers({
  core: coreReducer,
  diary: diaryReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;