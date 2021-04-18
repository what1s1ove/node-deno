const { PORT, PLACEHOLDER_API_URL } = process.env;

const ENV = {
  APP: {
    SERVER_PORT: <string>PORT,
  },
  API: {
    V1_PATH: '/api/v1',
  },
  API_URL: {
    PLACEHOLDER_API: <string>PLACEHOLDER_API_URL,
  },
} as const;

export { ENV };
