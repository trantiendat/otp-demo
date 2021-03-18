const { totp } = require('otplib');

console.log('Set totp.options.step = 1 // token will changes every 1 second')
totp.options = {
  step: 1
};

const secret = 'secret';
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      return false
    }, 1200);
  });
}
(async () => {
  console.log('[TOTP] Generate secret and token, then verify and check');
  const tokenList = [];
  for (let index = 0; index < 5; index++) {
    console.time('totp');
    await delay()
    let token = totp.generate(secret);
    tokenList.push(token)
    console.timeEnd('totp');
  }

  for (const index in tokenList) {
    const token = tokenList[index];
    const isCheckValid = totp.check(token, secret);
    const isValid = totp.verify({ token, secret });
    console.log(token, ' - ', secret, ' - ', isCheckValid, ' - ', isValid)
  }
})();
