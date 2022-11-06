// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을
 * return하도록 solution 함수를 완성해주세요 */

function solution(n) {
  const arr = n.toString().split('');
  return arr.reduce((sum, value) => (sum += parseInt(value)), 0);
}

function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((sum, value) => (sum += value * 1), 0);
}
