const bcrypt = require('bcryptjs');

(() => {
  console.log('generate salt and hash, then using bcrypt.compareSync')
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync("B4c0/\/", salt);

  console.log('salt', salt);
  console.log('hash', hash);
  console.log('compare hash with correct value', bcrypt.compareSync("B4c0/\/", hash));
  console.log('compare hash with incorrect value', bcrypt.compareSync("not_bacon", hash));
})();

(() => {
  console.log('generate salt and hash, then using bcrypt.compareSync')
  const salt = bcrypt.genSaltSync(6);
  const hash = bcrypt.hashSync("B4c0/\/", salt);

  console.log('salt', salt);
  console.log('hash', hash);
  console.log('compare hash with correct value', bcrypt.compareSync("B4c0/\/", hash));
  console.log('compare hash with incorrect value', bcrypt.compareSync("not_bacon", hash));
})();


