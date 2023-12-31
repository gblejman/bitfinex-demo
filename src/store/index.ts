import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';

import { config } from '@/lib/config';
import { logger } from '@/lib/logger';
import { api } from '@/lib/api';
import { createWs } from '@/lib/ws';

import platformSlice from './features/platformSlice';
import tickersSlice from './features/tickersSlice';
import wsSlice, { addMessage } from './features/wsSlice';

const log = logger.child({ module: 'store' });

/* Types */
export type ReduxStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>;

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export const store = configureStore({
  reducer: {
    platform: platformSlice,
    tickers: tickersSlice,
    ws: wsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});

store.subscribe(() => log.debug(store.getState(), 'store state'));

export const ws = createWs({
  url: config.ws.url,
  onMessage: (message) => store.dispatch(addMessage(message)),
});
