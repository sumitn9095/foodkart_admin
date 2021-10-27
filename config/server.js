module.exports = ({ env }) => ({
  host: env("HOST", "162.241.85.73"),
  port: env.int("PORT", 45000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "abba858d41adbf953bd8b9f4d7e541b7"),
    },
  },
});
