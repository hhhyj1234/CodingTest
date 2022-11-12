// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/** 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
 * 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지
 * return 하도록 solution 함수를 완성해주세요. */

function solution(i, j, k) {
  const result = [];
  for (let num = i; num <= j; num++) {
    result.push(num);
  }
  return [...result.join('')].filter((v) => v == k).length;
}

function solution(i, j, k) {
  const result = [];
  for (let num = i; num <= j; num++) {
    result.push(num);
  }
  return [...result.join('')].filter((v) => +v === k).length;
}

function solution(i, j, k) {
  const result = [];
  for (i; i <= j; i++) {
    result.push(i);
  }
  return [...result.join('')].filter((v) => +v === k).length;
}

function solution(i, j, k) {
  const result = Array.from({ length: j - i + 1 }, (_, index) => index + i);
  return [...result.join('')].filter((v) => +v === k).length;
}

function solution(i, j, k) {
  let result = '';
  for (i; i <= j; i++) {
    result += i;
  }
  return result.split(k).length - 1;
}
