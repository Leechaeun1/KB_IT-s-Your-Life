function outer() {
  var value = 1234;

  function inner() {
    console.log('value = ' + value);
  }
  return inner;
}
//받아온 내부 함수를 다시 호출했으므로 정상 동작
var outin = outer();
outin();
