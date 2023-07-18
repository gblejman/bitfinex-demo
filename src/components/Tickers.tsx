'use client';

import { useInterval } from '@/hooks/useInterval';
import { Tickers } from '@/lib/types';
import { useDispatch, useSelector } from '@/store';
import { getTickers, selectTickers, selectIsLoading, selectError } from '@/store/features/tickersSlice';

const CHECK_INTERVAL_MS = 5 * 1000;

export const TickersInfo = () => {
  const dispatch = useDispatch();
  const tickers = useSelector(selectTickers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const fetch = () => dispatch(getTickers());

  useInterval(fetch, CHECK_INTERVAL_MS, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <span className="h-5">{isLoading ? 'Loading...' : ''}</span>
      {error && <div className="h-5 bg-red-500">Error: {error.message}</div>}
      <TickerList tickers={tickers} />
    </div>
  );
};

const TickerList = ({ tickers = {} }: { tickers: Tickers }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Last Price</th>
          <th>24h Change</th>
          <th>24h High</th>
          <th>24h Low</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(tickers).map((ticker) => (
          <tr key={ticker.symbol}>
            <td>{ticker.symbol}</td>
            <td>{ticker.lastPrice}</td>
            <td>{ticker.dailyChangeRelative || ticker.dailyChangePerc}</td>
            <td>{ticker.high}</td>
            <td>{ticker.low}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
