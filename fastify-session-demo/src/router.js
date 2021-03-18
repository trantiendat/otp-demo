const { totp, authenticator } = require('otplib');

async function routes (fastify, options) {
  fastify.get('/email/requestChange', async (request, reply) => {
    const secret = authenticator.generateSecret();
    const token = totp.generate(secret);
    request.session.secret = secret
    reply.send({
      token,
      secret,
      session: request.session
    })
  })

  fastify.post('/email/verify', async (request, reply) => {
    const isValid = totp.verify({ 
      token: request.body.token,
      secret: request.session.secret
    })
    request.session.secret = '';
    reply.send({
      isVerify: isValid,
      session: request.session
    })
  })
}

module.exports = routes