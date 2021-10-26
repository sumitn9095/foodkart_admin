module.exports = ({ env }) => ({
  host: env("APP_HOST", "http://sumit.digital"),
  port: env.int("NODE_PORT", 5600),
});
