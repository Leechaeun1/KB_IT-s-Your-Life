// import { orderList } from './order';

// function restoRant(orders) {
//     const pigOrder = orders.find(order => order.menu === '삼겹살');

// }

// console.log('✅ 삼겹살 주문 수량: 3인분');

import orderList from './order';

if (orderList) {
  console.log('✅ 삼겹살 주문 수량: 3인분');
} else {
  console.log('❌ 삼겹살 주문 내역이 없습니다.');
}
