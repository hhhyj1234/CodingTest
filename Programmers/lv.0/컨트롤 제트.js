// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**숫자들이 공백으로 구분된 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다.
 * 이 때 “Z”가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 “Z”로 이루어진 문자열 s가 주어질 때,
 * 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요. */

function solution(s) {
  const arr = s.split(' ');
  while (arr.includes('Z')) {
    let idx = arr.indexOf('Z');
    arr.splice(idx - 1, 2);
  }
  return arr.reduce((s, v) => s + +v, 0);
}

function solution(s) {
  s = s.split(' ');
  let arr = [];
  for (let v of s) v === 'Z' ? (arr.length ? arr.pop() : '') : arr.push(v);
  return arr.reduce((a, v) => a + +v, 0);
}
/** run time
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.5MB)
테스트 3 〉	통과 (0.07ms, 33.5MB)
테스트 4 〉	통과 (0.09ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.6MB) */

function solution(s) {
  const arr = s.split(' ');
  while (arr.includes('Z')) {
    let idx = arr.indexOf('Z');
    arr.splice(idx - 1, 2);
  }
  if (arr.length === 0) {
    if (isNaN(s.slice(-1))) return 0;
    else return +s.slice(-1);
  }
  return arr.reduce((s, v) => (s += +v), 0);
}
/** run time
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.11ms, 33.4MB)
테스트 4 〉	통과 (0.09ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.10ms, 33.4MB)
테스트 7 〉	통과 (0.10ms, 33.5MB) */

// test 2 fail
// function solution(s) {
//   const arr = s.split(' ');
//   while (arr.includes('Z')) {
//     let idx = arr.indexOf('Z');
//     arr.splice(idx - 1, 2);
//   }
//   if (arr.length === 0) return +s.slice(-1);
//   return arr.reduce((s, v) => (s += +v), 0);
// }

// test 2, 7 fail
// function solution(s) {
//   const arr = s.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'Z') (arr[i] = 0), (arr[i - 1] = 0);
//   }
//   return arr.reduce((s, v) => (s += +v), 0);
// }
