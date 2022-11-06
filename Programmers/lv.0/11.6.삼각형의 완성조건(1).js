// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
 * 세 변으로 삼각형을 만들 수 있다면 1,
 * 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요. */

function solution(sides) {
  let [side1, side2, side3] = sides.sort((a, b) => a - b);
  return side3 < side1 + side2 ? 1 : 2;
}
