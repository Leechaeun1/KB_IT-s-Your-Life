fs = require('fs');
fs.appendFile(
  './prob/logs/members.txt',
  `\n이승기: 체중 68kg, 벤치프레스 80kg`,
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log('회원 정보가 성공적으로 추가되었습니당');
  }
);
