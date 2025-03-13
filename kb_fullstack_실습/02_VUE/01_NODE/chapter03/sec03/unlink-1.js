const fs = require('fs');

// fs.unlinkSync : 해당 경로의 파일을 동기적으로 삭제
fs.unlinkSync('./text-1.txt');
console.log('file deleted');
