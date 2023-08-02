This is a short demo of Bitfinex api using redux as store

## Live
https://bitfinex-demo-nu.vercel.app

## Github

https://github.com/gblejman/bitfinex-demo

## Pages

- /: displays ticker table, refetches at a set interval. Nav platform status badge is also refetched at a set interval
- /ws-messages: displays ws messages after subscribing via ws

## Redux

- platform slice: handles platform status. Manual thunk + reducers - no toolkit helpers
- tickers slice: handles rest tickers. Thunk created with createAsyncThunk + extraReducers builder
- ws slice: handles ws messages. Regular thunk + reducers

## Configuration

Create .env.local, copy .env.example values and run:

```bash
npm run dev
```

\*\* Note that api endpoint is pointing to the documentation endpoint which is acting as a proxy - as a way to avoid CORS issues.

## Live

tickers: https://bitfinex-demo-nu.vercel.app/
ws messages: https://bitfinex-demo-nu.vercel.app/ws-messages
