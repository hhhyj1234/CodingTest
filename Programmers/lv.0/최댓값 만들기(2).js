// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을
 * return하도록 solution 함수를 완성해주세요. */

function solution(numbers) {
  const asc = numbers.sort((a, b) => a - b);
  const max = asc.length - 1;
  if (asc[0] * asc[1] > 0) {
    return Math.max(asc[0] * asc[1], asc[max] * asc[max - 1]);
  } else {
    return asc[max] * asc[max - 1];
  }
}

function solution(numbers) {
  const asc = numbers.sort((a, b) => a - b);
  const max = asc.length - 1;
  const compareNe = asc[0] * asc[1];
  const comparePo = asc[max] * asc[max - 1];
  return compareNe > 0 ? Math.max(compareNe, comparePo) : comparePo;
}

function solution(numbers) {
  const asc = numbers.sort((a, b) => a - b);
  const max = asc.length - 1;
  const compareNe = asc[0] * asc[1];
  const comparePo = asc[max] * asc[max - 1];
  return Math.max(compareNe, comparePo);
}
