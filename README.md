This is a short demo of Bitfinex api/ws using redux as store and nextjs

## Live

https://bitfinex-demo-nu.vercel.app (tickers)
https://bitfinex-demo-nu.vercel.app/ws-messages (websocket msgs)

## Pages

- https://bitfinex-demo-nu.vercel.app Shows tickers, refetches at interval. Nav shows status badge, refetches at interval
- https://bitfinex-demo-nu.vercel.app/ws-messages Shows ws messages after subscribing via button

## Redux

Showcase different ways to create actions/thunks:

- platform slice: handles platform status. Manual thunk + reducers - no toolkit helpers
- tickers slice: handles rest tickers. Thunk created with createAsyncThunk + extraReducers builder
- ws slice: handles ws messages. Regular thunk + reducers

## Configuration

Create .env.local, copy .env.example values and run:

```bash
npm run dev
```

\*\* Note that api endpoint is defaulting to using documentation endpoint (readme.io) which is acting as a proxy - as a way to avoid CORS issues for demo purposes

## Github

https://github.com/gblejman/bitfinex-demo
