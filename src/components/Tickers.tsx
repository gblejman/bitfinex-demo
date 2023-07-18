'use client';

import { Ticker } from '../lib/types';
import { useDispatch, useSelector } from '../store';
import { getTickers, selectTickers, selectIsLoading, selectError } from '../store/features/tickersSlice';

export const Tickers = () => {
  const dispatch = useDispatch();
  const tickers = useSelector(selectTickers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleClick = () => dispatch(getTickers());

  return (
    <p>
      <h4>
        <button onClick={handleClick} disabled={isLoading}>
          Fetch
        </button>
      </h4>

      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>Error: {error.message}</span>
      ) : (
        <TickerList tickers={tickers} />
      )}
    </p>
  );
};

const TickerList = ({ tickers = [] }: { tickers: Ticker[] }) => {
  return (
    <div>
      {tickers.map((t) => (
        <p key={t[0]}>
          Symbol: {t[0]} - Bid: {t[0].startsWith('t') ? t[1] : t[2]} - Ask: {t[0].startsWith('t') ? t[3] : t[5]}
        </p>
      ))}
    </div>
  );
};
