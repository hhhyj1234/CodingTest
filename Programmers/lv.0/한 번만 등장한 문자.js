// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을
 * return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다. */

const solution = (s) =>
  [...s]
    .filter((c) => s.match(new RegExp(c, 'g')).length == 1)
    .sort()
    .join('');
/**
테스트 1 〉	통과 (0.13ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.5MB)
테스트 3 〉	통과 (0.18ms, 33.4MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (0.13ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.5MB)
테스트 7 〉	통과 (0.15ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.5MB)
테스트 9 〉	통과 (0.08ms, 32.9MB)
테스트 10 〉	통과 (0.14ms, 33.4MB) */

function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  // s의 원소 c에 대하여, s에서의 c인덱스가 s에서의 마지막c 인덱스와 같다면(= 1개라면) res 배열에 c를 추가하자.
  return res.sort().join('');
}
/**
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.19ms, 33.4MB)
테스트 4 〉	통과 (0.20ms, 33.6MB)
테스트 5 〉	통과 (0.21ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.19ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.6MB)
테스트 9 〉	통과 (0.10ms, 33.5MB)
테스트 10 〉	통과 (0.07ms, 33.4MB) */

// 문자 등장하면 카운트+1 해서 카운트가 1인 것만 리턴
function solution(s) {
  const set = [...new Set(s)];
  let count = new Array(set.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < set.length; j++) {
      if (s[i] === set[j]) {
        count[j]++;
      }
    }
  }
  return set
    .filter((v, i) => count[i] === 1)
    .sort()
    .join('');
}
/**
테스트 1 〉	통과 (0.28ms, 33.5MB)
테스트 2 〉	통과 (0.31ms, 33.5MB)
테스트 3 〉	통과 (0.27ms, 33.4MB)
테스트 4 〉	통과 (0.21ms, 33.4MB)
테스트 5 〉	통과 (0.24ms, 33.5MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.33ms, 33.5MB)
테스트 8 〉	통과 (0.23ms, 33.5MB)
테스트 9 〉	통과 (0.17ms, 33.5MB)
테스트 10 〉	통과 (0.30ms, 33.6MB)
 */
