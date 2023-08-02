import axios from 'axios';
import { config } from '../config';
import { logger } from '../logger';
import { StatusResponse, TickersResponse } from '../types';
import { mapTickers } from './utils';

const log = logger.child({ module: 'api' });

const client = axios.create({
  baseURL: config.api.url,
  timeout: config.api.timeout,
});

client.interceptors.request.use(
  (config) => {
    // remove keys where value is empty string
    const filteredParams = Object.entries(config.params || {}).filter(
      ([k, v]) => !(typeof v === 'string' && !v.length),
    );
    config.params = Object.fromEntries(filteredParams);

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
  const data: TickersResponse = await client.request({
    url: '/tickers',
    params: { symbols: symbols.join(',') },
  });

  return mapTickers(data);
};

export const api = {
  getStatus,
  getTickers,
};

export type Api = typeof api;
