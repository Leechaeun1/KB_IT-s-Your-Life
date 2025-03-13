fs = require('fs');

fs.writeFile(
  './prob/members/kim_jong_kook.txt',
  '김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('파일 생성 완료!');
      const path = require('path');
      console.log(`디렉터리 경로 : ${'members'}`);
      console.log(`파일 이름 : ${'kim_jong_kook.text'}`);
      const ext = path.extname('./prob/members/kim_jong_kook');
      console.log(`파일 확장자: ${'.txt'}`);
      console.log(`파일 이름(확장자 제외): ${'kim_jong_kook'} `);
    }
  }
);
