// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**정수 배열 array가 매개변수로 주어질 때,
 * 가장 큰 수와 그 수의 인덱스를 담은 배열을
 * return 하도록 solution 함수를 완성해보세요. */

function solution(array) {
  const compareArr = Array.from(array);
  const biggest = compareArr.sort((a, b) => b - a)[0];
  const index = array.findIndex((v) => v === biggest);
  return [biggest, index];
}

function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}
