This is a short demo of Bitfinex api using redux as store

## Redux

- platform slice: contains a regular manually configured thunk - no toolkit helpers
- tickers slice: contains a thunk created with createAsyncThunk + extraReducers builder

## Configuration

Create .env.local, copy .env.example values and run:

```bash
npm run dev
```

Note that api endpoint is pointing to the documentation endpoint which is acting as a proxy - as a way to avoid CORS issues.
