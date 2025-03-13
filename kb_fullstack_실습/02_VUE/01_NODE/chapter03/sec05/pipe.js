const fs = require('fs');

const rs = fs.createReadStream('./readMe.text', 'utf8');
const ws = fs.createWriteStream('./writeMe.text');

//pipe를 이용하면 여러개의 스트림을 이어서 처리 가능
rs.pipe(ws);
