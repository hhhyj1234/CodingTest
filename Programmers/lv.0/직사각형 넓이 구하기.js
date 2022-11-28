// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표
 * [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
 * 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요. */

// dots의 x좌표가 같으면 y값 차 절대값, dots의 y좌표가 같으면 x값 차 절대값 구해서 곱하기
function solution(dots) {
  let height = 0;
  let width = 0;
  for (let i = 0; i < 4; i++) {
    if (dots[0][0] === dots[i][0]) {
      height = Math.abs(dots[0][1] - dots[i][1]);
    }
    if (dots[0][1] === dots[i][1]) {
      width = Math.abs(dots[0][0] - dots[i][0]);
    }
  }
  return height * width;
}
