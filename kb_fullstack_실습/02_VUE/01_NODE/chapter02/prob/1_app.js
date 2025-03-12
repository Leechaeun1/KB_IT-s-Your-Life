import { orders } from './1_order.js';

const findQuantity = (meatName) => {
  const meat = orders.find((order) => order.name === meatName);
  return meat ? meat.quantity : null;
};

const porkBellyQuantity = findQuantity('삼겹살');

if (porkBellyQuantity !== null) {
  console.log(`✅ 삼겹살 주문 수량: ${porkBellyQuantity}인분`);
} else {
  console.log('❌ 삼겹살 주문 내역이 없습니다.');
}

// import orderList from './order';

// if (orderList) {
//   console.log('✅ 삼겹살 주문 수량: 3인분');
// } else {
//   console.log('❌ 삼겹살 주문 내역이 없습니다.');
// }
