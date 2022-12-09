// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
 * 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요. */

function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer = answer + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}

function solution(chicken) {
  let count = 0;
  let coupon = chicken % 10;
  let left = Math.floor(chicken / 10);
  count += left;
  left += coupon;
  while (true) {
    coupon = left % 10;
    left = Math.floor(left / 10);
    count += left;
    if (left === 0) break;
    left += coupon;
  }
  return count;
}

// break를 어떻게 걸어야하는지 모르겠음
// function solution(chicken) {
//   let count = 0;
//   let coupon = 0;
//   while (true) {
//     count += Math.floor(chicken / 10);
//     coupon += chicken % 10;
//     chicken = Math.floor(chicken / 10);
//     if (coupon >= 10) {
//       count += Math.floor(coupon / 10);
//       coupon %= coupon;
//     }
//   }
//   return count;
// }
