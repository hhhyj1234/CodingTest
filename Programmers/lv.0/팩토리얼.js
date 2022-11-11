// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/** i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
 * 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
 * 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를
 * return 하도록 solution 함수를 완성해주세요. */

function solution(n) {
  let result = 1;
  let num = 0;
  for (let i = 1; result <= n; i++) {
    result *= i;
    num++;
  }
  return num - 1;
}

function solution(n) {
  let result = 1;
  let count = 0;
  while (result <= n) {
    result *= ++count;
  }
  return count - 1;
}
