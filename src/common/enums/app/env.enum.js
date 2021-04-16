const { PORT, PLACEHOLDER_API_URL } = process.env;

const ENV = {
  APP: {
    SERVER_PORT: PORT,
  },
  API: {
    V1_PATH: '/api/v1',
  },
  API_URL: {
    PLACEHOLDER_API: PLACEHOLDER_API_URL,
  },
};

module.exports = {
  ENV,
};
