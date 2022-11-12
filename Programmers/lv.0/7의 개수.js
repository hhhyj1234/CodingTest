// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때,
 * 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요. */

function solution(array) {
  return [...array.join('')].filter((v) => +v === 7).length;
}

function solution(array) {
  return array.join('').split(7).length - 1;
}
