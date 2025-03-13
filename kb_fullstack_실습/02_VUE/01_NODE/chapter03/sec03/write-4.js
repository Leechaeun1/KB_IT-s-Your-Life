fs = require('fs');

let content = `
=============================
새로운 애옹
=============================`;

// flag를 a로 변경해주면 기존 파일에 내용이 추가된다(append)
fs.writeFileSync('./text-1.txt', content, { flag: 'a' });
