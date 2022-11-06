// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 my_string이 매개변수로 주어집니다.
 * my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
  return [...my_string].reverse().join('');
}

// arr.join() // default로 ,을 첨가해 문자열로 반환
// arr.join('') // 구분자 없이 문자열 연결
// arr.join(-) // 구분자 -
