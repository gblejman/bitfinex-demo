import { Sym, Ticker, TickerArr, Tickers, TickersResponse } from '../types';

export const TRADING_TICKER_FIELDS = [
  [0, 'symbol'],
  [1, 'bid'],
  [2, 'bidSize'],
  [3, 'ask'],
  [4, 'askSize'],
  [5, 'dialyChange'],
  [6, 'dailyChangeRelative'],
  [7, 'lastPrice'],
  [8, 'volume'],
  [9, 'high'],
  [10, 'low'],
];

export const FUNDING_TICKER_FIELDS = [
  [0, 'symbol'],
  [1, 'frr'],
  [2, 'bid'],
  [3, 'bidPeriod'],
  [4, 'bidSize'],
  [5, 'ask'],
  [6, 'askPeriod'],
  [7, 'askSize'],
  [8, 'dailyChange'],
  [9, 'dailyChangePerc'],
  [10, 'lastPrice'],
  [11, 'volume'],
  [12, 'high'],
  [13, 'low'],
  // note: placeholder skips
  [16, 'frrAmountAvailable'],
];

export const mapTickers = (tickers: TickersResponse) => {
  return tickers.map(mapTicker).reduce((obj, ticker) => {
    obj[ticker.symbol] = ticker;
    return obj;
  }, {} as Tickers);
};

export const mapTicker = (ticker: TickerArr) => {
  const symbol: Sym = ticker[0];
  const fieldMapping = symbol.startsWith('t') ? TRADING_TICKER_FIELDS : FUNDING_TICKER_FIELDS;

  return fieldMapping.reduce((obj, [i, field]) => {
    obj[field] = ticker[i as number];
    return obj;
  }, {} as Ticker);
};
