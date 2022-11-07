// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**정수 n이 매개변수로 주어질 때,
 * n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}
