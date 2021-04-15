const { PORT } = process.env;

const ENV = {
  APP: {
    SERVER_PORT: PORT,
  },
};

module.exports = {
  ENV,
};
