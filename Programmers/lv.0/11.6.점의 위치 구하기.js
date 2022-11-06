// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
 * 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를
 * return 하도록 solution 함수를 완성해주세요. */

function solution(dot) {
  const [x, y] = dot;
  return x * y > 0 ? (x > 0 ? 1 : 3) : x < 0 ? 2 : 4;
}
