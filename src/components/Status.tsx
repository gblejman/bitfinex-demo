'use client';

import { useDispatch, useSelector } from '@/store';
import { selectStatus, selectIsLoading, getStatus } from '@/store/features/platformSlice';
import { useInterval } from '@/hooks/useInterval';

const CHECK_INTERVAL_MS = 10 * 1000;
const STATUS_BG_COLOR = ['bg-red-500', 'bg-green-500'];

export const Status = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const isLoading = useSelector(selectIsLoading);

  const fetch = () => dispatch(getStatus());

  useInterval(fetch, CHECK_INTERVAL_MS);

  return (
    <div className="flex items-center">
      <span className="text-sm">Status</span>

      <div className={`ml-2 w-2 h-2 rounded ${isLoading ? 'bg-white' : STATUS_BG_COLOR[status]}`} />
    </div>
  );
};
