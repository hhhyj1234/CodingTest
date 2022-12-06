// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
 * 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
 * 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
/**runtime
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.1MB)
테스트 6 〉	통과 (0.06ms, 32.7MB)
테스트 7 〉	통과 (0.14ms, 32.7MB)
테스트 8 〉	통과 (0.14ms, 33.4MB)
테스트 9 〉	통과 (0.15ms, 33.1MB)
테스트 10 〉	통과 (0.14ms, 33.4MB)
테스트 11 〉	통과 (0.06ms, 33.4MB)
테스트 12 〉	통과 (0.06ms, 33.3MB)
 */

function solution(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);
  const avgSort = [...avg].sort((a, b) => b - a);
  return avg.map((v) => avgSort.indexOf(v) + 1);
}
/**runtime
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.6MB)
테스트 3 〉	통과 (0.14ms, 33.4MB)
테스트 4 〉	통과 (0.09ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.22ms, 33.5MB)
테스트 8 〉	통과 (0.16ms, 33.4MB)
테스트 9 〉	통과 (0.15ms, 33.4MB)
테스트 10 〉	통과 (0.14ms, 33.6MB)
테스트 11 〉	통과 (0.08ms, 33.4MB)
테스트 12 〉	통과 (0.08ms, 33.4MB)
 */

// sort: 배열 자체를 수정함!!!!!!!!
function solution(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);
  // /2 굳이 안 해도 됨
  const avgSort = [...avg].sort((a, b) => b - a);
  return avg.map((v) => avgSort.findIndex((s) => s === v) + 1);
}
/**runtime
테스트 1 〉	통과 (0.10ms, 33.3MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.18ms, 33.4MB)
테스트 8 〉	통과 (0.15ms, 33.5MB)
테스트 9 〉	통과 (0.15ms, 33.5MB)
테스트 10 〉	통과 (0.15ms, 33.5MB)
테스트 11 〉	통과 (0.10ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
 */

// 아니 왜 avgSort 순서로 나오는 거지???
// function solution(score) {
//   const avg = score.map((v) => (v[0] + v[1]) / 2);
//   console.log('avg', avg);
//   const avgSort = avg.sort((a, b) => b - a);
//   console.log('avgSort', avgSort);
//   return avg.map((v) => avgSort.findIndex((s) => s === v));
// }
