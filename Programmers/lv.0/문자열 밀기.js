// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
 * 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를
 * return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요. */

let solution = (a, b) => (b + b).indexOf(a);
/**
테스트 1 〉	통과 (0.02ms, 33.4MB)
테스트 2 〉	통과 (0.02ms, 33.5MB)
테스트 3 〉	통과 (0.02ms, 33.4MB)
테스트 4 〉	통과 (0.02ms, 33.5MB)
테스트 5 〉	통과 (0.02ms, 33.5MB)
테스트 6 〉	통과 (0.02ms, 33.5MB)
테스트 7 〉	통과 (0.02ms, 33.4MB) */

function solution(A, B) {
  if (A === B) return 0;
  const a = [...A];
  let count = 0;
  while (count++ < a.length) {
    let item = a.pop();
    a.unshift(item);
    if (a.join('') === B) return count;
  }
  return -1;
}
/**
테스트 1 〉	통과 (0.04ms, 33.6MB)
테스트 2 〉	통과 (0.04ms, 33.6MB)
테스트 3 〉	통과 (0.03ms, 33.6MB)
테스트 4 〉	통과 (0.13ms, 33.6MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.6MB)
테스트 7 〉	통과 (0.12ms, 33.5MB) */

// 3 실패
// function solution(A, B) {
//   const a = [...A];
//   let count = 0;
//   while (count++ < a.length) {
//     let item = a.pop();
//     a.unshift(item);
//     if (a.join('') == B) return count;
//   }
//   return -1;
// }

// 5, 6만 성공...
// 몇 번인지였다..! 문제 잘못읽었음
// function solution(A, B) {
//   const a = [...A];
//   let count = A.length;
//   while (count--) {
//     let item = a.pop();
//     a.unshift(item);
//     if (a.join('') == B) return 1;
//   }
//   return -1;
// }
