// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**문자열 my_string과 문자 letter이 매개변수로 주어집니다.
 * my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string, letter) {
  return [...my_string].filter((c) => c !== letter).join('');
}

function solution(my_string, letter) {
  return my_string.split(letter).join('');
}

// text.split(a, n) // a에서 잘라서 배열로, n개의 덩어리만 리턴
