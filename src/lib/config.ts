export const config = {
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || 'https://try.readme.io/https://api-pub.bitfinex.com/v2',
    timeout: 15000,
  },
  ws: {
    url: process.env.NEXT_PUBLIC_WS_URL || 'wss://api-pub.bitfinex.com/ws/2',
  },
  logger: {
    level: process.env.NEXT_PUBLIC_LOG_LEVEL || 'info',
  },
};
