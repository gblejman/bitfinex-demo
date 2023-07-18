import axios, { AxiosError, isAxiosError } from 'axios';
import { config } from './config';
import { logger } from './logger';
import { StatusResponse, TickerResponse } from './types';

const log = logger.child({ module: 'api' });

const client = axios.create({
  baseURL: config.api.url,
  timeout: config.api.timeout,
});

client.interceptors.request.use(
  (config) => {
    const { method, baseURL, url, params, data } = config;
    log.debug({ method, baseURL, url, params, data }, 'request');

    return config;
  },
  (error) => {
    log.debug(error, 'request error');
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    log.debug(error, 'response error');
    return Promise.reject(error);
  },
);

const getStatus = async () => {
  const [data]: StatusResponse = await client.request({
    url: '/platform/status',
  });

  return data;
};

const getTickers = async (symbols: string[] = ['ALL']) => {
  const data: TickerResponse = await client.request({
    url: '/tickers',
    params: { symbols: symbols.join(',') },
  });

  return data;
};

export const api = {
  getStatus,
  getTickers,
};

export type Api = typeof api;

// const buildTicker = ([
//   bid,
//   bidSize,
//   ask,
//   askSize,
//   dialyChange,
//   dailyChangeRelative,
//   lastPrice,
//   volume,
//   high,
//   low,
// ]) =>

// const buildTicker = (values: unknown[]) => {
//   const symbol = values[0];

//   if (symbol.start)
// }
// const buildTicker = ([
//   bid,
//   bidSize,
//   ask,
//   askSize,
//   dialyChange,
//   dailyChangeRelative,
//   lastPrice,
//   volume,
//   high,
//   low,
// ]) => ({

//     bid,
//     bidSize,
//     ask,
//     askSize,
//     dialyChange,
//     dailyChangeRelative,
//     lastPrice,
//     volume,
//     high,
//     low,

// })
