import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Api } from '../../lib/api';
import { ReduxDispatch, ReduxState } from '..';

type State = {
  data: number;
  isLoading: boolean;
  error: Error | undefined;
};

const initialState: State = {
  data: 1,
  isLoading: false,
  error: undefined,
};

export const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<number>) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<Error | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setStatus, setIsLoading, setError } = platformSlice.actions;

/** Simple thunk */
export const getStatus =
  () =>
  async (dispatch: ReduxDispatch, _getState: any, { api }: { api: Api }) => {
    try {
      dispatch(setIsLoading(true));
      const data = await api.getStatus();
      dispatch(setStatus(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const selectStatus = (state: ReduxState) => state.platform.data;
export const selectIsLoading = (state: ReduxState) => state.platform.isLoading;
export const selectError = (state: ReduxState) => state.platform.error;

export default platformSlice.reducer;
