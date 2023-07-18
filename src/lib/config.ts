export const config = {
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || '',
    timeout: 15000,
  },
  ws: {
    url: process.env.NEXT_PUBLIC_WS_URL || '',
  },
  logger: {
    level: process.env.NEXT_PUBLIC_LOG_LEVEL || 'info',
  },
};
