// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
 * 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
 * balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 */

const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));
function solution(balls, share) {
  return Math.round(
    factorial(balls) / factorial(balls - share) / factorial(share)
  );
}
/**
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 32.2MB)
테스트 10 〉	통과 (0.04ms, 33.5MB)
테스트 11 〉	통과 (0.04ms, 33.4MB)
테스트 12 〉	통과 (0.04ms, 32MB)
테스트 13 〉	통과 (0.04ms, 33.5MB)
테스트 14 〉	통과 (0.04ms, 33.4MB)
테스트 15 〉	통과 (0.04ms, 33.6MB)
테스트 16 〉	통과 (0.04ms, 33.6MB)
테스트 17 〉	통과 (0.06ms, 33.5MB)
테스트 18 〉	통과 (0.07ms, 33.4MB)
테스트 19 〉	통과 (0.04ms, 33.5MB)
테스트 20 〉	통과 (0.04ms, 33.6MB)
테스트 21 〉	통과 (0.04ms, 33.6MB)
테스트 22 〉	통과 (0.04ms, 33.5MB)
테스트 23 〉	통과 (0.04ms, 33.5MB)
테스트 24 〉	통과 (0.04ms, 33.4MB)
테스트 25 〉	통과 (0.06ms, 33.5MB)
테스트 26 〉	통과 (0.04ms, 33.4MB)
테스트 27 〉	통과 (0.04ms, 33.4MB)
테스트 28 〉	통과 (0.04ms, 33.5MB)
테스트 29 〉	통과 (0.04ms, 33.4MB)
테스트 30 〉	통과 (0.04ms, 33.4MB)
테스트 31 〉	통과 (0.04ms, 33.6MB)
테스트 32 〉	통과 (0.06ms, 33.5MB)
테스트 33 〉	통과 (0.04ms, 33.4MB)
테스트 34 〉	통과 (0.04ms, 33.5MB)
테스트 35 〉	통과 (0.04ms, 33.5MB) */

function solution(balls, share) {
  function factorial(n) {
    let fac = 1n;
    for (let i = 1; i <= n; i++) {
      fac *= BigInt(i);
    }
    return fac;
  }
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
/** runtime
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.10ms, 33.6MB)
테스트 8 〉	통과 (0.06ms, 33.6MB)
테스트 9 〉	통과 (0.05ms, 33.6MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.7MB)
테스트 12 〉	통과 (0.05ms, 33.5MB)
테스트 13 〉	통과 (0.05ms, 33.5MB)
테스트 14 〉	통과 (0.05ms, 33.5MB)
테스트 15 〉	통과 (0.05ms, 33.6MB)
테스트 16 〉	통과 (0.05ms, 33.6MB)
테스트 17 〉	통과 (0.06ms, 33.5MB)
테스트 18 〉	통과 (0.05ms, 33.6MB)
테스트 19 〉	통과 (0.06ms, 33.6MB)
테스트 20 〉	통과 (0.06ms, 33.5MB)
테스트 21 〉	통과 (0.06ms, 33.5MB)
테스트 22 〉	통과 (0.06ms, 33.6MB)
테스트 23 〉	통과 (0.06ms, 33.6MB)
테스트 24 〉	통과 (0.06ms, 33.6MB)
테스트 25 〉	통과 (0.06ms, 33.5MB)
테스트 26 〉	통과 (0.06ms, 33.5MB)
테스트 27 〉	통과 (0.06ms, 33.5MB)
테스트 28 〉	통과 (0.06ms, 33.5MB)
테스트 29 〉	통과 (0.06ms, 33.5MB)
테스트 30 〉	통과 (0.09ms, 33.5MB)
테스트 31 〉	통과 (0.06ms, 33.5MB)
테스트 32 〉	통과 (0.06ms, 33.5MB)
테스트 33 〉	통과 (0.06ms, 33.6MB)
테스트 34 〉	통과 (0.09ms, 33.5MB)
테스트 35 〉	통과 (0.06ms, 33.5MB)
 */

// function solution(balls, share) {
//   let numerator = BigInt(balls);
//   let demoninator = BigInt(share);
//   for (let i = 0; i < share; i++) {
//     numerator *= BigInt(--balls);
//     demoninator *= BigInt(--share);
//   }
//   return numerator / demoninator;
// }

/** not pass (5-7, 28, 33-35)
 * function solution(balls, share) {
    function factorial(n) {
        let fac = 1;
        for(let i = 1; i <=n; i++) {
            fac *= i;
        }
        return fac
    }
    return factorial(balls)/(factorial(balls-share)*factorial(share))
}
 */
