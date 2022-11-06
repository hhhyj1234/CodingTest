// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**머쓱이네 옷가게는 10만 원 이상 사면 5%,
 * 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
 * 구매한 옷의 가격 price가 주어질 때,
 * 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요. */

function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  } else return price;
}

// 100000부터 넣으면 곱연산 계속됨; 순서 유의
// 십만원 미만(할인X)도 잊지 말고 넣어주자
