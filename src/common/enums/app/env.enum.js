const { PORT } = process.env;

const ENV = {
  APP: {
    SERVER_PORT: PORT,
  },
  API: {
    V1_PATH: '/api/v1',
  },
};

module.exports = {
  ENV,
};
