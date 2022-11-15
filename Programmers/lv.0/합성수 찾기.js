// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 * 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를
 * return하도록 solution 함수를 완성해주세요. */

function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue;
    else count++;
  }
  return n - count - 1;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 왜 안 됨? 2일때 소수 인식 안됨
// function solution(n) {
//   let count = 0;
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;
//     count++;
//   }
//   return n - count - 1;
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
