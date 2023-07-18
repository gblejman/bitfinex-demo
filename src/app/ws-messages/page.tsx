'use client';

import { useDispatch, useSelector } from '@/store';
import { watchTicker, close, selecMessages, selectError } from '@/store/features/wsSlice';

export default function WsMessages() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const messages = useSelector(selecMessages);

  const handleWatchTicker = () => {
    dispatch(watchTicker('tBTCUSD'));
  };

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <button className="px-5 rounded-md bg-blue-500" onClick={handleWatchTicker}>
          Watch tBTCUSD
        </button>
        <button className="px-5 ml-2 rounded-md bg-blue-500" onClick={handleClose}>
          Close
        </button>
      </div>

      {error && <div className="h-5 bg-red-500">Error: {error.message}</div>}

      <MessageList messages={messages} />
    </div>
  );
}

const MessageList = ({ messages = [] }: { messages: unknown[] }) => {
  return <div className="mt-5">{messages?.map((message, i) => <p key={i}>{JSON.stringify(message)}</p>)}</div>;
};
