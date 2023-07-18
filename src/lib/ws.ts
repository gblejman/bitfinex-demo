import { logger } from './logger';

const log = logger.child({ module: 'ws' });

type SendInput = object;
type WatchTickerInput = {
  symbol: string;
};

export type WS = {
  watchTicker: (input: WatchTickerInput) => void;
  send: (input: SendInput) => void;
  close: () => void;
};

export type CreateOptions = {
  url: string;
  onOpen?: () => void;
  onClose?: (error?: Error) => void;
  onError?: (error?: Error) => void;
  onMessage?: (data: unknown) => void;
};

const noop = () => undefined;

export const createWs = ({ url, onOpen = noop, onClose = noop, onError = noop, onMessage = noop }: CreateOptions) => {
  const ws: WebSocket = new WebSocket(url);

  ws.addEventListener('open', (ev) => {
    log.debug(ev, 'open');
    onOpen?.();
  });

  ws.addEventListener('close', (ev) => {
    log.debug(ev, 'close');
    onClose?.(new Error(`code: ${ev.code}, reason: ${ev.reason}`));
  });

  ws.addEventListener('error', (ev) => {
    log.debug(ev, 'error');
    // does not really provide any meaningful error by spec security design
    onError?.();
  });

  ws.addEventListener('message', (ev) => {
    log.debug(ev, 'message');

    if (!ev.isTrusted) return;

    let data;

    try {
      data = JSON.parse(ev.data);

      onMessage?.(data);
    } catch (e) {
      log.debug(e, 'could not parse message');
    }
  });

  const send = (input: object) => {
    try {
      ws.send(JSON.stringify(input));
    } catch (e) {
      log.debug(e, 'could not stringify message');
    }
  };

  const watchTicker = (input: WatchTickerInput) => {
    send({ event: 'subscribe', channel: 'ticker', symbol: input.symbol });
  };

  const close = () => {
    ws.close();
  };

  return {
    watchTicker,
    send,
    close,
  };
};
