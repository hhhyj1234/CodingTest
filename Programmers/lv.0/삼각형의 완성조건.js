/** 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요. */

function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

function solution(sides) {
  const [a, b] = sides.sort((a, b) => b - a); // a>b
  return 2 * b - 1;
}

function solution(sides) {
  return sides.sort((a, b) => a - b)[0] * 2 - 1;
}
