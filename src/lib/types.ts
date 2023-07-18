export type Status = 0 | 1;
export type StatusResponse = Status[];

export type TradingTicker = [
  `t${string}`,
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

export type FundingTicker = [
  `f${string}`,
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
  undefined,
  undefined,
  number,
];

export type Ticker = TradingTicker | FundingTicker;
export type TickerResponse = Ticker[];
