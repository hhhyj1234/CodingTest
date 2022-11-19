// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때,
 * 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요. */

function solution(my_string) {
  return new Function('return ' + my_string)();
}

const solution = eval;

function solution(my_string) {
  return eval(my_string);
}
