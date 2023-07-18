import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Api } from '@/lib/api';
import { Tickers } from '@/lib/types';
import { ReduxState } from '..';

type State = {
  data: Tickers;
  isLoading: boolean;
  error: Error | undefined;
};

const initialState: State = {
  data: {},
  isLoading: false,
  error: undefined,
};

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTickers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTickers.rejected, (state, action: PayloadAction<Error | undefined>) => {
      state.error = action.payload;
    });
    builder.addCase(getTickers.fulfilled, (state, action: PayloadAction<Tickers>) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload;
    });
  },
});

export const getTickers = createAsyncThunk('getTickers', (symbols: string[], thunkAPI) => {
  const api = thunkAPI.extra.api as Api;
  return api.getTickers(symbols);
});

export const selectTickers = (state: ReduxState) => state.tickers.data;
export const selectIsLoading = (state: ReduxState) => state.tickers.isLoading;
export const selectError = (state: ReduxState) => state.tickers.error;

export default tickersSlice.reducer;
