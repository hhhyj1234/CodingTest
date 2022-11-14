// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을
 * return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
  return [...my_string]
    .map((v) => {
      return v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();
    })
    .join('');
}
