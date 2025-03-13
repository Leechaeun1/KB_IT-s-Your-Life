const fs = require('fs');
const rs = fs.createReadStream('./prob/logs/backup_log.txt');
rs.on('data', (chunk) => {
  console.log('백업이 완료되었습니다.');
  // }).on('error', (err) => {
  //     console.error(`백업 중 오류가 발생했습니다.`);
});
//   .on('end', () => {
//     console.log('finished reading data');
//   })
