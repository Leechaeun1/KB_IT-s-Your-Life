fs = require('fs');

fs.readFile('./prob/logs/workout_log.txt', 'utf-8', (err, data) => {
  if (err) {
  } else {
    console.log('운동 기록 출력 완료!');
    console.log(data);
  }
});

if (!fs.existsSync('./prob/logs/workout_log.txt')) {
  // text-1.txt 파일이 있다면
  console.log('운동 기록 파일이 없습니다.');
}
