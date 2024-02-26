const validator = require('validator');


var email = validator.isEmail('khoagmail.com');
console.log(email);

console.log(validator.isURL('khoa.com'));