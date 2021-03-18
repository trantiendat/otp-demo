const OTPAuth = require('otpauth');

// Create a new TOTP object.
let totpUserOne = new OTPAuth.TOTP({
	issuer: 'ACME',
	label: 'AzureDiamond',
	algorithm: 'SHA1',
	digits: 6,
	period: 1,
	secret: 'NB2W45DFOIZA' // or "OTPAuth.Secret.fromB32('NB2W45DFOIZA')"
});

let totpUserTwo = new OTPAuth.TOTP({
	issuer: 'ACME',
	label: 'AzureDiamond',
	algorithm: 'SHA1',
	digits: 6,
	period: 30,
	secret: 'NB2W45DFOIZA' // or "OTPAuth.Secret.fromB32('NB2W45DFOIZA')"
});

async function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      return false;
    }, 1000)
  })
}

(async () => {
  for (let index = 0; index < 3; index++) {
    await delay();
    // Generate a token.
    let token = totpUserOne.generate();
    let token2 = totpUserTwo.generate();
    console.log(token2);
    console.log(totpUserOne.validate({
      token: token2,
      window: 1
    }))
    console.log(totpUserTwo.validate({
      token: token2,
      window: 1
    }))
    // Validate a token.
    let delta = totpUserTwo.validate({
      token: token,
      window: 1
    });
    console.log(token, delta)
  }
})();
