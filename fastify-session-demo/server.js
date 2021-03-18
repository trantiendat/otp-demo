const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');

module.exports = function (fastify, options, next) {
  fastify.register(fastifyCookie);
  fastify.register(fastifySession, {
    secret: 'a secret with minimum length of 32 characters',
    cookieName: 'newName',
    cookie: {
      secure: false, // set true in case production. Default value is true
      maxAge: 1800000
    },
  });
  fastify.register(require('./src/router'))
  next()
}