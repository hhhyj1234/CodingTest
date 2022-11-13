// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 my_string이 매개변수로 주어집니다.
 * my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
 * my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
  return my_string
    .replace(/[a-z]/gi, ',')
    .split(',')
    .reduce((sum, value) => (sum += +value), 0);
}
