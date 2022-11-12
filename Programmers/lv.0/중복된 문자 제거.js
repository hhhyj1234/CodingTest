// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 my_string이 매개변수로 주어집니다.
 * my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을
 * return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
  return [...new Set(my_string)].join('');
}
