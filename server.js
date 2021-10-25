module.exports = ({ env }) => ({
  host: env("APP_HOST", "162.241.85.73"),
  port: env.int("NODE_PORT", 1337),
});
