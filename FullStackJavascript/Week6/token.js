// using crc module to generate tokens

const crc = require('crc');

aToken = crc.crc32('monkey');

console.log(aToken);