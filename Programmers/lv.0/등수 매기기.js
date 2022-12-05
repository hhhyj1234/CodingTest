// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
 * 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
 * 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요. */

// sort: 배열 자체를 수정함!!!!!!!!
function solution(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);
  const avgSort = [...avg].sort((a, b) => b - a);
  return avg.map((v) => avgSort.findIndex((s) => s === v) + 1);
}

// 아니 왜 avgSort 순서로 나오는 거지???
// function solution(score) {
//   const avg = score.map((v) => (v[0] + v[1]) / 2);
//   console.log('avg', avg);
//   const avgSort = avg.sort((a, b) => b - a);
//   console.log('avgSort', avgSort);
//   return avg.map((v) => avgSort.findIndex((s) => s === v));
// }
