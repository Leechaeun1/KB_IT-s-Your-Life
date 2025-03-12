// 다른 js파일에서 export한 모듈 가져오기
const user = require('./user');
const hello = require('./hello');

console.log(user);
console.log(hello);

hello(user);
