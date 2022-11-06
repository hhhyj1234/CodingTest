// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 배열 strlist가 매개변수로 주어집니다.
 * strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요. */

function solution(strlist) {
  let result = [];
  return result.push(strlist.forEach((value) => [...value].length));
}

function solution(strlist) {
  return strlist.map((v) => v.length);
}
/**
 * typeof로 확인해보니 배열의 요소는 string인데 왜 length 적용이 가능할까?
 */
