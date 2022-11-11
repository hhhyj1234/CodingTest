// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/** 문자열 before와 after가 매개변수로 주어질 때,
 * before의 순서를 바꾸어 after를 만들 수 있으면 1을,
 * 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요. */

// 문자열을 뒤집는 게 아니고 순서를 바꾸는 거임!

function solution(before, after) {
  const result = [...before].sort().join('') === [...after].sort().join('');
  return result ? 1 : 0;
}
