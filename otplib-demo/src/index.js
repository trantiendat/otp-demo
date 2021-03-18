const { authenticator, totp, hotp } = require('otplib');

console.log('Generate secret and token, then verify and check');
for (let index = 0; index < 5; index++) {
  console.time('authenticator');
  const secret = authenticator.generateSecret();
  let token = authenticator.generate(secret);
  try {
    if (index === 4) {
      token = 'incorrect';
    }
    const isCheckValid = authenticator.check(token, secret);
    const isValid = authenticator.verify({ token, secret });
    console.log(token, ' - ', secret, ' - ', isCheckValid, ' - ', isValid)
  } catch (err) {
    console.error(err);
  }
  console.timeEnd('authenticator');
}

console.log('[TOTP] Generate secret and token, then verify and check');
for (let index = 0; index < 5; index++) {
  console.time('totp');
  const secret = authenticator.generateSecret();
  let token = totp.generate(secret);
  if (index === 4) {
    token = 'incorrect';
  }
  const isCheckValid = totp.check(token, secret);
  const isValid = totp.verify({ token, secret });
  console.log(token, ' - ', secret, ' - ', isCheckValid, ' - ', isValid)
  console.timeEnd('totp');
}

console.log('[HOTP] Generate secret and token, then verify and check');
for (let index = 0; index < 5; index++) {
  console.time('hotp');
  const secret = authenticator.generateSecret();
  let counter = 1;
  let token = hotp.generate(secret, counter);
  if (index === 3) {
    counter = 2;
  }
  if (index === 4) {
    token = 'incorrect';
  }
  const isCheckValid = hotp.check(token, secret, counter);
  const isValid = hotp.verify({ token, secret, counter });
  console.log(token, ' - ', secret, ' - ', counter, ' - ', isCheckValid, ' - ', isValid)
  console.timeEnd('hotp');
}

