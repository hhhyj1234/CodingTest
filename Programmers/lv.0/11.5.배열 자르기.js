// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
 * numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을
 * return 하도록 solution 함수를 완성해보세요. */

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
