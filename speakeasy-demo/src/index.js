const { generateSecret } = require('speakeasy');

const secret = generateSecret();
console.log('secret base32', secret.base32);
   