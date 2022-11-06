// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**정수가 담긴 리스트 num_list가 주어질 때,
 * num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을
 * return 하도록 solution 함수를 완성해보세요. */

function solution(num_list) {
  let even = num_list.filter((value) => value % 2 === 0).length;
  let odd = num_list.filter((value) => value % 2 === 1).length;
  return [even, odd];
}
