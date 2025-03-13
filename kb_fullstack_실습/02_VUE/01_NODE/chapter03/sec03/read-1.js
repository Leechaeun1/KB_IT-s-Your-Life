fs = require('fs');

// readFileSync: 현재 파일을 동기적으로 읽는다(기본적으로 이진 데이타)
const data = fs.readFileSync('./sec03/example.txt');
console.log(data);
