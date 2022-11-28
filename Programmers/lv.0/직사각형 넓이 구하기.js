// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표
 * [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
 * 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요. */

function solution(dots) {
  let x = new Set(),
    y = new Set();

  for (let pos of dots) {
    x.add(pos[0]);
    y.add(pos[1]);
  }

  return Math.abs([...x][0] - [...x][1]) * Math.abs([...y][0] - [...y][1]);
}

var s = Math.abs,
  solution = ([[a, b], [c, d], [e, f]]) =>
    s(a - (a == c ? e : c)) * s(b - (b == d ? f : d));

function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
  const height =
    x1 === x2
      ? Math.abs(y2 - y1)
      : x1 === x3
      ? Math.abs(y3 - y1)
      : Math.abs(y4 - y1);
  const width =
    y1 === y2
      ? Math.abs(x1 - x2)
      : y1 === y3
      ? Math.abs(x3 - x1)
      : Math.abs(x4 - x1);
  return height * width;
}

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
/** runtime
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB) */
