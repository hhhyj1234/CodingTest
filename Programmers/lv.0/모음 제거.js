// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
 * 문자열 my_string이 매개변수로 주어질 때
 * 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
  const arr = [...my_string];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') arr[i] = '';
    else if (arr[i] == 'e') arr[i] = '';
    else if (arr[i] == 'i') arr[i] = '';
    else if (arr[i] == 'o') arr[i] = '';
    else if (arr[i] == 'u') arr[i] = '';
  }
  return arr.join('');
}

function solution(my_string) {
  return [...my_string]
    .filter(
      (char) =>
        char != 'a' && char != 'e' && char != 'i' && char != 'o' && char != 'u'
    )
    .join('');
}

function solution(my_string) {
  return [...my_string]
    .filter((char) => !['a', 'e', 'i', 'o', 'u'].includes(char))
    .join('');
}

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
