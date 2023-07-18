export type Status = 0 | 1;
export type StatusResponse = Status[];

export type TradingSymbol = `t${string}`;
export type FundingSymbol = `f${string}`;
export type Sym = TradingSymbol | FundingSymbol;

export type TradingTickerArr = [
  TradingSymbol,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export type FundingTickerArr = [
  FundingSymbol,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  null,
  null,
  number,
];

export type TickerArr = TradingTickerArr | FundingTickerArr;
export type TickersResponse = TickerArr[];

export type TradingTicker = {
  symbol: TradingSymbol;
  bid: number;
  bidSize: number;
  ask: number;
  askSize: number;
  dialyChange: number;
  dailyChangeRelative: number;
  lastPrice: number;
  volume: number;
  high: number;
  low: number;
};

export type FundingTicker = {
  symbol: FundingSymbol;
  frr: number;
  bid: number;
  bidPeriod: number;
  bidSize: number;
  ask: number;
  askPeriod: number;
  askSize: number;
  dailyChange: number;
  dailyChangePerc: number;
  lastPrice: number;
  volume: number;
  high: number;
  low: number;
  frrAmountAvailable: number;
};

export type Ticker = TradingTicker | FundingTicker;

export type Tickers = {
  [key: Sym]: Ticker;
};
