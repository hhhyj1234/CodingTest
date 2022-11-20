// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을
 * return하도록 solution 함수를 완성해주세요. */

function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
}

function solution(my_str, n) {
  const arr = [...my_str];
  const result = [];
  while (arr.length > 0) {
    result.push(arr.splice(0, n).join(''));
  }
  return result;
}

function solution(my_str, n) {
  const arr = [...my_str];
  const result = [];
  for (let i = 0; i < my_str.length / n; i++) {
    result.push(arr.splice(0, n).join(''));
  }
  return result;
}
