// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/** 정수 배열 array와 정수 n이 매개변수로 주어질 때,
 * array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요. */
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

// 접근: n-value 절대값 구해서 가장 작은 값의 인덱스 이용해서 원 배열에서 출력하기

function solution2(array, n) {
  const min = Math.min(...array.map((v) => Math.abs(v - n)));
  return array.sort((a, b) => a - b).find((v) => Math.abs(v - n) === min);
}

function solution1(array, n) {
  const sort = [...array].sort((a, b) => a - b);
  const abs = sort.map((v) => Math.abs(n - v));
  const min = [...abs].sort((a, b) => a - b)[0];
  const idx = abs.indexOf(min);
  return sort[idx];
}

// 5번 실패
// function solution(array, n) {
//   const abs = array.map((v) => Math.abs(n - v));
//   const min = [...abs].sort((a, b) => a - b)[0];
//   const idx = abs.indexOf(min);
//   return array[idx];
// }
