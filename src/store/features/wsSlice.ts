import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';
import { ws } from '..';

type State = {
  data: unknown[];
  error: Error | undefined;
};

const initialState: State = {
  data: [],
  error: undefined,
};

export const wsSlice = createSlice({
  name: 'ws',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<unknown[]>) => {
      state.data = action.payload;
    },
    addMessage: (state, action: PayloadAction<unknown>) => {
      state.data.push(action.payload);
    },
  },
});

export const { setMessages, addMessage } = wsSlice.actions;

export const watchTicker = (symbol: string) => () => {
  ws.watchTicker({ symbol });
};

export const close = () => () => {
  ws.close();
};

export const selecMessages = (state: ReduxState) => state.ws.data;
export const selectError = (state: ReduxState) => state.ws.error;

export default wsSlice.reducer;
